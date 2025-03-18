import Beranda from "@/features/beranda/Beranda";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Beranda />
      <Footer />
    </div>
  );
}
