import NavBar from "@/components/NavBar";
import "@/app/globals.css";
import { Video } from "./ui/Video";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
