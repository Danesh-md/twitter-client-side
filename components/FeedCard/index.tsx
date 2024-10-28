import React from "react";
import Image from "next/image";
import { BiMessageRounded, BiUpload } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
const FeedCard: React.FC = () => {
  return (
    <div className="border border-b-0 border-r-0 border-l-0 border-gray-600 p-4 hover:bg-slate-900 transition-all cursor-pointer text-sm">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-1">
          <Image
            alt="user-image"
            src={"https://avatars.githubusercontent.com/u/119980250?v=4"}
            height={50}
            width={50}
            className="rounded-full"
          />
        </div>
        <div className="col-span-11">
          <h5>Danesh</h5>
          <p>
            Is it just me or everyone else? Do you feel the code quality
            decreases as the project size increases? Just refactored a lot of
            bad code #codinglife
          </p>
          <div className="flex justify-between mt-5 text-xl items-center p-2 w-[90%]">
            <div>
              <BiMessageRounded />
            </div>
            <div>
              <FaRetweet />
            </div>
            <div>
              <AiOutlineHeart />
            </div>
            <div>
              <BiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
