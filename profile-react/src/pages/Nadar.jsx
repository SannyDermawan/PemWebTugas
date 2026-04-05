<<<<<<< HEAD
import { useState, useEffect } from "react";
import nadarImg from "../assets/nadar.jpeg";
const profile = {
  name: "Nadar Sofa",
  kelas: "T2F",
  prodi: "Teknologi Informasi",
  domisili: "DKI Jakarta",
  about:
    "Saya adalah pribadi yang memiliki semangat belajar tinggi dan selalu berusaha mengembangkan diri di berbagai bidang. Saya tertarik pada dunia teknologi, khususnya dalam pengembangan web dan pemrograman. Saya senang mempelajari hal-hal baru, bekerja secara mandiri maupun dalam tim, serta mampu beradaptasi dengan lingkungan yang dinamis. Saya memiliki kemampuan berpikir kritis dan analitis dalam menyelesaikan masalah. Selain itu, saya juga menghargai kedisiplinan, tanggung jawab, dan konsistensi dalam mencapai tujuan. Dengan sikap yang positif dan kemauan untuk terus berkembang, saya siap menghadapi tantangan serta memberikan kontribusi terbaik dalam setiap kesempatan yang saya jalani.",
  hobbies: [
    { label: "Bermain Game", icon: "🎮" },
    { label: "Olahraga", icon: "⚽" },
  ],
  social: [
    {
      label: "Instagram",
      handle: "@nadarr.s",
      url: "https://www.instagram.com/nadarr.s?igsh=c3V4djIyY3Fyemd5&utm_source=qr",
      color: "from-orange-400 via-pink-500 to-purple-600",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      handle: "Nadar Sofa",
      url: "https://www.linkedin.com/in/nadar-sofa-765646377/",
      color: "from-blue-600 to-blue-700",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
  ],
};

const Avatar = () => (
  <div className="relative flex items-center justify-center">
    <div
      className="absolute inset-0 rounded-full"
      style={{
        background:
          "conic-gradient(#c8a96e 0deg, #3a5a8c 120deg, #c8a96e 240deg, #3a5a8c 360deg)",
        animation: "spin 8s linear infinite",
        borderRadius: "9999px",
      }}
    />
    <div className="relative z-10 p-[4px] bg-transparent">
      <img
        src={nadarImg}
        alt="Nadar"
        className="w-28 h-28 rounded-full object-cover border-4 border-amber-50"
      />
    </div>
  </div>
);

const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      {children}
    </div>
  );
};

