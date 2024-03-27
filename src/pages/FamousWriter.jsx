import { useLoaderData } from "react-router-dom";
import FamousWriteCard from "../components/FamousWriteCard";

const FamousWriter = () => {
  const writer = useLoaderData();
  console.log(writer);
  return (
    <div className="my-7 md:my-16 space-y-10">
      <div className="bg-sky-950 py-7 rounded-2xl">
        <h2 className="text-5xl md:text-7xl font-black text-center bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.300),theme(colors.green.100),theme(colors.sky.400),theme(colors.yellow.200),theme(colors.sky.400),theme(colors.green.100),theme(colors.green.300))] bg-[length:200%_auto] animate-gradient">
          Famous Writers
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {writer.map((famousWriter, idx) => (
          <FamousWriteCard key={idx} famousWriter={famousWriter}></FamousWriteCard>
        ))}
      </div>
    </div>
  );
};

export default FamousWriter;
