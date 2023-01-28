function sidebar() {
    return (
        <div className="hidden sm:flex flex-col item-center xl:items-start
        xl:w-[340px] p-2 fixed h-full">
            <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24 ">
                <Image src="https://rb.gy/ogau5a" width="30" height="30" />
            </div>
        </div>
    )
}

export default sidebar;