const Banner = () => {
  return (
    <div className="p-8 md:p-24 bg-[#1313130D] rounded-3xl grid grid-cols-1 md:grid-cols-3 gap-y-5 text-center md:text-start">
      <div className="col-span-2 md:p-10 space-y-5 md:space-y-10">
        <h1 className="text-3xl md:text-6xl font-bold">
          Books to freshen up your bookshelf
        </h1>
        <button
          type="button"
          className="px-2 py-1 md:px-5 md:py-2 text-sm md:text-lg font-semibold rounded bg-[#23BE0A] text-white"
        >
          View The List
        </button>
      </div>
      <div className="col-span-1">
        <img src="/banner-img.png" alt="banner-img" className="w-full"/>
      </div>
    </div>
  );
};

export default Banner;
