import { useNavigate } from "react-router-dom";
import sannyImg from "../assets/sanny.jpeg";
import hafezImg from "../assets/hafez.jpeg";
import nadarImg from "../assets/nadar.jpeg";

export default function Home() {
  const navigate = useNavigate();

  const profiles = [
    { name: "Nadar Sofa", path: "/nadar", image: nadarImg },
    { name: "Hafez Talib", path: "/hafez", image: hafezImg },
    { name: "Sanny Dermawan", path: "/sanny", image: sannyImg },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full">
        
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Daftar Profile Mahasiswa
          </h1>
          <p className="text-gray-500 mt-2">
            Pilih salah satu untuk melihat detail profile
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <div
              key={index}
              onClick={() => navigate(profile.path)}
              className="group cursor-pointer bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              
              {/* FOTO PROFIL (INI YANG PENTING) */}
              <img
                src={profile.image}
                alt={profile.name}
                className="w-20 h-20 mx-auto mb-4 rounded-full object-cover border-2 border-blue-500 group-hover:scale-110 transition"
              />

              {/* Name */}
              <h2 className="text-lg font-semibold text-gray-800">
                {profile.name}
              </h2>

              {/* Hint */}
              <p className="text-sm text-gray-500 mt-2">
                Klik untuk melihat profile
              </p>

              {/* Button */}
              <div className="mt-4">
                <span className="inline-block text-sm text-blue-600 font-medium group-hover:underline">
                  Lihat Profile →
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}