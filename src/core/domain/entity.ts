import { EntityId } from '@/core/domain/entity-id';
import { Guard } from '@/libs/guard';

interface BaseEntityProps {
  id: EntityId;
}

interface CreateEntityProps<T> {
  id: EntityId;
  props: T;
}

export abstract class Entity<EntityProps> {
  protected readonly props!: EntityProps;

  protected abstract entityId: EntityId;

  public constructor({ id, props }: CreateEntityProps<EntityProps>) {
    this.setId(id);
    this.props = props;
    this.validate();
  }

  public static isEntity(entity: unknown): entity is Entity<unknown> {
    return entity instanceof Entity;
  }

  public getPropsCopy(): BaseEntityProps & EntityProps {
    const propsCopy = {
      id: this.id,
      ...this.props,
    };

    return Object.freeze(propsCopy);
  }

  // eslint-disable-next-line complexity
  public equals(object?: Entity<EntityProps>): boolean {
    if (Guard.isEmpty(object)) {
      return false;
    }

    if (this === object) {
      return true;
    }

    if (!Entity.isEntity(object)) {
      return false;
    }

    return this.id.equals(object.id);
  }

  private setId(id: EntityId): void {
    this.entityId = id;
  }

  public get id(): EntityId {
    return this.entityId;
  }

  abstract validate(): void;
}
