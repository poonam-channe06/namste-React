import { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = (data) => {
  console.log("dtassss", data.data.itemCards);

  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    // setShowIndex();
    setShowItems(!showItems)
  };

  return (
    <div>
      {/**header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.data.title} ({data.data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList items={data.data.itemCards} />}
      </div>
    </div>
  );
};

export default ResCategory;
