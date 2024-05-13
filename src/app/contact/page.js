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
            <div>Call or email today!</div>
            <div>(360)391-7468 </div>
            <div>mohreng@outlook.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
