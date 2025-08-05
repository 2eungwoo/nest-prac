import {IsNotEmpty, IsString} from "class-validator";

export class AIChatRequest {
  @IsString()
  @IsNotEmpty()
  prompt: string;

  @IsString()
  @IsNotEmpty()
  userId: string;
}