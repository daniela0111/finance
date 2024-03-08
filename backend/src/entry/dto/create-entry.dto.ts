import { Column } from "typeorm";
import { isStringObject } from "util/types";

export class CreateEntryDto {
  @IsNotEmpty()
  @isStringObject()
  amount: number;

  @Column()
  date: Date;

  @Column()
  currency: string;

  @Column()
  name: string;

  @Column()
  comment?: string;
}