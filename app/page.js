"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import BudgetHiveLogo from "@/public/logo.jpeg";
import CarouselTestimonial from "./component/CarouselTestimonial";
import FAQPage from "./component/FAQPage";
import FooterPrimaryDarkTheme from "./component/Footer";
import { useClerk } from "@clerk/clerk-react";
import ContactSection from "./component/ContactSection";
import { useUser } from "@clerk/nextjs"; // Add this import


// Fade-in animation settings
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};


// Features Data
const features = [
  {
    title: "Navigate Success",
    description:
      "Course through the ever-changing seas of finance with expertise, foresight, & a commitment to your financial well-being.",
    icon: "🌟",
  },
  {
    title: "Optimal Protection",
    description:
      "Haven where peace of mind and security converge, setting the benchmark for safeguarding what you hold dear.",
    icon: "🛡",
  },
  {
    title: "Leadership Emerge",
    description:
      "Leaders emerge not just from positions but from the ability to inspire, guide, & navigate the journey towards shared goals.",
    icon: "⚙",
  },
  {
    title: "24/7 Assistance",
    description:
      "Unmatched support anytime, anywhere. Our knowledgeable team is ready 24/7 to guide you to financial success.",
    icon: "⏳",
  },
  {
    title: "Invest Capital",
    description:
      "From small beginnings to significant sums – invest any capital with us and watch your wealth grow.",
    icon: "💰",
  },
  {
    title: "Minimal Charges",
    description:
      "Make the most of your profits with our open and honest price schedule. Minimal expenses, maximum profit.",
    icon: "💵",
  },
];

// Feature Card Component with Glow
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="relative">
      {/* Concentrated Glow Effect */}
      <div className="absolute inset-0 -m-4">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-100/40 via-violet-100/40 to-cyan-100/40 rounded-2xl blur-xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-rose-100/40 via-violet-100/40 to-cyan-100/40 rounded-2xl blur-xl" />
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100/40 via-violet-100/40 to-cyan-100/40 rounded-2xl blur-xl opacity-70" />
      </div>

      {/* Feature Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative bg-white border border-black rounded-2xl p-6 w-80 shadow-md text-center"
      >
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="p-3 rounded-full bg-white inline-block text-2xl">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </motion.div>
    </div>
  );
};

// Features Section with White Background
const FeaturesSection = () => {
  return (
    <motion.div
      id="features"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col items-center p-10 bg-white" // Changed background to white
    >
      <h2 className="text-3xl font-bold text-center mb-6">
        Building and Safeguarding Your Wealth – Our Commitment to You
      </h2>
      <div className="flex gap-6 flex-wrap justify-center">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={<span className="text-2xl">{feature.icon}</span>}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </motion.div>
  );
};



// About Section
// About Section with Enhanced Styles and Animations

const AboutSection = () => {
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative bg-white py-16 px-6 md:px-20 flex justify-center"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-snug md:leading-tight"
        >
          Transform Your{" "}
          <span className="relative inline-block">
            <span className="absolute inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg opacity-30"></span>
            <span className="relative text-black">Financial Future</span>
          </span>{" "}
          Today
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } }}
          className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto"
        >
          Take control of your financial journey with{" "}
          <strong className="text-[#FF675E]">cutting-edge solutions</strong>{" "}
          tailored to help you{" "}
          <strong className="text-[#44BCFF]">grow, manage, and protect</strong> your wealth like never before.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-semibold text-gray-800">
            Unlock the Power of Smart Financial Strategies
          </h2>
          <p className="text-gray-600 text-lg">
            Discover how{" "}
            <strong className="text-[#FF44EC]">data-driven insights</strong> and{" "}
            <strong className="text-[#FF675E]">strategic planning</strong> can
            help you maximize your earnings, minimize risks, and achieve true
            financial freedom.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};


// Main Landing Page
const LandingPage = () => {
  const { openSignUp } = useClerk();
  const { isSignedIn } = useUser(); // Check if the user is signed in

  const handleGetStarted = () => {
    if (!isSignedIn) {
      openSignUp(); // Only open the SignUp modal if the user is not signed in
    } else {
      // Redirect to the dashboard if the user is signed in
      window.location.href = "/dashboard";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-yellow-50">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 w-full bg-white shadow-md">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" title="Logo" className="flex">
                <Image
                  src={BudgetHiveLogo}
                  alt="Budget Hive Logo"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <span className="text-2xl flex items-center font-bold text-gray-900">BudgetHive</span>
              </a>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex lg:items-center lg:space-x-10">
              <a href="#home" className="text-base text-black hover:text-gray-500">Home</a>
              <a href="#about" className="text-base text-black hover:text-gray-500">About</a>
              <a href="#features" className="text-base text-black hover:text-gray-500">Features</a>
              <a href="#testimonials" className="text-base text-black hover:text-gray-500">Testimonials</a>
              <a href="#contact" className="text-base text-black hover:text-gray-500">Contact</a>
            </nav>

            {/* Login Button */}
            <a
              href="#"
              className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-white bg-black border-2 border-black transition-all duration-200 hover:bg-gray-800 focus:bg-gray-800"
              onClick={handleGetStarted} // Open Clerk authentication on click
            >
              {isSignedIn ? "Go to Dashboard" : "Get Started"}
            </a>
          </div>
        </div>
      </header>


      {/* Hero Section */}
      <div  id="home" className="relative bg-white">
    <section className="overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-stretch lg:max-h-[900px] lg:min-h-[900px]">
            <div className="flex items-center justify-center w-full lg:order-2 lg:w-7/12">
                <div className="h-full px-4 pt-24 pb-16 sm:px-6 lg:px-24 2xl:px-32 lg:pt-40 lg:pb-14">
                    <div className="flex flex-col justify-between flex-1 h-full">
                        <div>
                            <h1 className="text-4xl font-bold text-black sm:text-6xl xl:text-7xl">
                                Take control of your daily
                                <span className="relative inline-flex">
                                    <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                                    <span className="relative text-black">expenses</span>
                                </span>
                            </h1>
                            <p className="mt-6 text-base text-black sm:text-xl">Our A.I helps you predict your expenses based on your previous activity and shares how you should manage your money.</p>
                            
                            <div className="mt-9 flex space-x-4">
                            <a href="#" title="" className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button"
                    >
                        Get Started
                    </a>
                                
                                <a
                        href="#"
                        title=""
                        className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900"
                        role="button"
                    >
                        <svg className="w-5 h-5 mr-2" viewBox="0 0 18 18" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z"
                                strokeWidth="2"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Watch free demo
                    </a>
                            </div>
                        </div>

                        <div className="mt-8 border-t-2 border-black lg:mt-auto sm:mt-14"></div>
                    </div>
                </div>
            </div>

            <div className="relative w-full overflow-hidden lg:w-5/12 lg:order-1">
                <div className="lg:absolute lg:bottom-0 lg:left-0">
                    <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/phone-mockup.png" alt="" />
                </div>
            </div>
        </div>
    </section>
</div>


      {/* About & Features Sections */}
      <AboutSection />
      <FeaturesSection />
      <CarouselTestimonial/>
      <ContactSection/>
      <FAQPage/>
      <FooterPrimaryDarkTheme/>
    </div>
    
  );
};

export default LandingPage;
