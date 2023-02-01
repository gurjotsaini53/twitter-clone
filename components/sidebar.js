import Image from "next/image"
import SidebarLink from "./SidebarLink";
import HomeIcon from "@heroicons/react/solid";
import {
    HastagIcon,
    BellIcon,
    InboxIcon,
    BookmarkIcon,
    ClipboardIcon,
    UserIcon,
    DotsCireleHorizontal,


} from "@heroicons/react/outline"
function sidebar() {
    return (
        <div className="hidden sm:flex flex-col item-center xl:items-start
        xl:w-[340px] p-2 fixed h-full">
            <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24 ">
                <Image src="/images/logo.jpeg" width={30} height={30} />
            </div>
            <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
                <SidebarLink text="Home" Icon={HomeIcon} active />
                <SidebarLink text="Explore" Icon={HastagIcon} active />
                <SidebarLink text="Notifications" Icon={BellIcon} active />
                <SidebarLink text="Messages" Icon={InboxIcon} active />
                <SidebarLink text="Bookmarks" Icon={BookmarkIcon} active />
                <SidebarLink text="Lists" Icon={ClipboardIcon} active />
                <SidebarLink text="Profiles" Icon={UserIcon} active />
                <SidebarLink text="More" Icon={DotsCireleHorizontal} active />

            </div>
        </div>
    )
}

export default sidebar;