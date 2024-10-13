const Navbar = () => {
  return (
    <header className="w-full py-8 bg-white border-b-2 border-gray-100">
    <nav className="flex justify-evenly items-center text-nowrap">
      <h1 className="text-4xl font-bold pr-12">
        <a href="/">
          <span className="text-[#A567D8]">D</span>
          <span className="text-[#00B7FF]">E</span>
          <span className="text-[#E71980]">I </span>
          <span className="text-main-color">Decoder</span>
        </a>
      </h1>
      <ul className="flex space-x-12 text-xl font-extrabold">
        <li><a href="/about" className="text-[#A567D8]">About</a></li>
        <li><a href="/decoder" className="text-[#00B7FF]">Try it Now</a></li>
        <li><a href="/faq" className="text-[#E71980]">FAQ</a></li>
      </ul>
    </nav>
  </header>
  );
};

export default Navbar;