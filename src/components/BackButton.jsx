import { HiArrowLongLeft } from "react-icons/hi2";
import { useMoveBack } from "../hooks/useMoveBack";

function BackButton() {
  const moveBack = useMoveBack();
  return (
    <div className="px-16 py-4 font-semibold flex justify-end">
      <button
        onClick={moveBack}
        className="flex items-center gap-2 hover:text-akaccent-600 transition-all"
      >
        <HiArrowLongLeft size={24} />
        <span>Back</span>
      </button>
    </div>
  );
}

export default BackButton;
