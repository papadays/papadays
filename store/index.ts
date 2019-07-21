import { RootState, Article, Category, Tag } from '~/types';
import { MutationTree, ActionTree } from 'vuex';
import axios from 'axios';

const constants = require('~/plugins/my-constants.js');

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
  async putArticle({ commit, state }, context) {
    const res = await axios.get(`${constants.API_PATH}posts/${context.id}?_embed`);
    formatArticleData(res.data);
    commit('setArticle', res.data);
  },
  async putArticleListRecent({ commit, state }, context) {
    const res = await axios.get(`${constants.API_PATH}posts?_embed&orderby=date&per_page=6`);
    commit('setArticleListRecent', res.data);
  },
  async putCategoryList({ commit, state }, context) {
    const res = await axios.get(`${constants.API_PATH}categories`);
    commit('setCategoryList', res.data);
  },
  async putTagList({ commit, state }, context) {
    const res = await axios.get(`${constants.API_PATH}tags`);
    commit('setTagList', res.data);
  },
};

export const formatArticleData = (data: any) => {
  data.title = data.title.rendered;
  data.content = data.content.rendered;
  data.excerpt = data.excerpt.rendered;
};
