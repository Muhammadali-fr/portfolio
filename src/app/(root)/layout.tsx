import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-1 flex flex-col">
                {children}
            </div>
            {/* <Footer /> */}
        </main>
    );
};