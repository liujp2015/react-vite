import request from "../utils/axiosUtil";

export const getPexlesList = (data) => {
  return request.get("/pexels/list", false, data);
};
