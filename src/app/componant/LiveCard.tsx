import Image from "next/image"
import { LiveItem } from "../types/app"

type LiveCardProps= LiveItem
const LiveCard = ({title,img}:LiveCardProps) => {
  return (
    <div className="cursor-pointer  hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
        <div className="relative h-80 w-80">
            <Image src={img} alt="live_img" fill/>
        </div>
        <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  )
}

export default LiveCard