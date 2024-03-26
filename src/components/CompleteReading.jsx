import { useEffect, useState } from "react";
import CompleteBookCard from "./CompleteBookCard";

const CompleteReading = () => {
  const [readData, setReadData] = useState([]);
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("readBooks")) || [];
    setReadData(savedData);
  }, []);
//   console.log(readData);
  return (
    <div>
      {
        readData.map((data,idx)=> <CompleteBookCard key={idx} data={data}></CompleteBookCard>)
      }
    </div>
  );
};

export default CompleteReading;
