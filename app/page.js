"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { FaChartLine, FaUserCheck, FaWallet } from "react-icons/fa";
import BudgetHiveLogo from "@/public/logo.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E9F5E9] to-[#D8C4E6] text-[#1B3A3A]">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-between items-center p-6 bg-white shadow-lg border-b-4 border-[#F9C80E]"
      >
        <div className="flex items-center space-x-4">
          <Image src={BudgetHiveLogo} alt="BudgetHive Logo" width={50} height={50} />
          <h1 className="text-3xl font-extrabold text-[#1B3A3A]">BudgetHive</h1>
        </div>
        <nav>
          <ul className="flex space-x-6 text-lg text-[#1B3A3A] font-semibold">
            <li><Link href="/">Home</Link></li>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#features">Features</Link></li>
            <li><Link href="#testimonials">Testimonials</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="py-20 text-center bg-[#E9F5E9]"
      >
        <h2 className="text-5xl font-extrabold text-[#1B3A3A]">Master Your Finances with BudgetHive</h2>
        <p className="mt-4 text-lg text-[#6B9F69]">Smart budgeting for a secure future.</p>
        <Link href="/signup">
          <Button size="lg" className="mt-6 bg-[#F9C80E] text-black font-bold px-6 py-3 rounded-lg shadow-md hover:bg-[#E0B50C] transition-all">
            Get Started
          </Button>
        </Link>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        id="about"
        className="py-20 bg-[#D8C4E6] text-center"
      >
        <h2 className="text-3xl font-bold text-[#1B3A3A]">About BudgetHive</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-[#6B9F69]">
          BudgetHive is your trusted partner in managing expenses, tracking investments, and achieving financial freedom.
        </p>
      </motion.section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-[#E9F5E9] text-center">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-3xl font-bold text-[#1B3A3A]">
          Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          {[
            { icon: <FaWallet size={40} />, title: "Expense Tracking", desc: "Monitor and categorize your spending in real-time." },
            { icon: <FaChartLine size={40} />, title: "Smart Budgeting", desc: "Set savings goals and stick to your financial plan." },
            { icon: <FaUserCheck size={40} />, title: "Financial Insights", desc: "Receive personalized insights to grow your wealth." },
          ].map((feature, index) => (
            <motion.div key={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <Card className="p-6 bg-white border-2 border-[#F9C80E] shadow-xl transform transition-all hover:scale-105">
                <CardContent className="text-center">
                  <div className="text-[#F9C80E] mx-auto">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mt-4 text-[#1B3A3A]">{feature.title}</h3>
                  <p className="text-[#6B9F69]">{feature.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <motion.section id="contact" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="py-20 bg-[#D8C4E6] text-center">
        <h2 className="text-3xl font-bold text-[#1B3A3A]">Get in Touch</h2>
        <p className="mt-4">Have questions? Reach out to us!</p>
        <form className="mt-8 max-w-lg mx-auto">
          <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg border-2 border-[#F9C80E] bg-white text-black mb-4" />
          <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg border-2 border-[#F9C80E] bg-white text-black mb-4" />
          <textarea placeholder="Your Message" className="w-full p-3 rounded-lg border-2 border-[#F9C80E] bg-white text-black mb-4"></textarea>
          <Button size="lg" className="bg-[#F9C80E] text-black font-bold px-6 py-3 rounded-lg shadow-md hover:bg-[#E0B50C] transition-all">
            Send Message
          </Button>
        </form>
      </motion.section>

      {/* Footer */}
      <footer className="py-6 bg-white text-center text-[#1B3A3A] border-t-4 border-[#F9C80E]">
        © 2025 BudgetHive. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
