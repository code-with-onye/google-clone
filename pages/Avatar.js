import Image from "next/image";
function Avatar({ url }) {
  return <Image src={url} alt="image" className="h-10" />;
}

export default Avatar;
