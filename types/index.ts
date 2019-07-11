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
  // tslint:disable-next-line
  _embedded!: object;
}

export class Category {
  id!: number;
  count!: number;
  name!: string;
  slug!: string;
}

export class Tag {
  id!: number;
  count!: number;
  name!: string;
  slug!: string;
}
