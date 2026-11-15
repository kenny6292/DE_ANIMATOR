import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "DE_ANIMATOR | 2D, 3D, CGI & Motion Design",
  description: "DE_ANIMATOR creates expressive 2D animation, 3D visuals, CGI and motion design. Explore selected work and start a project.",
  openGraph: {
    title: "DE_ANIMATOR — Bringing Imagination to Life",
    description: "2D animation, 3D artistry, CGI and visual storytelling."
  }
};

export default function RootLayout({ children }) {
  return <html lang="en"><body><Header />{children}<Footer /></body></html>;
}