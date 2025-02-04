import { Category } from "../../../api/category";

interface ChildComponentProps {
  categories: Category[] | undefined;
}

const MobileNavigation: React.FC<ChildComponentProps> = ({ categories }) => {
  return (
    <>
      <div className=""></div>
      <div>
        {(categories || []).map((item, index) => (
          <div key={index}>{item.name}</div> // 假设 Category 包含 name 属性
        ))}
      </div>
    </>
  );
};

export default MobileNavigation;
