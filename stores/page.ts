import { defineStore } from "pinia";

type Page = {
  name: string;
  id: string;
  route: string;
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
      this._pages = [
        {
          name: "Home",
          route: "/",
          id: "home",
          blocks: [],
        },
        {
          name: "About",
          route: "/about",
          id: "about",
          blocks: [],
        },
        {
          name: "Contact",
          route: "/contact",
          id: "contact",
          blocks: [],
        },
      ];
    },
    async getPage(id: string) {},
  },
});
