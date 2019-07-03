import { RootState, Article } from "~/types";
import { MutationTree, ActionTree } from "vuex";

export const state = (): RootState => ({
  article: new Article(),
  articleListRecent: [],
  articleListCategory: [],
  articleListTag: [],
  articleListSearchWord: [],
})

export const mutations: MutationTree<RootState> = {
  setArticle(state: RootState, article: Article){
    state.article = article
  },
  setArticleListRecent(state: RootState, articleListRecent: Article[]) {
    state.articleListRecent = articleListRecent
  },
  setArticleListCategory(state: RootState, articleListCategory: Article[]) {
    state.articleListCategory = articleListCategory
  },
  setArticleListTag(state: RootState, articleListTag: Article[]) {
    state.articleListTag = articleListTag
  },
  setArticleListSearchWord(state: RootState, articleListSearchWord: Article[]) {
    state.articleListSearchWord = articleListSearchWord
  },
}

export const actions: ActionTree<RootState, RootState> = {}