const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white border border-stone-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 ${className}`}
  >
    {children}
  </div>
);

const SectionHeader = ({ icon, title }) => (
  <>
    <div className="flex items-center gap-3 mb-3">
      <span className="text-xl" style={{ color: "#c8a96e" }}>{icon}</span>
      <h2 className="text-lg font-bold tracking-tight" style={{ fontFamily: "'Syne', sans-serif", color: "#0d0d0d" }}>
        {title}
      </h2>
    </div>
    <div className="h-px mb-5" style={{ background: "linear-gradient(to right, transparent, #c8a96e, transparent)", opacity: 0.5 }} />
  </>
);

export default function ProfileNadar() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');
        @keyframes spin { to { transform: rotate(360deg); } }
        body { background-color: #f5f0e8; }
      `}</style>

      <div className="min-h-screen relative" style={{ backgroundColor: "#f5f0e8", fontFamily: "'DM Sans', sans-serif" }}>
        {/* Top accent stripe */}
        <div className="h-1.5 w-full" style={{ background: "linear-gradient(90deg, #3a5a8c, #c8a96e, #3a5a8c)" }} />

        <main className="max-w-xl mx-auto px-4 py-12 space-y-5">

          {/* Hero Card */}
          <FadeIn delay={80}>
            <Card className="p-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-7">
                <Avatar />
                <div className="flex-1 text-center sm:text-left">
                  <p
                    className="text-xs uppercase tracking-widest mb-1"
                    style={{ color: "#7a7060", fontFamily: "'Syne', sans-serif" }}
                  >
                    Mahasiswa
                  </p>
                  <h1
                    className="text-3xl font-extrabold tracking-tight leading-tight mb-1"
                    style={{ fontFamily: "'Syne', sans-serif", color: "#0d0d0d" }}
                  >
                    {profile.name}
                  </h1>
                  <p className="text-sm mb-5 italic" style={{ color: "#7a7060", fontWeight: 300 }}>
                    {profile.prodi} &middot; Kelas {profile.kelas}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                    {[
                      { label: profile.kelas, bg: "#0d0d0d" },
                      { label: profile.prodi, bg: "#3a5a8c" },
                      { label: profile.domisili, bg: "#7a7060" },
                    ].map((tag) => (
                      <span
                        key={tag.label}
                        className="text-xs px-3 py-1 rounded-full text-amber-50 uppercase tracking-wider"
                        style={{ fontFamily: "'Syne', sans-serif", fontSize: "0.62rem", background: tag.bg }}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </FadeIn>

          {/* Stats Row */}
          <FadeIn delay={180}>
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Kelas", value: profile.kelas, big: true },
                { label: "Prodi", value: "TI", big: true },
                { label: "Domisili", value: "Jakarta", big: false },
              ].map((s) => (
                <Card key={s.label} className="p-5 text-center">
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#7a7060", fontFamily: "'Syne', sans-serif", fontSize: "0.6rem" }}>
                    {s.label}
                  </p>
                  <p
                    className={`font-extrabold leading-tight ${s.big ? "text-2xl" : "text-base"}`}
                    style={{ fontFamily: "'Syne', sans-serif", color: "#c8a96e" }}
                  >
                    {s.value}
                  </p>
                </Card>
              ))}
            </div>
          </FadeIn>

          {/* About */}
          <FadeIn delay={280}>
            <Card className="p-7">
              <SectionHeader icon="✦" title="Tentang Diri" />
              <p className="text-sm leading-relaxed" style={{ color: "#3a3530", fontWeight: 300, lineHeight: "1.9" }}>
                {profile.about}
              </p>
            </Card>
          </FadeIn>

          {/* Hobbies */}
          <FadeIn delay={370}>
            <Card className="p-7">
              <SectionHeader icon="◈" title="Hobi" />
              <div className="flex flex-wrap gap-3">
                {profile.hobbies.map((h) => (
                  <div
                    key={h.label}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-semibold"
                    style={{ fontFamily: "'Syne', sans-serif", borderColor: "rgba(0,0,0,0.08)", background: "#f5f0e8" }}
                  >
                    <span className="text-xl">{h.icon}</span>
                    {h.label}
                  </div>
                ))}
              </div>
            </Card>
          </FadeIn>

          {/* Social */}
          <FadeIn delay={460}>
            <Card className="p-7">
              <SectionHeader icon="⬡" title="Media Sosial" />
              <div className="flex flex-col sm:flex-row gap-3">
                {profile.social.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl text-white text-sm font-semibold bg-gradient-to-r ${s.color} hover:opacity-85 transition-all duration-200 hover:-translate-y-0.5`}
                    style={{ fontFamily: "'Syne', sans-serif", textDecoration: "none" }}
                  >
                    {s.icon}
                    {s.label} — {s.handle}
                  </a>
                ))}
              </div>
            </Card>
          </FadeIn>

          {/* Footer */}
          <FadeIn delay={540}>
            <p
              className="text-center text-xs uppercase tracking-widest pb-4"
              style={{ color: "#7a7060", fontFamily: "'Syne', sans-serif" }}
            >
              Nadar Sofa &middot; T2F &middot; Teknologi Informasi
            </p>
          </FadeIn>

        </main>
      </div>
    </>
  );
=======
export default function Hafez() {
  return <h1>Hafez Page</h1>;
>>>>>>> da2294217fb6cfefdbe4041ea25d9dff1978e523
}