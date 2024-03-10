import { EntityId } from '@/core/domain/entity-id';

interface BaseEntityProps {
  id: EntityId;
}

interface CreateEntityProps<T> {
  id: EntityId;
  props: T;
}

export abstract class Entity<EntityProps> {
  protected readonly props!: EntityProps;

  public entityId: EntityId;

  public constructor({ id, props }: CreateEntityProps<EntityProps>) {
    this.props = props;
    this.entityId = id;
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

  private setId(id: EntityId): void {
    this.entityId = id;
  }

  public get id(): EntityId {
    return this.entityId;
  }

  abstract validate(): void;
}
