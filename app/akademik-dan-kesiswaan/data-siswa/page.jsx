import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import DataSiswa from "@/features/akademik/DataSiswa";

export default function PageDataSiswa() {
    return (
      <div>
        <Navbar />
        <DataSiswa />
        <Footer />
      </div>
    );
  }
  