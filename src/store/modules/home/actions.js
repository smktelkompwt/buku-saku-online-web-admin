import CommonServices from "../../../services/CommonServices";
import * as types from "./mutation-types";

export default {
  getData({ commit }) {
    return new Promise((resolve, reject) => {
      const options = {};
      CommonServices.getMockup(options)
        .then(response => {
          commit(types.SET_DATA, response.data);
          resolve(200);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
};
