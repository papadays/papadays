export * from './state';

export class Article {
  id!: number;
  date!: string;
  modified!: string;
  title!: {
    rendered: string;
  };
  content!: {
    rendered: string;
  };
  excerpt!: {
    rendered: string;
  };
  categories!: number[];
  tags!: number[];
}
