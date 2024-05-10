import "@/app/contact/contactPage.css";
function ContactPage() {
  return (
    <div className="background">
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "200px",
          }}
        >
          <div className="contactInfoContainer">
            <h1>Call or email today!</h1>
            <h1>(360)391-7468 </h1>
            <h1>mohreng@outlook.com</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
