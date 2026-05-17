import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="page">
      {/* HERO SECTION */}
      <div
        style={{
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "55px",
            background: "linear-gradient(90deg,#a78bfa,#60a5fa)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Zoha Beauty Salon
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: "#cbd5e1", fontSize: "18px" }}
        >
          Luxury Beauty Experience • Hair • Makeup • Glow ✨
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          style={{ marginTop: "25px" }}
        >
          Book Appointment
        </motion.button>
      </div>

      {/* FEATURES SECTION */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          padding: "40px",
        }}
      >
        <div className="card">💇 Hair Styling</div>
        <div className="card">💄 Makeup Artist</div>
        <div className="card">💅 Nail Care</div>
        <div className="card">✨ Skin Glow</div>
      </div>
    </div>
  );
}
