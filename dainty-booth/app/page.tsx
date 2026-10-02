import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Treatments from './components/Treatments';
import Experience from './components/Experience';
import Results from './components/Results';
import Testimonials from './components/Testimonials';
import Locations from './components/Locations';
import Connect from './components/Connect';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Treatments />
        <Experience />
        <Results />
        <Testimonials />
        <Locations />
        <Connect />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
