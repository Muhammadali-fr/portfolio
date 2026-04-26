"use client"

import { createContext, useContext, useState } from "react";

type ModalContextType = {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);


export function ModalProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <ModalContext.Provider
            value={{ isOpen, openModal, closeModal }}
        >
            {children}
        </ModalContext.Provider>
    );
}

export function useModal() {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error("useModal must be inside ModalProvider");
    }

    return context;
}