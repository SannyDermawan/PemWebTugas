import hafezImg from "../assets/hafez.jpeg";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl p-8 max-w-md w-full border border-white/30">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <img
              src={hafezImg}
              alt="Foto Profil"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
            />
            <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-400 border-2 border-white rounded-full"></span>
          </div>

          <h1 className="text-2xl font-bold mt-4 text-gray-800">
            Hafez Talib
          </h1>
          <p className="text-gray-500 text-sm">
            Mahasiswa Teknologi Informasi
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 gap-3 mt-6 text-sm">
          
          <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-xl">
            <span>📘</span>
            <p>
              <span className="font-semibold">Kelas:</span> T2F
            </p>
          </div>

          <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-xl">
            <span>📍</span>
            <p>
              <span className="font-semibold">Domisili:</span> Malang
            </p>
          </div>

          <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-xl">
            <span>👤</span>
            <p>
              <span className="font-semibold">Hobby:</span> Futsal
            </p>
          </div>

        </div>

        {/* About */}
        <div className="mt-6">
          <h2 className="font-semibold text-lg mb-2 text-gray-800">
            Tentang Diri
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Saya adalah mahasiswa Teknologi Informasi yang memiliki minat besar
            pada dunia teknologi, khususnya dalam pengembangan web dan desain
            antarmuka pengguna. Saya senang mempelajari hal baru yang berkaitan
            dengan pemrograman, desain website, serta perkembangan teknologi
            digital yang terus berkembang. Selain itu, saya juga tertarik pada
            komunitas online, media sosial, dan pembuatan konten digital.
          </p>
        </div>

        {/* Social */}
        <div className="mt-6 flex gap-3">
          
          <a
            href="https://www.instagram.com/hfeeztlb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-red-500 text-white py-2 rounded-xl hover:scale-105 transition"
          >
            📷 Instagram
          </a>

          <a
            href="https://wa.me/087762220031"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 rounded-xl hover:scale-105 transition"
          >
            📞 Kontak
          </a>

        </div>
      </div>
    </div>
  );
}