import { useEffect } from "react";
import { useState } from "react";

// export function useForceUpdate() {
//   const [sortItem, getSortItem] = useState([]);

//   useEffect(() => {
//     const shuffleSortItem = () => {
//       let sortItemIndex = sortItem.length;
//       while (sortItemIndex != 0) {
//         let randomIndex = Math.floor(Math.random() * sortItemIndex);
//         sortItemIndex--;

//         [sortItem[sortItemIndex], sortItem[randomIndex]] = [
//           sortItem[randomIndex],
//           sortItem[sortItemIndex],
//         ];

//         getSortItem(sortItem);
//       }
//     };
//   }, [sortItem]);
//   return sortItem;
// }

export function useForceUpdate(initialItems) {
  const [items, setItems] = useState(initialItems);

  const shuffleItem = () => {
    const shuffled = [...items];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex]];
    }
    setItems(shuffled);
  };

  return { items, shuffleItem };
}
