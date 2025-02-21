import React, { useEffect, useState } from "react";
import Item from "./item";
import { getPexlesList } from "../../api/pexels";

type PropType = {
  className?;
};
const List: React.FC<PropType> = ({ className }) => {
  const [listData, setListData] = useState();
  const query = {
    page: 1,
    size: 20,
  };
  useEffect(async () => {
    const response = await getPexlesList(query);
    setListData(response);
  });
  return <div className={className}>{<Item />}</div>;
};

export default List;
