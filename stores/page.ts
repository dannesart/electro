import axios from "axios";
import { defineStore } from "pinia";

type Page = {
  title: string;
  id: string;
  route: string;
  slug: string;
  blocks: any[];
};

type State = {
  _pages: Page[];
};

const state = () =>
  <State>{
    _pages: [],
  };

const getters = {
  pages: (state: State) => state._pages,
};

export const usePageStore = defineStore("PageStore", {
  state,
  getters,
  actions: {
    async getPages() {
      try {
        const pages = await axios.get<Page[]>("http://localhost:8080/pages");
        this._pages = pages.data;
      } catch (error) {}
    },
    async getPage(id: string) {
      await axios.get("http://localhost:8080/pages?slug=world", {});
    },
  },
});
