import { BiHash, BiHomeCircle, BiUser } from "react-icons/bi";
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from "react-icons/bs";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />,
  },
  {
    title: "Explore",
    icon: <BiHash />,
  },
  {
    title: "Notifications",
    icon: <BsBell />,
  },
  {
    title: "Messages",
    icon: <BsEnvelope />,
  },
  {
    title: "Bookmarks",
    icon: <BsBookmark />,
  },
  {
    title: "Profile",
    icon: <BiUser />,
  },
];

export default function Home() {
  return (
    <div className={inter.className}>
      <div className="grid grid-cols-12 h-screen w-screen px-52">
        <div className="col-span-3 pt-8">
          <div className="text-3xl w-fit h-fit hover:bg-gray-700 rounded-full p-3 cursor-pointer transition-all">
            <BsTwitter />
          </div>
          <div className="mt-4 text-1xl pr-5">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li
                  className="flex justify-start items-center gap-4 hover:bg-gray-700 rounded-full px-5 py-2 w-fit cursor-pointer mt-2"
                  key={item.title}
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 pr-5">
              <button className="bg-[#1d9bf0] rounded-full w-full p-4 font-semibold">
                Tweet
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-6  border-r-[1px] border-l-[1px] border-gray-500"></div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}