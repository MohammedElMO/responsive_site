import Icons from "./ReviewsCompanyIcons";
import Title from "./Title";
import Button from "./used/Button";

function Main() {
  return (
    <>
      <main className="font-inter flex pt-28 mb-20 overflow-hidden items-center justify-between px-10 lg:px-24">
        <section className="flex flex-col items-start ">
          <Title
            chunckOne="Onedeck is your remote "
            chunckTwo="conference calling tool"
          />
          <p className="text-base font-medium text-[#979592] w-[38ch]  lg:w-[50ch]  xl:w-[60ch] leading-7 py-4">
            Onedeck is service that allows you to create beautiful, oneline,and
            encrypted video calls for you and remote team
          </p>
          <Button className="flex-shrink-0 bg-green-900 font-semibold text-white px-7 py-4 rounded-md">
            Try it for free
          </Button>
          <div className="flex gap-5 mt-10 items-start  w-full">
            <span className="text-[#8c8a88]">
              5.0 Rating based on reviews from:
            </span>
            <Icons />
          </div>
        </section>
        <img
          alt="main hero image"
          className="object-contain h-96 w-96 z-20 mt-10 hidden lg:block"
          src={"/hero_image.png?url"}
          loading="lazy"
        />
      </main>
    </>
  );
}

export default Main;
