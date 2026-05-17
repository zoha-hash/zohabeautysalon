export default function Contact() {
  return (
    <div className="page">
      <h2 style={{ textAlign: "center", marginTop: "40px" }}>Contact Us</h2>

      <div
        className="card"
        style={{
          maxWidth: "400px",
          margin: "30px auto",
        }}
      >
        <p>📍 Location: Pakistan</p>
        <p>📞 Phone: 0309-9344906</p>
        <p>📧 Email: zohabeautysalon@gmail.com</p>

        <button style={{ width: "100%", marginTop: "10px" }}>
          Message on WhatsApp
        </button>
      </div>
    </div>
  );
}
<a href="mailto:zohabeautysalon@gmail.com">
  <button>Send Email</button>
</a>;
