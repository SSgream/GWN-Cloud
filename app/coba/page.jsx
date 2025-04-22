'use client'

import { useState } from 'react'

export default function PendaftaranAyah() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())

    try {
      const res = await fetch('/api/list', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      })

      const result = await res.json()
      if (res.ok) {
        alert('Data Ayah berhasil disimpan!')
      } else {
        alert('Gagal: ' + result.error)
      }
    } catch (err) {
      console.error(err)
      alert('Terjadi kesalahan')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-lg mx-auto space-y-4">
      <h2 className="text-xl font-bold">Form Data Ayah</h2>

      {[
        ['Nama', 'ayah_nama'],
        ['Status dalam keluarga', 'ayah_status_ayah'],
        ['Tempat Lahir', 'ayah_tempat_lahir'],
        // ['Tanggal Lahir', 'ayah_tanggal_lahir'],
        // ['Pekerjaan', 'ayah_pekerjaan'],
        // ['Agama', 'ayah_agama'],
        // ['Pendidikan', 'ayah_pendidikan'],
        // ['Kewarganegaraan', 'ayah_kewarganegaraan'],
      ].map(([label, name]) => (
        <div key={name}>
          <label className="block mb-1 font-medium">{label}</label>
          <input name={name} type="text" className="w-full border p-2 rounded" required />
        </div>
      ))}

      <button
        type="submit"
        className="bg-green-600 text-white py-2 px-6 rounded"
        disabled={loading}
      >
        {loading ? 'Menyimpan...' : 'Submit'}
      </button>
    </form>
  )
}
