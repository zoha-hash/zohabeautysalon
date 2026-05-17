import servicesData from "../data services/servicesData";

export default function Services() {
  return (
    <div className="page">
      <h2 style={{ textAlign: "center", marginTop: "40px" }}>Our Services</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          padding: "40px",
        }}
      >
        {servicesData.map((service, index) => (
          <div key={index} className="card">
            ✨ {service}
          </div>
        ))}
      </div>
    </div>
  );
}
