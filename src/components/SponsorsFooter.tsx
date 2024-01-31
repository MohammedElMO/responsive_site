import Netflix from "./used/svgs/Netflix";
import ShopifyLogo from "./used/svgs/ShopifyLogo";
import SpotifyLogo from "./used/svgs/SpotifyLogo";
import WalmartLogo from "./used/svgs/WalmartLogo";

function SponsorsFooter() {
  return (
    <footer className=" text-center mt-10 w-full pb-10 px-5 font-inter flex flex-col gap-10 ">
      <p className="text-sm text-[#979592]">Trusted by 3+ million people at companies like</p>
      <section className="grid grid-cols-2 overflow-hidden  md:grid-cols-2 lg:grid-cols-4 place-items-center md:gap-y-8 gap-8 gap-x-5 ">
        <Netflix />
        <ShopifyLogo />
        <SpotifyLogo />
        <WalmartLogo />
      </section>
    </footer>
  );
}

export default SponsorsFooter;
