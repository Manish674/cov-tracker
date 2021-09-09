import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-16 font-black md:text-xl flex justify-end space-x-4 pr-[2rem] items-center">
      <Link href="#">Home</Link>
      <Link href="#">News</Link>
    </div>
  );
};

export default Navbar;
