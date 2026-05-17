import { useState } from "react";
import servicesData from "../data services/servicesData";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page">
      <h2 style={{ textAlign: "center", marginTop: "40px" }}>
        Book Appointment ✨
      </h2>

      {!submitted ? (
        <form
          className="card"
          onSubmit={handleSubmit}
          style={{
            maxWidth: "420px",
            margin: "30px auto",
            padding: "20px",
          }}
        >
          {/* NAME */}
          <input
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            required
            style={inputStyle}
          />

          {/* PHONE */}
          <input
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
            style={inputStyle}
          />

          {/* SERVICE DROPDOWN */}
          <select
            name="service"
            onChange={handleChange}
            required
            style={selectStyle}
          >
            <option value="">✨ Select Service</option>

            {servicesData.map((service, index) => (
              <option key={index} value={service} style={{ color: "#000" }}>
                {service}
              </option>
            ))}
          </select>

          {/* DATE */}
          <input
            type="date"
            name="date"
            onChange={handleChange}
            required
            style={inputStyle}
          />

          {/* BUTTON */}
          <button type="submit" style={buttonStyle}>
            Confirm Appointment
          </button>
        </form>
      ) : (
        <div
          className="card"
          style={{
            maxWidth: "420px",
            margin: "30px auto",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <h3>🎉 Booking Confirmed!</h3>

          <p>
            <b>Name:</b> {form.name}
          </p>
          <p>
            <b>Phone:</b> {form.phone}
          </p>
          <p>
            <b>Service:</b> {form.service}
          </p>
          <p>
            <b>Date:</b> {form.date}
          </p>

          <button onClick={() => setSubmitted(false)} style={buttonStyle}>
            Book Another Appointment
          </button>
        </div>
      )}
    </div>
  );
}

/* 🔥 STYLES FIXED */
const inputStyle = {
  width: "100%",
  padding: "12px",
  margin: "8px 0",
  borderRadius: "10px",
  border: "1px solid #ccc",
  background: "#f8fafc", // ✅ light background
  color: "#111", // ✅ black text fix
  outline: "none",
};

const selectStyle = {
  width: "100%",
  padding: "12px",
  margin: "8px 0",
  borderRadius: "10px",
  border: "1px solid #ccc",
  background: "#f8fafc", // ✅ visible dropdown
  color: "#111", // ✅ text black
};

const buttonStyle = {
  width: "100%",
  marginTop: "10px",
  padding: "12px",
  borderRadius: "25px",
  border: "none",
  background: "linear-gradient(90deg, #7c3aed, #3b82f6)",
  color: "white",
  cursor: "pointer",
  fontWeight: "bold",
};
