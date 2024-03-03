import { DomainException } from '@/domain/domain-exception';
import { Id } from '@/domain/id';

export class EntityId implements Id<EntityId> {
  public constructor(private readonly identifier: string | number) {
    this.validate();
  }

  public equals(id: EntityId): boolean {
    return this.identifier === id.toString();
  }

  public toString(): string {
    return this.identifier.toString();
  }

  protected validate(): void {
    if (this.identifierIsEmpty()) {
      throw new DomainException('Aggregate Id should not be empty');
    }
  }

  private identifierIsEmpty(): boolean {
    if (typeof this.identifier === 'string') {
      return this.identifier.trim().length <= 0;
    }

    return this.identifier <= 0;
  }
}
