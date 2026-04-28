// components
import { CloudDownload } from "lucide-react";
import TeammateImages from "./TeammateImages";
import ContactMeButton from "../app/(root)/components/ContactMeButton";

export default function Hero() {
    return (
        <section className="c-width py-10 sm:py-15 space-y-3 text-center">
            <TeammateImages />

            <div className="flex flex-col items-center justify-center space-y-3">
                <p className="text-sm uppercase tracking-widest text-gray-500">
                    <span className="text-[#0071e3]">Web</span> Developer
                </p>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                    Jamolov Muhammadali
                </h1>

                <p className="max-w-sm sm:max-w-lg sm:text-lg text-gray-600">
                    Building reliable, modern, and scalable web applications.
                </p>

                <div className="flex items-center gap-2 sm:gap-5">
                    <a download="Jamolov-Muhammadali-CV.pdf" href="/download/JamolovMuhammadaliCV.pdf">
                        <button className="flex gap-2 px-5 py-2 c-blue text-white rounded-3xl cursor-pointer">
                            <CloudDownload />
                            Download CV
                        </button>
                    </a>
                    <ContactMeButton />
                </div>
            </div>
        </section>
    );
}
