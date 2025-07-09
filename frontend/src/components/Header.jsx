const Header = () => {
  return (
    <header className="bg-slate-800 py-3 px-2 md:h-[15vh] flex flex-col justify-center items-center text-center shadow-md md:py-6 md:px-4">
      <h1 className="text-2xl sm:text-5xl font-extrabold text-blue-300 tracking-wide">
        Aethra
      </h1>
      <p className="text-gray-400 mt-2 text-sm sm:text-base tracking-wider">
        Your adaptable AI companion
      </p>
    </header>
  );
};

export default Header