import type { ComponentType, SVGProps } from "react";
import {
  IconBulb,
  IconChat,
  IconRefresh,
  IconChip,
  IconExpand,
  IconTarget,
  IconBox,
  IconBrain,
  IconUsers,
  IconChart,
  IconGear,
  IconGlobe,
  IconMoney,
  IconMonitorCheck,
  IconMonitorX,
  IconCap,
  IconBriefcase,
  IconPresentation,
  IconVideoPlay,
} from "@/components/icons";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

/* ---------- Navigation ---------- */
export type NavLink = { label: string; id: string };

export const navLinks: NavLink[] = [
  { label: "Home", id: "home" },
  { label: "Stats", id: "stats" },
  { label: "Clients", id: "clients" },
  { label: "Accredian Edge", id: "edge" },
  { label: "CAT", id: "cat" },
  { label: "How It Works", id: "how-it-works" },
  { label: "FAQs", id: "faqs" },
  { label: "Testimonials", id: "testimonials" },
];

/* ---------- Hero ---------- */
export const heroPoints = ["Tailored Solutions", "Industry Insights", "Expert Guidance"];

/* ---------- Stats / Track Record ---------- */
export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "10K+", label: "Professionals Trained For Exceptional Career Success" },
  { value: "200+", label: "Sessions Delivered With Unmatched Learning Excellence" },
  { value: "5K+", label: "Active Learners Engaged In Dynamic Courses" },
];

/* ---------- Clients / Partnerships ---------- */
export const clients: string[] = [
  "Reliance",
  "HCL",
  "IBM",
  "CRIF",
  "ADP",
  "Bayer",
  "Genpact",
  "Fractal",
];

/* ---------- Accredian Edge (timeline) ---------- */
export type EdgeItem = { icon: Icon; title: string; description: string };

export const edgeItems: EdgeItem[] = [
  { icon: IconBulb, title: "Tailored Solutions", description: "Programs customized to your organization's goals and challenges." },
  { icon: IconChat, title: "Expert Guidance", description: "Learn from industry leaders with real-world experience." },
  { icon: IconRefresh, title: "Innovative Framework", description: "Proprietary methods for impactful, application-driven results." },
  { icon: IconChip, title: "Advanced Technology", description: "State-of-the-art LMS for seamless learning experiences." },
  { icon: IconExpand, title: "Diverse Offerings", description: "Courses across industries, skill levels, and emerging fields." },
  { icon: IconTarget, title: "Proven Impact", description: "Trusted by leading organizations for measurable outcomes." },
  { icon: IconBox, title: "Flexible Delivery", description: "Online and offline options tailored to your needs." },
];

/* ---------- Domain Expertise ---------- */
export type Domain = { icon: Icon; title: string };

export const domains: Domain[] = [
  { icon: IconBulb, title: "Product & Innovation Hub" },
  { icon: IconBrain, title: "Gen-AI Mastery" },
  { icon: IconUsers, title: "Leadership Elevation" },
  { icon: IconChart, title: "Tech & Data Insights" },
  { icon: IconGear, title: "Operations Excellence" },
  { icon: IconGlobe, title: "Digital Enterprise" },
  { icon: IconMoney, title: "Fintech Innovation Lab" },
];

/* ---------- Course Segmentation ---------- */
export type CourseSegment = {
  title: string;
  description: string;
  image: string;
};

export const courseSegments: CourseSegment[] = [
  {
    title: "Program Specific",
    description: "Certificate, Executive, Post Graduate Certificate",
    image: "/images/course-program.jpg",
  },
  {
    title: "Industry Specific",
    description: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
    image: "/images/course-industry.jpg",
  },
  {
    title: "Topic Specific",
    description: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
    image: "/images/course-topic.jpg",
  },
  {
    title: "Level Specific",
    description: "Senior Leadership, Mid-Career Professionals, Freshers",
    image: "/images/course-level.jpg",
  },
];

