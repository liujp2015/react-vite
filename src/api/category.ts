import request from "../utils/axiosUtil";

export interface Category {
  id: string;
  name: string;
  col?: number;
  urlname: string;
}
export const getCategory = () => {
  return request.get("/category", false);
};
