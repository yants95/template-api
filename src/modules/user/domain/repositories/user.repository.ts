import { Repository } from '@/core/domain/repository';
import { User } from '@/modules/user/application/entities/user';

export abstract class UserRepository extends Repository<User> {}
