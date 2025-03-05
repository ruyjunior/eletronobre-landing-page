import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Services from "@/components/Services/Services"
import Container from "@/components/Container";
import Section from "@/components/Section";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Container>
        <Services />

        <Section
          id="clients"
          title="Clients"
          description="Nossos clients."
        >
          <Testimonials />
        </Section>

        <FAQ />


      </Container>
    </>
  );
};

export default HomePage;
