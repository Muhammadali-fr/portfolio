"use client";

import { useModal } from "@/src/context/ModalContext";
import { X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// icons 
import MailImage from "@/public/icons/communication.png";
import TelegramImage from "@/public/icons/telegram.png";
import CallImage from "@/public/icons/call.png";
import GithubImage from "@/public/icons/github.png";


export default function Modal() {
    const { isOpen, closeModal } = useModal();

    if (!isOpen) return null;

    return (
        <div className="transition-all bg-black/20 duration-300 fixed inset-0 backdrop-blur-xs flex items-center justify-center z-101">
            <div className="w-[400px] bg-white rounded-3xl overflow-hidden">
                <div className="w-full  bg-[#F5F5F5] flex items-center justify-between p-3">
                    <p></p>
                    <p className="text-xl font-semibold">Contact me</p>
                    <div onClick={() => closeModal()} className="bg-gray-300 flex items-center justify-center w-6 h-6 rounded-full p-0.5 text-gray-700">
                        <X className="text-xs" />
                    </div>
                </div>

                <div className="p-3 flex flex-col gap-3">

                    {/* mail */}
                    <Link href="mailto:mukhammadali.jamolov@gmail.com">
                        <div className="flex items-center justify-start gap-3">
                            <div className="w-[60px] h-[60px] bg-[#F5F5F5] rounded-full flex items-center justify-center">
                                <Image className="w-10 h-10" src={MailImage} alt="mail" />
                            </div>
                            <div>
                                <p className="text-lg font-semibold">e-mail</p>
                                <p className="text-gray-700">mukhammadali.jamolov@gmail.com</p>
                            </div>
                        </div>
                    </Link>

                    {/* tg */}
                    <Link href="https://t.me/jamolovmuhammadali" target="_blank">
                        <div className="flex items-center justify-start gap-3">
                            <div className="w-[60px] h-[60px] bg-[#F5F5F5] rounded-full flex items-center justify-center">
                                <Image className="w-10 h-10" src={TelegramImage} alt="telegram" />
                            </div>
                            <div>
                                <p className="text-lg font-semibold">Telegram</p>
                                <p className="text-gray-700">@jamolovmuhammadali</p>
                            </div>
                        </div>
                    </Link>

                    {/* Call */}
                    <Link href="tel:+998950118602">
                        <div className="flex items-center justify-start gap-3">
                            <div className="w-[60px] h-[60px] bg-[#F5F5F5] rounded-full flex items-center justify-center">
                                <Image className="w-10 h-10" src={CallImage} alt="call" />
                            </div>
                            <div>
                                <p className="text-lg font-semibold">Phone</p>
                                <p className="text-gray-700">+998 95 011 86 02</p>
                            </div>
                        </div>
                    </Link>

                    {/* github */}
                    <Link href="https://github.com/Muhammadali-fr" target="_blank">
                        <div className="flex items-center justify-start gap-3">
                            <div className="w-[60px] h-[60px] bg-[#F5F5F5] rounded-full flex items-center justify-center">
                                <Image className="w-10 h-10" src={GithubImage} alt="github" />
                            </div>
                            <div>
                                <p className="text-lg font-semibold">Git Hub</p>
                                <p className="text-gray-700">@Muhammadali-fr</p>
                            </div>
                        </div>
                    </Link>

                </div>

                <div className="w-full px-3 pb-3">
                    <button onClick={closeModal} className="w-full bg-[#F5F5F5] p-2 rounded-3xl hover:bg-gray-200 cursor-pointer font-semibold">Close</button>
                </div>
            </div>
        </div>
    );
}