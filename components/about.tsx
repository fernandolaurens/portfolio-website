'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        Fresh graduate in Computer Science (S.Kom, GPA 3.82) from Universitas Gunadarma 
        with strong interest in <span className="font-medium">AI, Android Development, and Data Analysis</span>. 
        Experienced in building <span className="font-medium">5+ mobile applications</span> and multiple 
        machine learning models with proven accuracy improvements. Skilled in creating 
        simple dashboards for monitoring and reporting, and applying analytical 
        techniques to transform data into insights.
        <br />
        Hands-on experience in <span className="font-medium">IT support</span> during an internship at the 
        Ministry of Foreign Affairs, including device setup, network troubleshooting, 
        VPN configuration, and endpoint security. 
        <br />
        Solid background in <span className="font-medium">Python, Kotlin, SQL, and UI/UX design</span>, 
        combined with strong problem-solving skills and eagerness to contribute to 
        technology-driven solutions.
      </p>
    </motion.section>
  );
}
