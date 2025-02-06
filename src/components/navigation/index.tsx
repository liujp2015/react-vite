import { useEffect, useRef, useState } from "react";
import { useIsMobileTerminal } from "../../hooks/useIsMobileTerminal";
import MobileNavigation from "./mobile";
import { Category, getCategory } from "../../api/category";
import { ALL_CATEGORY_ITEM } from "../../constants";

const Navigation = () => {
  const isMobileTerminal = useIsMobileTerminal();
  const [categories, setCategorys] = useState<Category[]>([]);
  // const categories = useRef<Category[]>();
  const categorys1 = async () => {
    try {
      const axiosResponse = await getCategory();
      const updatedCategories = [...axiosResponse.data.categorys];
      updatedCategories.unshift(ALL_CATEGORY_ITEM);
      setCategorys(updatedCategories);
      // categories.current = axiosResponse.data.categorys;
    } catch (error) {
      console.error("Failed to fetch categories", error);
    }
  };

  useEffect(() => {
    categorys1(); // 在组件挂载时获取分类数据
  }, []);

  return (
    <div>
      {isMobileTerminal && categories && (
        <MobileNavigation categories={categories} />
        // <MobileNavigation categories={categories.current} />
      )}
    </div>
  );
};

export default Navigation;
