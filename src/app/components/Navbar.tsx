const Navbar = () => {
  return (
    <header className="w-full py-4 bg-white">
    <nav className="flex justify-between px-10 pb-6 text-slate-600 border-b border-gray-100">
      <h1 className="text-xl font-bold "><a href="/">DEI Decoder</a></h1>
      <ul className="flex space-x-6 ">
        <li><a href="/about">About</a></li>
        <li><a href="/">Try it Now</a></li>
        <li><a href="/Faq">FAQ</a></li>
      </ul>
    </nav>
  </header>
  );
};

export default Navbar;