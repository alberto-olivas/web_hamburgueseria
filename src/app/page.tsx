import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Proceso from "@/components/Proceso";
import Galeria from "@/components/Galeria";
import Resenas from "@/components/Resenas";
import Ubicacion from "@/components/Ubicacion";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Menu />
        <Proceso />
        <Galeria />
        <Resenas />
        <Ubicacion />
      </main>
      <Footer />
    </>
  );
}
