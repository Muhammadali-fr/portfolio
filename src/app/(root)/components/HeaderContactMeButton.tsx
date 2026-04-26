"use client"

import { useModal } from "@/src/context/ModalContext"

export default function HeaderContactMeButton() {
    const {openModal} = useModal();

    return (
        <button className="bg-blue-700 text-white py-2 px-3 rounded-3xl text-sm" onClick={openModal}>Contact me</button>
    )
}