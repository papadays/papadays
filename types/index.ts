export * from './state';

export class Article {
  id!: number;
  date!: string;
  modified!: string;
  title!: string;
  content!: string;
  excerpt!: string;
  categories!: number[];
  tags!: number[];
  // tslint:disable-next-line
  _embedded!: {
    'wp:term': [
      [
        {
          id: number;
          name: string;
          slug: string;
        },
      ],
      [
        {
          id: number;
          name: string;
          slug: string;
        },
      ],
    ];
  };
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
