import { defineStore } from "pinia";

type Page = {
  name: string;
  id: string;
  route: string;
  blocks: any[];
};

type State = {
  _query: string | null;
};

const state = () =>
  <State>{
    _query: null,
  };

const getters = {
  query: (state: State) => state._query,
};

export const useSearchStore = defineStore("SearchStore", {
  state,
  getters,
  actions: {
    async search() {},
  },
});
