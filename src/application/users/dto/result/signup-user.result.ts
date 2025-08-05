export class SignupUserResult {
  constructor(
      public readonly id: number,
      public readonly email: string,
      public readonly name: string,
  ) {}
}