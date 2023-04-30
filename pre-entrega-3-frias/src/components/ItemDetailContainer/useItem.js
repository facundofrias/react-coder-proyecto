import { useEffect, useState } from "react";
import { getItems } from "../ItemList/getItems";

const useItem = (itemId) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const productsData = await getItems();
      const foundItem = productsData.find(product => product.id == itemId);
      setItem(foundItem);
    };

    fetchData();
  
    return () => clearTimeout(fetchData);
  }, [itemId]);

  return item;
};

export default useItem;