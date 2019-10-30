import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
import state from "./state";

const home = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default home;
