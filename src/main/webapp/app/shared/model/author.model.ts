import { Moment } from 'moment';
import { IBook } from 'app/shared/model/book.model';

export interface IAuthor {
  id?: number;
  name?: string;
  birthDate?: string;
  tests?: IBook[];
}

export const defaultValue: Readonly<IAuthor> = {};
