const Review = ({ children, name, job }) => {
  return (
    <div className="max-w-xl m-auto py-12 flex flex-col items-center px-4 bg-bid-light-skin rounded-2xl shadow-sm">
      <img
        className="py-4"
        src={"/img/5-stars.png"}
        alt="Imagen de 5 estrellas doradas."
        width={150}
        height={10}
      />

      <div className="text-center font-playfair pb-4 text-stone-900 font-semibold text-xl">
        {children}
      </div>
      <div className="flex flex-col items-center">
        <span className="text-stone-600 font-semibold text-base mb-1">
          {name}
        </span>
        <span className="text-stone-400 font-light text-sm">{job}</span>
      </div>
    </div>
  );
};

export default Review;
