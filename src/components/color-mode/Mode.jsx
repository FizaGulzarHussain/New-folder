import { useDispatch } from "react-redux";
import { setGrad, setMode, setModeBg } from "../../store/features/modeSlice";

const Mode = () => {
  const dispatch = useDispatch();
  return (
    <div className="bg-white p-1 absolute top-[100px] right-0">
      <ul className="flex  justify-center flex-col items-end space-y-2">
        <li className="">
          <span className="block border border-black hover:border-blue-900 rounded-full transition ease-in duration-300">
            <p
              onClick={() => {
                dispatch(setMode("text-[#1e3a8a]"));
                dispatch(setModeBg("bg-[#1e3a8a]"));
                dispatch(setGrad("#1e3a8a"));
              }}
              className="block w-3 h-3 cursor-pointer bg-blue-600 rounded-full"
            ></p>
          </span>
        </li>
        <li className="">
          <span className="block border border-black hover:border-yellow-400 rounded-full transition ease-in duration-300">
            <p
              onClick={() => {
                dispatch(setMode("text-[#facc15]"));
                dispatch(setModeBg("bg-[#facc15]"));
                dispatch(setGrad("#facc15"));
              }}
              className="block w-3 h-3 cursor-pointer  bg-yellow-400 rounded-full"
            ></p>
          </span>
        </li>
        <li className="">
          <span className="block border border-black hover:border-red-600 rounded-full transition ease-in duration-300">
            <p
              onClick={() => {
                dispatch(setMode("text-[#dc2626]"));
                dispatch(setModeBg("bg-[#dc2626]"));
                dispatch(setGrad("#dc2626"));
              }}
              className="block w-3 h-3 cursor-pointer  bg-red-600 rounded-full"
            ></p>
          </span>
        </li>
        <li className="">
          <span className="block border border-black hover:border-green-600 rounded-full transition ease-in duration-300">
            <p
              onClick={() => {
                dispatch(setMode("text-[#16a34a]"));
                dispatch(setModeBg("bg-[#16a34a]"));
                dispatch(setGrad("#16a34a"));
              }}
              className="block w-3 h-3 cursor-pointer  bg-green-600 rounded-full"
            ></p>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Mode;
