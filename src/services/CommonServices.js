import BaseService from "./BaseService";

class CommonServices extends BaseService {
  getMockup(opts = {}) {
    const getAPI = "mockup";
    this.endPoint = "/product";
    return this.get(opts, getAPI);
  }
}

export default new CommonServices();
