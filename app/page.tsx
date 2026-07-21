import { EnquiryProvider } from "@/components/enquiry/EnquiryContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Clients } from "@/components/sections/Clients";
import { AccredianEdge } from "@/components/sections/AccredianEdge";
import { DomainExpertise } from "@/components/sections/DomainExpertise";
import { CourseSegmentation } from "@/components/sections/CourseSegmentation";
import { WhoShouldJoin } from "@/components/sections/WhoShouldJoin";
import { CatFramework } from "@/components/sections/CatFramework";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Faqs } from "@/components/sections/Faqs";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand } from "@/components/sections/CtaBand";

export default function Home() {
  return (
    <EnquiryProvider>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Clients />
        <AccredianEdge />
        <DomainExpertise />
        <CourseSegmentation />
        <WhoShouldJoin />
        <CatFramework />
        <HowItWorks />
        <Faqs />
        <Testimonials />
        <CtaBand />
      </main>
      <Footer />
    </EnquiryProvider>
  );
}
