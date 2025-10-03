import Header from "./components/Header";
import Footer from "./components/Footer";
import CarruselInspirador from "./components/CarruselInspirador";
import Mapa from "./components/Mapa";
import Lista from "./components/Lista";
import CarruselOfertas from "./components/CarruselOfertas";

export default function HomePage() {
  return (
    <main className="container-fluid p-0">
      <Header />
      <section className="my-5">
        <CarruselInspirador />
      </section>
      <section className="my-5">
        <Mapa />
      </section>
      <section className="my-5">
        <Lista />
      </section>
      <section className="my-5">
        <CarruselOfertas />
      </section>
      <Footer />
    </main>
  );
}
