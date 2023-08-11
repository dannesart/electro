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
      const config = useRuntimeConfig();
      try {
        const pages = await axios.get<Page[]>(config.public.api + "/pages");
        this._pages = pages.data;
      } catch (error) {}
    },
    async getPage({ id, slug }: { id?: string; slug?: string }) {
      const config = useRuntimeConfig();
      await axios.get(config.public.api + `/pages?slug=${slug}&id=${id}`, {});
    },
  },
});
