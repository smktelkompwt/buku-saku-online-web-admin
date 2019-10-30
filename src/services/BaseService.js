import axios from "axios";
import configCommon from "@/config/common";

class BaseService {
  constructor() {
    this.endPoint = "";
    this.useApi = "";
    this.setBaseUrl();
  }
  setBaseUrl() {
    let base = configCommon.API.mockup;
    if (this.useApi) {
      base = configCommon.API[this.useApi];
    }
    this.http = axios.create({
      header: {
        Accept: "application/json"
      },
      baseURL: base
    });
  }
  includeDefaultOptions(options) {
    let accessToken = window.localStorage.getItem("access_token");
    this.setBaseUrl();
    if (accessToken !== null) {
      const defaultData = {
        header: {
          "Content-type": "application/json",
          Authorization: `Bearer ${accessToken}`
        }
      };
      return Object.assign(options, defaultData);
    }
    return options;
  }
  get(options = {}, api = "") {
    this.useApi = api;
    const opts = this.includeDefaultOptions(options);
    return this.http.get(this.endPoint, opts);
  }
  getNoAuth(options = {}, api = "") {
    this.useApi = api;
    this.setBaseUrl();
    const data = {
      headers: {
        "Content-type": "application/json"
      }
    };
    const opts = Object.assign(options, data);
    return this.http.get(this.endPoint, opts);
  }
  post(payloads, options = {}) {
    const opts = this.includeDefaultOptions(options);
    return this.http.post(this.endPoint, payloads, opts);
  }
  patch(payloads, options = {}) {
    const opts = this.includeDefaultOptions(options);
    return this.http.patch(this.endPoint, payloads, opts);
  }
}

export default BaseService;
