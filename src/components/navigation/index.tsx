import { useEffect, useRef, useState } from "react";
import { useIsMobileTerminal } from "../../hooks/useIsMobileTerminal";
import MobileNavigation from "./mobile";
import { Category, getCategory } from "../../api/category";

const Navigation = () => {
  const isMobileTerminal = useIsMobileTerminal();
  const [categories, setCategorys] = useState<Category[]>();
  // const categories = useRef<Category[]>();
  const categorys1 = async () => {
    try {
      const axiosResponse = await getCategory();
      setCategorys(axiosResponse.data.categorys);
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
