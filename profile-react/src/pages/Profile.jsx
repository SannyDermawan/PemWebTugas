import foto from "../assets/foto.jpg";

function Profile() {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-xl p-10 w-[700px]">
        
        <h1 className="text-3xl font-bold text-center mb-6">
          Profil Mahasiswa
        </h1>

        <div className="flex gap-8">
          {/* Foto Profil */}
          <div>
            <img
              src={foto}
              className="w-40 h-40 rounded-full border-4 border-blue-500"
            />
          </div>

          {/* Data Diri */}
          <div className="text-gray-700">
            <p><b>Nama Lengkap:</b> Sanny Dermawan</p>
            <p><b>Kelas:</b> T2F</p>
            <p><b>Jurusan:</b> Teknologi Informasi</p>
            <p><b>Domisili:</b> Kota Malang, Jawa Timur</p>
          </div>
        </div>

        {/* Tentang Diri */}
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2">Tentang Diri</h2>
          <p className="text-gray-600 text-justify">
            Saya adalah mahasiswa Teknologi Informasi yang memiliki minat dalam bidang teknologi,
            khususnya pengembangan web dan desain antarmuka pengguna. Saya senang mempelajari hal-hal baru
            yang berkaitan dengan pemrograman, desain website, serta perkembangan teknologi digital saat ini.
            Selain itu, saya juga tertarik pada dunia komunitas online, media sosial, dan pengembangan konten digital.
            Saya merupakan pribadi yang suka belajar secara mandiri, bertanggung jawab, dan mampu bekerja sama dalam tim.
            Saya berharap dapat mengembangkan kemampuan saya di bidang teknologi dan menjadi seorang profesional
            di bidang IT di masa depan.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Profile;