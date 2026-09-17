export default function CornerDecoration({ corner }) {
  const cornerStyles = {
    "top-left": "border-t-[#464271] border-t-2 border-l-[#464271] border-l-2 ",
    "top-right": "border-t-[#464271] border-t-2 border-r-[#464271] border-r-2 ",
    "bottom-left":
      "border-b-[#464271] border-b-2 border-l-[#464271] border-l-2 ",
    "bottom-right":
      "border-b-[#464271] border-b-2 border-r-[#464271] border-r-2 ",
  };
  const postion = {
    "top-left": "top-12 left-8 ",
    "top-right": "top-12 right-8 ",
    "bottom-left": "bottom-12 left-8 ",
    "bottom-right": "bottom-12 right-8 ",
  };
  return (
    <div
      className={`absolute ${postion[corner]} h-8 w-8   ${cornerStyles[corner]} `}
    >
      {" "}
    </div>
  );
}
