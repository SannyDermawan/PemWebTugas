import { useNavigate } from "react-router-dom";
import sannyImg from "../assets/sanny.jpeg";

export default function Sanny() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="max-w-3xl w-full bg-white shadow-xl rounded-2xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-blue-600 h-40 relative">
          <button
            onClick={() => navigate("/")}
            className="absolute top-4 left-4 bg-white text-blue-600 px-3 py-1 rounded-lg text-sm shadow hover:bg-gray-100 transition"
          >
            ← Kembali
          </button>
        </div>

        <div className="relative px-6 pb-6">
          
          {/* Foto Profil */}
          <div className="absolute -top-16 left-6">
            <img
              src={sannyImg}
              alt="Sanny"
              className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover"
            />
          </div>

          {/* Nama */}
          <div className="pt-20">
            <h1 className="text-2xl font-bold text-gray-800">
              Sanny Dermawan
            </h1>
            <p className="text-gray-500">Mahasiswa Teknologi Informasi</p>
          </div>

          {/* Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div>
              <p className="text-sm text-gray-500">Nama Lengkap</p>
              <p className="font-medium">Sanny Dermawan</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Kelas</p>
              <p className="font-medium">T2F</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Jurusan / Prodi</p>
              <p className="font-medium">Teknologi Informasi</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Domisili</p>
              <p className="font-medium">Kota Malang</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Hobby</p>
              <p className="font-medium">Berenang dan Badminton</p>
            </div>
          </div>

          {/* Tentang Diri */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Tentang Diri
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify">
              Saya adalah seorang mahasiswa Teknologi Informasi yang memiliki ketertarikan besar terhadap perkembangan teknologi digital dan inovasi di bidang IT. Saya senang mempelajari hal-hal baru terutama yang berkaitan dengan pengembangan web, desain antarmuka, serta pemrograman. Dalam keseharian, saya terbiasa bekerja secara mandiri maupun dalam tim untuk menyelesaikan berbagai tugas dan proyek.
              
              Selain fokus pada akademik, saya juga aktif mengembangkan soft skill seperti komunikasi, manajemen waktu, dan kemampuan problem solving. Saya percaya bahwa kombinasi antara kemampuan teknis dan soft skill sangat penting untuk menghadapi dunia kerja di masa depan.
              
              Di luar aktivitas belajar, saya memiliki hobi berenang dan bermain badminton yang membantu saya menjaga kesehatan serta keseimbangan antara aktivitas fisik dan mental. Saya juga terbuka untuk berbagai kesempatan belajar dan kolaborasi yang dapat meningkatkan pengalaman serta wawasan saya di bidang teknologi.
            </p>
          </div>

          {/* Sosial Media */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Media Sosial
            </h2>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/sannydrmwn/"
                target="_blank"
                className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/sanny-dermawan-40261a37a/"
                target="_blank"
                className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}