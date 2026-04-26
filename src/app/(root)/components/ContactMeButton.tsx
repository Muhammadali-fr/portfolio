"use client"

import { useModal } from "@/src/context/ModalContext";

export default function ContactMeButton() {
    const { openModal } = useModal();

    return (
        <button onClick={openModal} className="px-5 py-2 c-white rounded-3xl border border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3] hover:text-white cursor-pointer">Contact me</button>
    )
}