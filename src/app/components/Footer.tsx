import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full flex bg-white text-black py-6 border-t-2 border-gray-100 justify-center">
      <Image
        src="/icons/civic_tech_logo.png"
        alt="Document Icon"
        width={100} // Replace with your icon's width
        height={100} // Replace with your icon's height
        className=""
      />{" "}
    </footer>
  );
};

export default Footer;
