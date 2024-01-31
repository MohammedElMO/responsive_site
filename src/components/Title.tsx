
function Title({
  chunckOne,
  chunckTwo,
}: {
  chunckOne: string;
  chunckTwo: string;
}) {
  return (
    <h1 className="text-4xl ml-0 lg:text-6xl font-bold w-[15ch] lg:w-[20ch] lg:ml-1">
      <span >{chunckOne}</span>
      <span className="text-[#f7b300]">{chunckTwo}</span>
    </h1>
  );
}

export default Title;
