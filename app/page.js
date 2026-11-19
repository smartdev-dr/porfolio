import dynamic from "next/dynamic";
import Header from "@/layout/Header";
import KuraLayout from "@/layout/KuraLayout";
import MobileMenu from "@/layout/MobileMenu";
import Hero from "@/components/Hero";
import CompanyScaleSolutions from "@/components/ai/CompanyScaleSolutions";
import AIImpactVideoSection from "@/components/ai/AIImpactVideoSection";
import AIBentoGrid from "@/components/ai/AIBentoGrid";
import AIRoadmap from "@/components/ai/AIRoadmap";
import AIEvaluatorWidget from "@/components/ai/AIEvaluatorWidget";
import Priceing from "@/components/Priceing";
import TimeLine from "@/components/TimeLine";
import Contact from "@/components/Contact";

const Portfolio = dynamic(() => import("@/components/Portfolio"), {
  ssr: false,
});
const Skills = dynamic(() => import("@/components/Skills"), {
  ssr: false,
});
const Background3DGrid = dynamic(() => import("@/components/3d/Background3DGrid"), {
  ssr: false,
});

const Index = () => {
  return (
    <KuraLayout>
      {/* 3D PERSPECTIVE BACKGROUND & PARTICLES */}
      <Background3DGrid />

      {/* MOBILE MENU */}
      {/* <MobileMenu /> */}

      {/* TOPBAR */}
      <Header />

      {/* 1. 3D HERO: SOFTWARE & AI AGENCY */}
      <Hero />

      {/* 2. REAL SOLUTIONS BY COMPANY SCALE (PyMEs, Medianas, Corporativos) */}
      <CompanyScaleSolutions />

      {/* 2.5 VIDEO 9:16: ¿POR QUÉ INTEGRAR IA EN LOS PROCESOS DE TU EMPRESA? */}
      <AIImpactVideoSection />

      {/* 3. ASYMMETRIC BENTO GRID: AI & SOFTWARE CAPABILITIES */}
      <AIBentoGrid />

      {/* 4. REAL CASE STUDIES: MKG, ENTER, INVERAGRO, LOGICPAQ */}
      <Portfolio />

      {/* 5. 4-STEP INTEGRATION METHODOLOGY & ROADMAP */}
      <AIRoadmap />

      {/* 6. INTERACTIVE AI EVALUATOR & ROI WIDGET */}
      <AIEvaluatorWidget />

      {/* 7. FULL-STACK ENGINEERING STACK & METRICS */}
      <Skills />

      {/* 8. ENGAGEMENT MODELS & PRICING PACKAGES */}
      <Priceing />

      {/* 9. LEADERSHIP & CORE TEAM */}
      <TimeLine />

      {/* 10. ENTERPRISE CONTACT & DIRECT WHATSAPP */}
      <Contact />
    </KuraLayout>
  );
};

export default Index;
