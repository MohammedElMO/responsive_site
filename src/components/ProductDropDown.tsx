import CloseIcon from "./menu/CloseIcon";
import FiberIcon from "./menu/FiberIcon";
import SpenceIcon from "./menu/SpenceIcon";
import GradieIcon from "./menu/gradieIcon";

function ProductDropDown({ closeMenu }: { closeMenu: () => void }) {
  return (
    <section className="absolute top-0 mt-5 left-0 mx-10   lg:top-16 lg:left-[31%] lg:w-[30%]  font-inter  p-10 bg-white rounded-lg flex flex-col gap-4 ">
      <div className="hidden lg:block h-5 w-5 bg-white border rotate-45 absolute -top-2 -z-10 left-5 "></div>
      <div className=" flex justify-between lg:hidden ">
        <span className="uppercase  text-[#a3adb7] font-medium text-lg">
          Product
        </span>
        <CloseIcon closeMenu={closeMenu} />
      </div>
      <div className="hover:bg-[#a3adb730] p-2 rounded cursor-pointer">
        <h3 className="font-semibold flex gap-2 text-[#1b354c]">
          <SpenceIcon />
          Spence
        </h3>
        <p className="leading-6  text-[#a3adb7]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, quas?
          Quas, voluptate!
        </p>
      </div>
      <div className="hover:bg-[#a3adb730] p-2 rounded cursor-pointer">
        <h3 className="font-semibold flex gap-2 text-[#1b354c]">
          <FiberIcon />
          Fiber Landing Page
        </h3>
        <p className="leading-6 flex gap-4 text-[#a3adb7]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
          consectetur
        </p>
      </div>
      <div className="hover:bg-[#a3adb730] p-2 rounded cursor-pointer">
        <h3 className="font-semibold flex gap-2 text-[#1b354c]">
          <GradieIcon />
          Gradie Sign Up Page
        </h3>
        <p className="leading-6  text-[#a3adb7]">
          Lorem ipsum dolor sit amet consectetur adipisicing eli t. Quas,
          consectetur
        </p>
      </div>
    </section>
  );
}

export default ProductDropDown;
