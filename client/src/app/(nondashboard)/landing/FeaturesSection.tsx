"use client"
import React from "react";
import { motion } from "framer-motion";
import FeatureCard from "@/components/RComps/FeatureCard";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
        duration: 0.5,
        staggerChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const FeaturesSection = () => {
  return <motion.div initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={containerVariants}
  className="py-24 px-6 sm:px-8 lg:px-12 xl:px-16 bg-white"
  >
    <div className="max-w-4xl xl:max-w-6xl mx-auto">
        <motion.h2
        variants={itemVariants}
        className="text-3xl font-bold text-center mb-12 w-full sm:w-2/3 mx-auto"
        >
            Quickly find your perfect apartment with our advanced search features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-12 xl:gap-16">
            {[0,1,2].map((idx) => (
                <motion.div key={idx} variants={itemVariants} className="">
                    <FeatureCard imgSrc={`/landing-search${3- idx}.png`}
                    title={
                        [
                            "Trustworthy and Verified Listings",
                            "Browse Rental Listings with Ease",
                            "Simplify your Rental Search with Advanced Filters",
                        ][idx]
                    }
                    desc={
                        [
                            "Discover the bes tal options with user reviews and ratings",
                            "Get access to user reviews and ratings for a better understanding of the property",
                            "Find trustworthy and verified rental listings to ensure a smooth rental experience",
                        ][idx]
                    }
                    linkText={[
                        "Explore",
                        "Search",
                        "Discover",
                    ][idx]}
                    linkHref={["/explore", "/search", "/discover"][idx]}
                    />
                </motion.div>
            ))}
        </div>
    </div>
  </motion.div>
};

export default FeaturesSection;
