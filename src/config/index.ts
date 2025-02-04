interface BaseConf {
  baseApi: string;
  mockBaseApi: string;
}

interface EnvConf {
  development: BaseConf;
  production: BaseConf;
}

class AllConf {
  env!: keyof EnvConf;
  isMock: boolean = false;
  baseApi!: string;
  mockBaseApi!: string;
}

class EnvConfigClass {
  static envConfigClass: EnvConfigClass = new EnvConfigClass();

  readonly curEnv =
    import.meta.env.MODE === "development" ? "development" : "production"; // 当前环境变量
  envConf!: EnvConf;
  allConf!: AllConf;

  constructor() {
    this.initConf();
    this.getCurEnv();
  }

  initConf() {
    this.envConf = {
      development: {
        baseApi: "/api",
        mockBaseApi:
          "https://www.fastmock.site/mock/a244a48ca0f6b7efa1d57b9e57b2c8b/dangdang/",
      },
      production: {
        baseApi: "http://yourdomain:80/dang/",
        mockBaseApi: "",
      },
    };
  }

  getCurEnv() {
    const curEnv = this.curEnv;
    return (this.allConf = {
      isMock: false,
      env: curEnv,
      ...this.envConf[curEnv],
    });
  }
}

export default EnvConfigClass.envConfigClass.allConf;
