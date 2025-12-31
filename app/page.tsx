import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import Title from "../components/Title";
import Why from "../components/Why";
import How from "../components/How";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Landing />
      <Title />
      <Why />
      <How />
      <Contact />
      <Footer />
    </main>
  );
}
