import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/home/About";
import { Blog } from "@/components/home/Blog";
import { Contact } from "@/components/home/Contact";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { Hero } from "@/components/home/Hero";
import { Process } from "@/components/home/Process";
import { Services } from "@/components/home/Services";
import { Skills } from "@/components/home/Skills";
import { SocialProof } from "@/components/home/SocialProof";
import { Team } from "@/components/home/Team";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <SocialProof />
        <FeaturedWork />
        <Services />
        <Process />
        <Skills />
        <About />
        <Team />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
