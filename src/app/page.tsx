import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import FeaturedProject from "@/components/FeaturedProject";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Materiality from "@/components/Materiality";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="conteudo">
        <Hero />
        <Intro />
        <Projects />
        <FeaturedProject />
        <Services />
        <Process />
        <Materiality />
        <Stats />
        <Testimonials />
        <CTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
