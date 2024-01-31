import Button from "./used/Button";
import MenuIcon from "./used/svgs/MenuIcon";

function Credentials({ openDropDown }: { openDropDown: () => void }) {
  return (
    <div className="flex font-inter">
      <MenuIcon classes="block md:hidden cursor-pointer" onToggle={openDropDown} />
      <div className="flex max-md:hidden gap-4 max-lg:flex-end ">
        <Button className="text-[#979592] font-medium">Sign in</Button>
        <Button className=" bg-[#133416] font-semibold text-white px-7 py-4 rounded-md">
          Try it for free
        </Button>
      </div>
    </div>
  );
}

export default Credentials;
