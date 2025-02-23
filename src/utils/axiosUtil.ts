import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig } from "axios";
import conf from "../config/index";
import md5 from "md5";

//增加mock
interface AxiosRequestConfig_ extends AxiosRequestConfig {
  isMock: boolean;
}

type Method = "get" | "post" | "put" | "delete" | "patch";
const methods: Method[] = ["get", "post", "delete", "put", "patch"];

type ReqFn = (url: string, isMock: boolean, data?: any) => AxiosPromise<any>;
interface ReqExecute {
  get: ReqFn;
  post: ReqFn;
  put: ReqFn;
  delete: ReqFn;
  patch: ReqFn;
}
export type AxiosRequest = Record<Method, ReqFn>;

// // 1. 请求开始之前的请求拦截器。
// beforeReqIntercept() {}

// // 2. 数据响应之前的响应拦截器。
// beforeResponseIntercept() {}

// // 3. 发送请求给服务器。
// sendRequest(options: any) {}

// // 4. 深入灵活应用 TS 完成请求 method 类型自动提示。
// reqPrepare() {}

class AxiosUtil {
  static axiosUtil: AxiosUtil = new AxiosUtil();

  axiosInstance!: AxiosInstance;
  request!: ReqExecute;

  constructor() {
    this.request = {
      get: (): any => {},
      post: (): any => {},
      delete: (): any => {},
      put: (): any => {},
      patch: (): any => {},
    };
    this.createAxiosInstance();
    this.beforeReqIntercept();
    this.beforeResponseIntercept();
    this.reqPrepare();
  }

  createAxiosInstance() {
    this.axiosInstance = axios.create({ timeout: 15000 });
  }

  beforeReqIntercept() {
    this.axiosInstance.interceptors.request.use(
      (request) => {
        // const token = storage.get("token");
        // const headers = request.headers!;
        // if (!headers.authorization && token) {
        //   headers.authorization = `Bearer ${token}`;
        // }
        const { icode, time } = getTestICode();
        request.headers.icode = icode;
        request.headers.codeType = time;
        // config.headers.icode = '你需要在这里填入你的 icode'
        // if (store.getters.token) {
        //   // 如果token存在 注入token
        //   config.headers.Authorization = `Bearer ${store.getters.token}`
        // }
        // return config; // 必须返回配置
        return request;
      },
      (err) => {
        console.log(`请求错误: ${err}`);
      }
    );
  }

  beforeResponseIntercept() {
    this.axiosInstance.interceptors.response.use(
      (response) => {
        const { data, msg, code } = response.data;
        if (code === 200) {
          return response.data;
        } else if (code === 500) {
          // ElMessage.error(msg);
          return;
        }
        if (msg === "这是不合法或者过期token") {
          // storage.set('token', "")
          // storage.set('token', null)
          // goodstorege.set('token', null)
          // router.push({ name: "login" });
          // ElMessage.error(msg);
          throw new Error(msg);
        } else {
          // ElMessage.error("服务器出现了未知错误");
          return;
        }
      },
      (err) => {
        // ElMessage.error(`SERVER_ERR: ${err}`);
        return;
      }
    );
  }

  sendRequest(options: AxiosRequestConfig_) {
    if (conf.env === "production") {
      this.axiosInstance.defaults.baseURL = conf.baseApi;
    } else if (conf.env === "development") {
      const isMock: boolean = options.isMock || conf.isMock;
      this.axiosInstance.defaults.baseURL = isMock
        ? conf.mockBaseApi
        : conf.baseApi;
    }
    return this.axiosInstance(options); // 返回一个 AxiosPromise<any> 对象
  }

  reqPrepare() {
    methods.forEach((method) => {
      this.request[method] = (url, isMock, data) => {
        return this.sendRequest({
          url,
          method,
          data,
          isMock,
        });
      };
    });
  }
}

/**
 * 返回 Icode 的实现
 */
function getTestICode() {
  const now = Date.now() / 1000;
  const code = now + "LGD_Sunday-1991-12-30";
  return {
    icode: md5(code),
    time: now,
  };
}

export default AxiosUtil.axiosUtil.request;
