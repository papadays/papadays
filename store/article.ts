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

export const actions: ActionTree<RootState, RootState> = {
  async getArticle({ commit }) {
    const article: Article = {
      id: 1,
      title: 'sample title 1',
    }
    commit('setArticle', article)
  },
  async getArticleListRecent({ commit }) {
    const articleListRecent: Article[] = [
      {
        id: 1,
        title: 'sample title 1',
      },
      {
        id: 2,
        title: 'sample title 2',
      },
      {
        id: 3,
        title: 'sample title 3',
      },
    ]
    commit('setArticleListRecent', articleListRecent)
  },
  async getArticleListCategory({ commit }) {
    const articleListCategory: Article[] = [
      {
        id: 1,
        title: 'sample title 1',
      },
      {
        id: 2,
        title: 'sample title 2',
      },
      {
        id: 3,
        title: 'sample title 3',
      },
    ]
    commit('setArticleListCategory', articleListCategory)
  },
  async getArticleListTag({ commit }) {
    const articleListTag: Article[] = [
      {
        id: 1,
        title: 'sample title 1',
      },
      {
        id: 2,
        title: 'sample title 2',
      },
      {
        id: 3,
        title: 'sample title 3',
      },
    ]
    commit('setArticleListTag', articleListTag)
  },
  async getArticleListSearchWord({ commit }) {
    const articleListSearchWord: Article[] = [
      {
        id: 1,
        title: 'sample title 1',
      },
      {
        id: 2,
        title: 'sample title 2',
      },
      {
        id: 3,
        title: 'sample title 3',
      },
    ]
    commit('setArticleListSearchWord', articleListSearchWord)
  },
}
