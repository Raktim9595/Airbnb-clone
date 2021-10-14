import Image from "next/image";
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left  */}
      <div className="relative flex h-8 lg:h-10 cursor-pointer my-auto">
        <Image src="https://links.papareact.com/qd3" layout="fill" objectFit="contain" objectPosition="left" />
      </div>

      {/* middle  */}
      <div className="flex items-center md:border-2 rounded-full md:shadow-sm">
        <input type="text" placeholder="start your search" className="pl-5 text-sm text-gray-600 placeholder-gray-400 bg-transparent outline-none flex-grow" />
        <SearchIcon className="h-8 md:mr-1 flex-shrink-0 hidden md:inline-flex bg-red-400 text-white rounded-full cursor-pointer p-2" />
      </div>

      {/* right */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        <p className="hidden md:inline-flex">Become a host</p>
        <GlobeAltIcon className="h-5 md:h-6 cursor-pointer flex-shrink-0" />
        <div className="flex space-x-2 border-2 p-2 rounded-full border-gray-500">
          <MenuIcon className="h-5 md:h-6 cursor-pointer" />
          <UserCircleIcon className="h-5 md:h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  )
}

export default Header;
