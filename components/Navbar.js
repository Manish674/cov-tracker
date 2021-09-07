import Link from "next/link";

const Navbar = () => {
  return (
    <div className="border flex justify-end pr-[6rem] space-x-[2rem] text-2xl py-[1rem]">
      <Link href="#">Home</Link>
      <Link href="#">News</Link>
    </div>
  );
};

export default Navbar;