/* ---------- Who Should Join ---------- */
export type Audience = { icon: Icon; title: string; description: string };

export const audiences: Audience[] = [
  { icon: IconMonitorCheck, title: "Tech Professionals", description: "Enhance expertise, embrace tech, drive innovation." },
  { icon: IconMonitorX, title: "Non-Tech Professionals", description: "Adapt digitally, collaborate in tech environments." },
  { icon: IconCap, title: "Emerging Professionals", description: "Develop powerful skills for rapid career growth." },
  { icon: IconBriefcase, title: "Senior Professionals", description: "Strengthen leadership, enhance strategic decisions." },
];

/* ---------- CAT Framework ---------- */
export type CatStep = { title: string; description: string };

export const catSteps: CatStep[] = [
  { title: "Concept", description: "Foundational knowledge for deep subject understanding." },
  { title: "Application", description: "Practical implementation through real-world scenarios." },
  { title: "Tools", description: "Resources and techniques for effective skill mastery." },
];

/* ---------- How It Works ---------- */
export type Step = { icon: Icon; title: string; description: string };

export const howItWorksSteps: Step[] = [
  { icon: IconChart, title: "Skill Gap Analysis", description: "Assess team skill gaps and developmental needs." },
  { icon: IconPresentation, title: "Customized Training Plan", description: "Create a tailored roadmap addressing organizational goals." },
  { icon: IconVideoPlay, title: "Flexible Program Delivery", description: "Deliver adaptable programs aligned with industry and organizational needs." },
];

/* ---------- FAQs ---------- */
export type FaqCategory = {
  key: string;
  label: string;
  items: { q: string; a: string }[];
};

export const faqCategories: FaqCategory[] = [
  {
    key: "course",
    label: "About the Course",
    items: [
      {
        q: "What types of corporate training programs does Accredian offer?",
        a: "We offer tailored programs across Data Science & AI, Generative AI, Product Management, Leadership, and Digital Transformation — delivered as certificate, executive, and post-graduate formats.",
      },
      {
        q: "What domain specializations are available?",
        a: "Specializations span Product & Innovation, Gen-AI Mastery, Leadership Elevation, Tech & Data Insights, Operations Excellence, Digital Enterprise, and Financial Innovation.",
      },
      {
        q: "Can programs be customized for our organization?",
        a: "Yes. Every engagement begins with a skill-gap analysis so we can tailor the curriculum, projects, and delivery format to your goals and tools.",
      },
    ],
  },
  {
    key: "delivery",
    label: "About the Delivery",
    items: [
      {
        q: "Do you offer online and offline delivery?",
        a: "Both. We provide live online cohorts, self-paced modules, and on-site workshops — or a blend, based on what works for your teams.",
      },
      {
        q: "How long does a typical program run?",
        a: "Programs range from short 8-week accelerators to 24-week executive programs, depending on depth and outcomes.",
      },
    ],
  },
  {
    key: "misc",
    label: "Miscellaneous",
    items: [
      {
        q: "How do you measure training impact?",
        a: "We track engagement, skill growth, and business outcomes through a real-time cohort analytics dashboard and report against agreed KPIs.",
      },
      {
        q: "How do we get started?",
        a: "Click 'Enquire Now' and share a few details. A learning strategist will reach out within one business day to scope a program.",
      },
    ],
  },
];

/* ---------- Testimonials ---------- */
export type Testimonial = { company: string; quote: string };

export const testimonials: Testimonial[] = [
  {
    company: "ADP",
    quote:
      "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
  },
  {
    company: "Bayer",
    quote:
      "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
  },
  {
    company: "HCL",
    quote:
      "The cohorts were rigorous, practical, and genuinely engaging. Our teams applied what they learned within weeks — the impact on productivity was immediate and measurable.",
  },
  {
    company: "IBM",
    quote:
      "A true learning partner. From skill-gap analysis to delivery, Accredian was accountable for outcomes at every step. Completion rates were the highest we've seen.",
  },
];
