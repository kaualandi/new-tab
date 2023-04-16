import { WiDaySunny } from "react-icons/wi";

export function Weather() {
  return (
    <button className="flex items-center gap-1 mt-5 px-8">
      <WiDaySunny className="w-9 h-9 text-white"/>
      <span className="text-xl font-semibold text-white">
        31°c
      </span>
    </button>
  )
}