export default function VisiMisi() {
    return (
      <div className="bg-gray-100 min-h-screen">
        {/* Header */}
        <div className="relative w-full h-[500px] bg-black">
          <img
            src="/images/banner.png"
            alt="Visi dan Misi"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
            Visi dan Misi TK AZIZAH 2
          </div>
        </div>
  
        {/* Konten */}
        <div className="container mx-auto px-6 py-10">
          {/* Visi */}
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-center mb-2 ">Visi</h2>
            <p className="text-center">Tewujudnya peserta didik yang mengedepankan karakter profil pelajar pancasila</p>
          </div>
  
          {/* Misi */}
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-center mb-2 bg-blue-">Misi</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Mengintegrasikan nilai-nilai luhur pancasila dalam setiap aspek pembelajaran dan kegiatan di satuan pendidikan</li>
              <li>Mendorong Peserta Didik untuk mengembangkan karakter dan kompetensi yang mencerminkan Profil Pelajar Pancasila Melalui budaya satuan pendidikan, pembelajaran intrakurikuler,projek penguatan profil pelajar pancasila,dan Ekstrakurikuler</li>
              <li>Menciptakan lingkungan belajar yang mendukung pengembangan karakter beriman,bertaqwa kepada tuhan YME,berakhlak mulia,berkebinekaan global,dan bernalar kritis</li>
              <li>Melibatkan Peserta didik dalam kegiatan yang memungkinkan mereka mengalami dan memahami kehidupan masyarakat secara langsung, sehingga mereka tidak hanya memiliki pengetahuan tetapi juga pengalaman nyata</li>
              <li>Mengevaluasi secara kritis lingkungan belajar disatuan pendidikan dan membuat perubahan yang diperlukan agar memungkinkan semua peserta didik dan pendidik untuk bekerja mengembangkan nilai-nilai profil pelajar pancasila pada peserta didik</li>
            </ul>
          </div>
          
          {/* Tujuan */}
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-center mb-2">Tujuan</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Mencapai pembentukan karakter peserta didik yang beriman,bertaqwa kepada Tuhan YME,dan berakhlak mulia</li>
              <li>Menghasilkan lulusan yang memiliki kemampuan berkebinekaan global dan mampu berinteraksi dengan berbagai budaya </li>
              <li>Mendorong kreativitas peserta didik dalam berbagai bidang,baik akademik maupun non-akademik</li>
              <li>Membangun semangat gotong royong dan kerja sama di antara peserta didik</li>
              <li>Mengembangan kemandirian peserta didik dalam belajar dan kehidupan sehari-hari</li>
              <li>Meningkatkan kemampuan bernalar Kritis peserta didik dalam menghadapi berbagai tantangan dan permasalahan</li>
              <li>Menjadikan Profil pelajar pancasila sebagai kompas bagi pendidik dan pelajar dalam mencapai tujuan pendidikan</li>
            </ul>
          </div>
          
          {/* Strategi */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-bold text-center mb-2">Strategi</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Menyusun tim penjamin mutu dan tim pengembang kurikulum</li>
              <li>Melakukan analisis kebutuhan kondisi dan lingkungan sekolah</li>
              <li>Menyusun rencana kurikulum operasional sekolah dengan melibatkan unsur dinas pendidikan setempat, Pengawas Pembina, Tokoh Masyarakat dan komite sekolah</li>
              <li>Melakukan analisis kebutuhan program sekolah (kegiatan intrakurikuler, ekstrakurikuler, pelatihan, pengadaan sarana prasarana, kegiatan pendukung, dan lain- lain) untuk mendukung pelaksanaan rencana kurikulum operasional sekolah yang sudah disusun</li>
              <li>Menyusun RKAS (Rencana Kegiatan dan Anggaran Sekolah) berdasar analisis kebutuhan program</li>
              <li>Menyusun rencana serta instrumen Evaluasi, Pendampingan dan Pengembangan dengan melihat berbagai sisi (guru, tenaga kependidikan, peserta didik, orang tua dan komite sekolah)</li>
              <li>Melaksanakan kurikulum operasional sekolah dengan evaluasi harian, 1 bulanan, 1 semester dan 1 tahun</li>
              <li>Melaksanakan program perbaikan berdasar prioritas 1 bulanan, 1 semester dan 1 tahun</li>
              <li>Menyusun rencana kurikulum operasional sekolah berdasar hasil evaluasi dengan melibatkan unsur dinas pendidikan setempat, Pengawas Pembina, Tokoh Masyarakat dan komite sekolah</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }