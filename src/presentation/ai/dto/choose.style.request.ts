import {IsEnum} from 'class-validator';
import {AIStyle} from "../../../infrastructure/external/ai/utils/ai-style.enum";

export class ChooseStyleRequest {
  @IsEnum(AIStyle)
  style: AIStyle;
}