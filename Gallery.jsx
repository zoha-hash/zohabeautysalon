export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702",
    "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f",
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937",
    "https://images.unsplash.com/photo-1519741497674-611481863552",
    "https://images.unsplash.com/photo-1526045478516-99145907023c",
    "https://images.unsplash.com/photo-1512496015851-a90fb38ba796",
  ];

  return (
    <div className="page">
      <h2 style={{ textAlign: "center", marginTop: "40px" }}>
        Our Work Gallery
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "15px",
          padding: "40px",
        }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="card"
            style={{ padding: "0", overflow: "hidden" }}
          >
            <img
              src={img}
              alt="salon work"
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                transition: "0.4s",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
