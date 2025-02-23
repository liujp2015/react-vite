import React, { useEffect, useState } from "react";
import Item from "./item";
import { getPexlesList } from "../../api/pexels";

type PropType = {
  className?;
};
interface pexle {
  id: string;
}
const List: React.FC<PropType> = ({ className }) => {
  const [listData, setListData] = useState<pexle[]>([]);
  const query = {
    page: 1,
    size: 20,
  };

  const pexles = async () => {
    const response = await getPexlesList(query);
    console.log("pexles", response.data.list);
    setListData(response.data.list);
  };

  useEffect(() => {
    pexles();
  }, []);
  return (
    <div className={className}>
      {listData.map((item) => {
        return <Item key={item.id}></Item>;
      })}
    </div>
  );
};

export default List;
