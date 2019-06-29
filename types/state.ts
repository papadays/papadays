import { Article } from "~/types";

export interface RootState {
  article: Article;
  articleListRecent: Article[];
  articleListCategory: Article[];
  articleListTag: Article[];
  articleListSearchWord: Article[];
}
