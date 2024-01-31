import { useState } from "react";
import Credentials from "./Credentials";
import Logo from "./Logo";
import ProductDropDown from "./ProductDropDown";

function NavBar() {
  const [isDropDownShown, setIsDropDownShown] = useState(true);
  const LINKS = ["Products", "Challenges", "Resources", "other Links"];
  return (
    <header className="absolute top-0  items-center  font-inter flex justify-between w-screen max-md:px-10 max-lg:px-10 px-28 py-6">
      <Logo />
      <nav className="gap-2 lg:relative list-none mx-10 items-center hidden lg:flex">
        {LINKS.map((link) => (
          <li
            onClick={
              link === LINKS[0]
                ? () => setIsDropDownShown((prevState) => !prevState)
                : () => null
            }
            className="text-sm hover:bg-[#97959224] p-3 rounded text-[#979592] cursor-pointer font-medium"
            key={link}
          >
            {link}
          </li>
        ))}
      </nav>
      {isDropDownShown && <ProductDropDown closeMenu={() => setIsDropDownShown(false)} />}
      <Credentials openDropDown={() => setIsDropDownShown((prev) => !prev)} />
    </header>
  );
}

export default NavBar;
