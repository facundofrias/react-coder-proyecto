import { useEffect, useState } from "react";

const useItem = (itemId) => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        const foundItem = data.find(product => product.id == itemId);
        setItem(foundItem);
      } catch (error) {
        console.log("Error fetching data", error);
      }
    }, 2000);
  }, [itemId]);

  return item;
};

export default useItem;