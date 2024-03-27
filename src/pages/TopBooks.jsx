import { useLoaderData } from "react-router-dom";
import TopBooksCard from "../components/TopBooksCard";

const TopBooks = () => {
  const topBooks = useLoaderData();
  // console.log(topBooks);
  return (
    <div className="my-7 md:my-16 space-y-10">
      <div className="bg-cyan-950 py-7 rounded-2xl">
        <h2 className="text-5xl md:text-7xl font-black text-center bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.300),theme(colors.green.100),theme(colors.sky.400),theme(colors.yellow.200),theme(colors.sky.400),theme(colors.green.100),theme(colors.green.300))] bg-[length:200%_auto] animate-gradient">
          Top Three Books Here
        </h2>
      </div>
      <div className="space-y-3 text-center">
        <h2 className="text-5xl font-bold">Top Books Update</h2>
        <p className="font-serif text-lg md:px-20 text-gray-600">
          Welcome to the Top Books Update section, your ultimate guide to the
          literary universe! Explore the latest releases, timeless classics, and
          hidden gems carefully curated by our team of book enthusiasts.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {topBooks.map((topBook, idx) => (
          <TopBooksCard key={idx} topBook={topBook}></TopBooksCard>
        ))}
      </div>
    </div>
  );
};

export default TopBooks;
