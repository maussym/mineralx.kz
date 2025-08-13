import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import MissionVision from "@/components/mission-vision";
import DigitalTrends from "@/components/digital-trends";
import KeyObjectives from "@/components/key-objectives";
import MemberCompanies from "@/components/member-companies";
import Benefits from "@/components/benefits";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-inter overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <MissionVision />
      <DigitalTrends />
      <KeyObjectives />
      <MemberCompanies />
      <Benefits />
      <ContactForm />
      <Footer />
    </div>
  );
}
