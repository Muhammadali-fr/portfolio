
// next 
import Image from "next/image";

// assets 
import myLogoImage from "@/public/assets/my-image-logo.webp";
import my3x4Image from '@/public/assets/my3x4.webp';
import myGalssesImage from '@/public/assets/myGlassesImage.webp';

export default function TeammateImages() {
    return (
        <ul title="me: Jamolov Muhammadali" className="flex items-center justify-center group">
            <li className="transition-all duration-300 group-hover:-translate-x-2">
                <Image width={55} height={55} className="w-13 h-13 rounded-full object-cover object-center relative left-3" src={myGalssesImage} alt="Jamolov Muhammadali" />
            </li>
            <li className="z-2">
                <Image width={65} height={65} className="rounded-full border border-white object-cover object-center" src={myLogoImage} alt="Jamolov Muhammadali" />
            </li>

            <li className="transition-all duration-300 group-hover:translate-x-2">
                <Image width={55} height={55} className="w-13 h-13 rounded-full object-cover object-top relative right-3" src={my3x4Image} alt="Jamolov Muhammadali" />
            </li>
        </ul>
    );
};