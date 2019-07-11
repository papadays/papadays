import { RootState, Article, Category, Tag } from '~/types';
import { MutationTree, ActionTree } from 'vuex';
import axios from 'axios';

export const state = (): RootState => ({
  article: new Article(),
  articleListRecent: [],
  articleListCategory: [],
  articleListTag: [],
  articleListSearchWord: [],
  categoryList: [],
  tagList: [],
});

export const mutations: MutationTree<RootState> = {
  setArticle(state: RootState, article: Article) {
    state.article = article;
  },
  setArticleListRecent(state: RootState, articleListRecent: Article[]) {
    state.articleListRecent = articleListRecent;
  },
  setArticleListCategory(state: RootState, articleListCategory: Article[]) {
    state.articleListCategory = articleListCategory;
  },
  setArticleListTag(state: RootState, articleListTag: Article[]) {
    state.articleListTag = articleListTag;
  },
  setArticleListSearchWord(state: RootState, articleListSearchWord: Article[]) {
    state.articleListSearchWord = articleListSearchWord;
  },
  setCategoryList(state: RootState, categoryList: Category[]) {
    state.categoryList = categoryList;
  },
  setTagList(state: RootState, tagList: Tag[]) {
    state.tagList = tagList;
  },
};

export const actions: ActionTree<RootState, RootState> = {
  async putArticleListRecent({ commit }, context) {
    const res = await axios.get('http://papadays.xsrv.jp/wp-json/wp/v2/posts?_embed&orderby=date&per_page=5');
    commit('setArticleListRecent', res.data);
  },
  async putCategoryList({ commit }, context) {
    const res = await axios.get('http://papadays.xsrv.jp/wp-json/wp/v2/categories');
    commit('setCategoryList', res.data);
  },
  async putTagList({ commit }, context) {
    const res = await axios.get('http://papadays.xsrv.jp/wp-json/wp/v2/tags');
    commit('setTagList', res.data);
  },
};
