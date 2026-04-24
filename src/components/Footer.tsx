export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full h-12 bg-[#F5F5F5] flex items-center justify-center border-t c-border-color">
            <p>© {year} muhammadali.com</p>
        </footer>
    )
}