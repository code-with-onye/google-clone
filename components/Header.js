import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { XIcon, SearchIcon } from "@heroicons/react/outline";
import { MicrophoneIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";
function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex items-center w-full p-6">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        <form className="flex items-center flex-grow max-w-3xl px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg">
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow w-full focus:outline-none"
          />
          <XIcon
            className="text-gray-500 transition duration-100 transform cursor-pointer h-7 hover:scale-125 sm:mr-3"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="hidden h-6 pl-4 mr-3 text-blue-500 border-l-2 border-gray-300 sm:inline-flex" />
          <SearchIcon className="hidden h-6 text-blue-500 sm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            submit
          </button>
        </form>
        <Avatar className="ml-auto" />
      </div>
      {/** HeaderOption */}
      <HeaderOptions />
    </header>
  );
}

export default Header;
