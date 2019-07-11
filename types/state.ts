import { Article, Category, Tag } from '~/types';

export interface RootState {
  article: Article;
  articleListRecent: Article[];
  articleListCategory: Article[];
  articleListTag: Article[];
  articleListSearchWord: Article[];
  categoryList: Category[];
  tagList: Tag[];
}
