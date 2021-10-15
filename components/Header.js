import Image from "next/image";
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/router";

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

function Header({ placeholder }) {
  const router = useRouter();
  const [searchInput, setsearchInput] = useState("");
  const [startDate, setstartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());
  const [noOfGuests, setnoOfGuests] = useState(1);
  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  };
  const handleSelect = (ranges) => {
    setstartDate(ranges.selection.startDate);
    setendDate(ranges.selection.endDate);
  };
  const resetInput = () => {
    setsearchInput('');
  };
  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      }
    });
    resetInput();
  }

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left  */}
      <div onClick={() => router.push("/")} className="relative flex h-8 lg:h-10 cursor-pointer my-auto">
        <Image src="https://links.papareact.com/qd3" layout="fill" objectFit="contain" objectPosition="left" />
      </div>

      {/* middle  */}
      <div className="flex items-center md:border-2 rounded-full md:shadow-sm">
        <input onChange={(e) => setsearchInput(e.target.value)} value={searchInput} type="text" placeholder={placeholder || "start your search"} className="pl-5 text-sm text-gray-600 placeholder-gray-400 bg-transparent outline-none flex-grow" />
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
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-4">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#fd5b61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b-2 border-gray-400 mb-4">
            <h2 className="text-2xl font-semibold flex-grow">No of Guests</h2>
            <UsersIcon className="h-5" />
            <input type="number"
              value={noOfGuests}
              min={1}
              max={12}
              onChange={(e) => setnoOfGuests(e.target.value)}
              className="w-12 outline-none text-red-500 pl-2 text-lg"
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">Cancel</button>
            <button onClick={search} className="flex-grow text-red-500">Search</button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header;
