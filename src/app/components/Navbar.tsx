const Navbar = () => {
  return (
    <header className="w-full py-8 bg-white border-b-2 border-gray-100">
    <nav className="flex justify-evenly items-center text-nowrap">
      <h1 className="text-4xl font-bold pr-12">
        <a href="/">
          <span className="text-about-color">D</span>
          <span className="text-try-color">E</span>
          <span className="text-faq-color">I </span>
          <span className="text-main-color">Decoder</span>
        </a>
      </h1>
      <ul className="flex space-x-12 text-xl font-extrabold">
        <li><a href="/about" className="text-about-color">About</a></li>
        <li><a href="/decoder" className="text-try-color">Try it Now</a></li>
        <li><a href="/faq" className="text-faq-color">FAQ</a></li>
      </ul>
    </nav>
  </header>
  );
};

export default Navbar;