import { SET_DATA } from "./mutation-types";
export default {
  [SET_DATA](state, data) {
    state.data = data;
  }
};
