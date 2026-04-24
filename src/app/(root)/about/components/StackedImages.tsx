// assets
import Image from "next/image";

import myLogoImage from "@/public/assets/my-image-logo.webp";
import my3x4Image from "@/public/assets/my3x4.webp";
import myGalssesImage from "@/public/assets/myGlassesImage.webp";
import userPfp from "@/public/assets/userpfp.webp";

export default function StackedImages() {
  return (
    <div className="relative h-[300px] w-full flex items-center justify-center overflow-hidden group">
      {/* Left Card */}
      <div className="absolute left-[18%] rotate-[-14deg] z-10 transition group-hover:-translate-x-2 duration-300">
        <Image
          src={myLogoImage}
          alt="Muhammadali portrait"
          className="w-40 h-52 object-cover rounded-2xl "
          priority
        />
      </div>

      {/* Center Main Card */}
      <div className="absolute z-30 transition group-hover:-translate-y-2 duration-300">
        <Image
          src={my3x4Image}
          alt="Muhammadali main"
          className="w-44 h-56 object-cover rounded-2xl"
          priority
        />
      </div>

      {/* Right Card */}
      <div className="absolute right-[18%] rotate-14 z-20 transition hover:-translate-y-2 duration-300  group-hover:translate-x-2 ">
        <Image
          src={userPfp}
          alt="Muhammadali glasses"
          className="w-40 h-52 object-cover rounded-2xl "
        
        />
      </div>

      {/* Back Accent Card Left */}
      <Image alt="My image" priority src={userPfp} className="group-hover:-translate-y-2 transition duration-300 group-hover:-translate-x-1 absolute left-[28%] top-8 -rotate-6 z-0 w-36 h-48 rounded-2xl bg-neutral-200 object-cover"/>

      {/* Back Accent Card Right */}
      <Image  alt="My image" priority src={myGalssesImage} className="group-hover:-translate-y-2 transition duration-300 group-hover:translate-x-1 object-cover absolute right-[28%] top-8 rotate-6 z-0 w-36 h-48 rounded-2xl bg-neutral-200"/>
    </div>
  );
}