import { Inter } from "next/font/google";
import React, { useCallback } from "react";
import { FaXTwitter } from "react-icons/fa6"
import { GoHomeFill } from "react-icons/go"
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiEnvelope } from "react-icons/bi";
import { PiBookmarkSimple } from "react-icons/pi";
import { RiFileListLine } from "react-icons/ri";
import { HiOutlineUser } from "react-icons/hi";
import { CgMoreO } from "react-icons/cg";
import FeedCard from "../Components/FeedCard";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import toast from "react-hot-toast";
import { graphqlClient } from "@/clients/api";
import { verifyUserGoogleTokenQuery } from "@/graphql/query/user";



const inter = Inter({ subsets: ["latin"] });


interface twitterSidebarButton {
  title: string,
  icon: React.ReactNode
}

const sidebarMenuItems: twitterSidebarButton[] = [
  {
    title: "Home",
    icon: <GoHomeFill className="text-3xl" />
  },
  {
    title: "Explore",
    icon: <FiSearch className="text-3xl" />
  },
  {
    title: "Notifications",
    icon: <IoNotificationsOutline className="text-3xl" />
  },
  {
    title: "Messages",
    icon: <BiEnvelope className="text-3xl" />
  },
  {
    title: "Bookmarks",
    icon: <PiBookmarkSimple className="text-3xl" />
  },
  {
    title: "Lists",
    icon: <RiFileListLine className="text-3xl" />
  },
  {
    title: "Profile",
    icon: <HiOutlineUser className="text-3xl" />
  },
  {
    title: "More",
    icon: <CgMoreO className="text-3xl" />
  }
]

export default function Home() {
  const handleLoginWithGoogle = useCallback(async (cred: CredentialResponse) => {
    const googleToken = cred.credential;
    if (!googleToken) return toast.error("Google Token not found")
    // Use the googleToken to authenticate the user with your backend API.

    const { verifyGoogleToken } = await graphqlClient.request(verifyUserGoogleTokenQuery,
      { token: googleToken }
    )
    toast.success("Verified successfully")
    console.log(verifyGoogleToken)

    if (verifyGoogleToken) window.localStorage.setItem("_twitter_token", verifyGoogleToken)
  }, [])
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-10 ">
        <div className="col-span-3 pt-4">
          <div className="text-3xl rounded-full hover:bg-gray-800 p-2 h-fit w-fit cursor-pointer " >
            <FaXTwitter />
          </div>
          <div className="mt-4 font-[400] text-xl text-[#e7e9ea]">
            <ul>
              {sidebarMenuItems.map((item) => <li className="flex  gap-5 hover:bg-gray-800 w-fit px-4 py-2 rounded-full cursor-pointer" key={item.title}>{item.icon}{item.title}</li>)}
            </ul>
            <button className="bg-[#1d9bf0] px-24 py-3 rounded-full text-[17px] mt-2 font-bold text-white">Post</button>
          </div>
        </div>
        <div className="col-span-6 border-r-[0.5px] border-l-[0.5px] border-gray-800 ">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-3 p-5">
          <div className="bg-slate-700 p-5 rounded-lg ml-6 ">
            <h1 className="my-2 text-2xl ">New to twitter?</h1>
            <GoogleLogin onSuccess={handleLoginWithGoogle} />
          </div>
        </div>
      </div>
    </div>
  );
}


