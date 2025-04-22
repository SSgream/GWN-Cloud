'use client'

import { useState } from 'react'

export default function Pendaftaran() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())

    try {
      const res = await fetch('/api/pendaftaran', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      })

      let result
      try {
        result = await res.json()
      } catch (jsonErr) {
        const text = await res.text()
        console.error('Respon bukan JSON:', text)
        alert('Kesalahan server: response bukan JSON')
        return
      }

      if (res.ok) {
        alert('Pendaftaran berhasil!')
      } else {
        alert('Gagal: ' + result.error)
      }
    } catch (err) {
      console.error('Network error:', err)
      alert('Terjadi kesalahan saat mengirim data')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white min-h-screen pt-48 py-12 px-6 md:px-20">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Formulir Pendaftaran Calon Siswa Baru
      </h1>

      <form className="space-y-12" onSubmit={handleSubmit}>
        {/* DATA SISWA */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Data Siswa</h2>
          <div className="grid md:grid-cols-2 gap-4 ">
            {[
              'Nama Lengkap', 'Nama Panggilan', 'Tempat Lahir', 'Tanggal Lahir',
              'Jenis Kelamin', 'Anak ke-', 'Jumlah Saudara', 'Agama',
              'Status dalam keluarga', 'Kewarganegaraan'
            ].map((label, idx) => (
              <div className="pt-4 flex flex-col" key={idx}>
                <label className="text-sm font-medium mb-1">{label}</label>
                <input
                  className="input"
                  name={label.toLowerCase().replace(/ /g, '_').replace('-', '')}
                  required
                />
              </div>
            ))}
          </div>
        </section>

        {/* DATA AYAH */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Data Ayah</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Nama', 'Status Ayah', 'Tempat Lahir', 'Tanggal Lahir', 'Pekerjaan',
              'Agama', 'Pendidikan', 'Kewarganegaraan'
            ].map((label, idx) => (
              <div className="pt-4 flex flex-col" key={idx}>
                <label className="text-sm font-medium mb-1">{label}</label>
                <input
                  className="input"
                  name={`ayah_${label.toLowerCase().replace(/ /g, '_')}`}
                  required
                />
              </div>
            ))}
          </div>
        </section>

        {/* DATA IBU */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Data Ibu</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Nama', 'Status Ibu', 'Tempat Lahir', 'Tanggal Lahir', 'Pekerjaan',
              'Agama', 'Pendidikan', 'Kewarganegaraan'
            ].map((label, idx) => (
              <div className="pt-4 flex flex-col" key={idx}>
                <label className="text-sm font-medium mb-1">{label}</label>
                <input
                  className="input"
                  name={`ibu_${label.toLowerCase().replace(/ /g, '_')}`}
                  required
                />
              </div>
            ))}
          </div>
        </section>

        {/* SUBMIT */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-green-700 hover:bg-green-800 text-white py-3 px-8 rounded"
            disabled={loading}
          >
            {loading ? 'Mengirim...' : 'SUBMIT'}
          </button>
        </div>
      </form>

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
  )
}
