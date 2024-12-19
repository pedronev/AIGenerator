import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";

const Navbar = () => {
  return (
    <div className="flex  items-center p-4 ">
      <MobileSidebar />
      <div className="flex w-full justify-end ">
        <UserButton />
        <p>sdfew</p>
      </div>
    </div>
  );
};

export default Navbar;
