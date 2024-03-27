import { useEffect, useState } from "react";
import WishListCard from "./WishListCard";

const WishList = () => {
  const [wishData, setWishData] = useState([]);
//   const [displayBook,setDisplayBook] = useState([]);
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("wishBooks")) || [];
    setWishData(savedData);
    // setDisplayBook(savedData);
  }, []);
  return (
    <div className="my-16">
      {
        wishData?.map((data,idx)=> <WishListCard key={idx} data={data}></WishListCard>)
      }
    </div>
  );
};

export default WishList;
