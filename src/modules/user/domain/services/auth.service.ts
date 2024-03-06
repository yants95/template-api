export interface RegisterDTO {
  email: string;
  password: string;
}

export abstract class AuthService {
  public abstract register(register: RegisterDTO): Promise<unknown>;
}
