"use client";

import { useState, useRef } from "react";
import { Upload, Plus, X } from "lucide-react";

export default function Pendaftaran() {
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const inputRef = useRef(null);

  const handleChange = (e) => {
    const newFiles = Array.from(e.target.files).map((file) => ({
      file,
      url: URL.createObjectURL(file),
      name: file.name,
      type: file.type,
    }));
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    files.forEach((item) => {
      formData.append("berkas", item.file);
    });

    try {
      const res = await fetch("/api/pendaftaran", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      if (res.ok) {
        e.target.reset(); // Reset semua input form
        setFiles([]); // Kosongkan file yang diunggah
        setModalMessage("✅ Pendaftaran berhasil!");
        setShowModal(true);
      } else {
        setModalMessage("❌ Gagal: " + result.error);
        setShowModal(true);
      }
    } catch (err) {
      console.error("Network error:", err);
      setModalMessage("❌ Terjadi kesalahan saat mengirim data.");
      setShowModal(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen pt-48 py-12 px-4 md:px-20 mx-auto text-md md:text-sm sm:max-w-md md:max-w-none">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-12 md:mb-10">
        Formulir Pendaftaran Calon Siswa Baru
      </h1>

      <form
        className="space-y-12"
        onSubmit={handleSubmit}
        onKeyDown={(e) => {
          if (e.key === "Enter" && e.target.tagName !== "TEXTAREA") {
            e.preventDefault(); // mencegah form submit saat tekan Enter
          }
        }}
      >
        <section>
          <h2 className="text-2xl font-semibold mb-4">Data Siswa</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Nama Lengkap */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Nama Lengkap</label>
              <input
                className="bg-gray-100 p-2 rounded"
                name="nama_lengkap"
                required
              />
            </div>

            {/* Nama Panggilan */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Nama Panggilan</label>
              <input
                className="bg-gray-100 p-2 rounded"
                name="nama_panggilan"
                required
              />
            </div>

            {/* Tempat Lahir */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Tempat Lahir</label>
              <input
                className="bg-gray-100 p-2 rounded"
                name="tempat_lahir"
                required
              />
            </div>

            {/* Tanggal Lahir */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Tanggal Lahir</label>
              <input
                type="date"
                className="bg-gray-100 p-2 rounded"
                name="tanggal_lahir"
                required
              />
            </div>

            {/* Jenis Kelamin, Anak Ke, dan Jumlah Saudara */}
            <div className="flex flex-col md:flex-row md:gap-16 space-y-4 md:space-y-0">
              {/* Jenis Kelamin */}
              <div className="flex flex-col">
                <span className="text-sm font-medium mb-1">Jenis Kelamin</span>
                <div className="flex gap-4">
                  <label className="flex items-center gap-1">
                    <input
                      type="radio"
                      name="jenis_kelamin"
                      value="Laki-Laki"
                      className="accent-blue-600"
                    />
                    Laki - Laki
                  </label>
                  <label className="flex items-center gap-1">
                    <input
                      type="radio"
                      name="jenis_kelamin"
                      value="Perempuan"
                      className="accent-pink-500"
                    />
                    Perempuan
                  </label>
                </div>
              </div>

              {/* Anak Ke */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Anak Ke-</label>
                <input
                  type="number"
                  name="anak_ke"
                  placeholder="Anak ke-"
                  className="bg-gray-100 p-2 rounded w-32"
                />
              </div>

              {/* Jumlah Saudara */}
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">
                  Jumlah Saudara
                </label>
                <input
                  type="number"
                  name="jumlah_saudara"
                  placeholder="Jumlah saudara"
                  className="bg-gray-100 p-2 rounded w-40"
                />
              </div>
            </div>

            {/* Agama */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Agama</label>
              <input className="bg-gray-100 p-2 rounded" name="agama" />
            </div>

            {/* Status dalam keluarga */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">
                Status dalam keluarga
              </label>
              <input
                className="bg-gray-100 p-2 rounded"
                name="status_dalam_keluarga"
              />
            </div>

            {/* Kewarganegaraan */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">
                Kewarganegaraan
              </label>
              <input
                className="bg-gray-100 p-2 rounded"
                name="kewarganegaraan"
              />
            </div>
          </div>
        </section>

        {/* DATA AYAH */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Data Ayah</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Nama",
              "Status Ayah",
              "Tempat Lahir",
              "Tanggal Lahir",
              "Pekerjaan",
              "Agama",
              "Pendidikan",
              "Kewarganegaraan",
            ].map((label, idx) => (
              <div className="flex flex-col" key={idx}>
                <label className="text-sm font-medium mb-1">{label}</label>
                <input
                  type={label.includes("Tanggal") ? "date" : "text"}
                  className="bg-gray-100 p-2 rounded"
                  name={`ayah_${label.toLowerCase().replace(/ /g, "_")}`}
                  required
                />
              </div>
            ))}
          </div>
        </section>

        {/* DATA IBU */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Data Ibu</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Nama",
              "Status Ibu",
              "Tempat Lahir",
              "Tanggal Lahir",
              "Pekerjaan",
              "Agama",
              "Pendidikan",
              "Kewarganegaraan",
            ].map((label, idx) => (
              <div className="flex flex-col" key={idx}>
                <label className="text-sm font-medium mb-1">{label}</label>
                <input
                  type={label.includes("Tanggal") ? "date" : "text"}
                  className="bg-gray-100 p-2 rounded"
                  name={`ibu_${label.toLowerCase().replace(/ /g, "_")}`}
                  required
                />
              </div>
            ))}
          </div>
        </section>

        {/* Tambah Berkas Tambahan */}
        <section className="mt-8">
          <div className=" mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Berkas Pendaftaran
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Kartu Keluarga, Akta Kelahiran, Foto ukuran 3 x 4, Buku KIA
              (Kesehatan Ibu dan Anak)
            </p>
          </div>

          <div className="flex items-center justify-center min-h-[200px]">
            <div className="w-full max-w-xs md:max-w-sm border border-dashed rounded-md p-4 min-h-[160px] flex items-center justify-center">
              {files.length === 0 ? (
                <button
                  type="button"
                  onClick={() => inputRef.current.click()}
                  className="flex flex-col items-center text-gray-500 hover:text-blue-500"
                >
                  <Upload className="w-6 h-6 mb-1" />
                  <span>Unggah berkas</span>
                </button>
              ) : (
                <div className="w-full space-y-2">
                  {files.map((file, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between bg-gray-50 px-2 py-1 rounded"
                    >
                      <div className="flex items-center gap-2">
                        {file.type.startsWith("image/") ? (
                          <img
                            src={file.url}
                            alt="preview"
                            className="w-6 h-6 object-cover rounded"
                          />
                        ) : (
                          <span className="text-gray-500">📎</span>
                        )}
                        <span className="text-sm truncate max-w-[140px]">
                          {file.name}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(i)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => inputRef.current.click()}
                    className="flex items-center gap-1 text-blue-600 text-sm hover:underline"
                  >
                    <Plus className="w-4 h-4" />
                    Tambah berkas
                  </button>
                </div>
              )}
              <input
                type="file"
                multiple
                ref={inputRef}
                className="hidden"
                onChange={handleChange}
              />
            </div>
          </div>
        </section>

        {/* SUBMIT */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-green-700 hover:bg-green-800 text-white py-3 px-8 rounded text-sm md:text-base"
            disabled={loading}
          >
            {loading ? "Mengirim..." : "SUBMIT"}
          </button>
        </div>
      </form>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md w-full max-w-sm text-center">
            <p className="text-gray-800">{modalMessage}</p>
            <div className="mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .input {
          padding: 0.75rem;
          border: none;
          background-color: #f7f8fa;
          border-radius: 0.375rem;
          outline: none;
          width: 100%;
        }
      `}</style>
    </div>
  );
}
