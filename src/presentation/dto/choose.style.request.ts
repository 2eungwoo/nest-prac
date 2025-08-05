import {IsEnum} from 'class-validator';
import {AIStyle} from "../../domain/ai/ai-style.enum";

export class ChooseStyleRequest {
  @IsEnum(AIStyle)
  style: AIStyle;
}