const Navbar = () => {
  return (
    <header className="w-full py-8 bg-white border-b-2 border-gray-100">
    <nav className="flex justify-evenly  text-theme-1 items-center text-nowrap">
      <h1 className="text-4xl font-bold pr-12"><a href="/">DEI Decoder</a></h1>
      <ul className="flex space-x-12 text-xl font-extrabold">
        <li><a href="/about" className="">About</a></li>
        <li><a href="/upload">Try it Now</a></li>
        <li><a href="/faq">FAQ</a></li>
      </ul>
    </nav>
  </header>
  );
};

export default Navbar;