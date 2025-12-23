import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Outcome-Driven',
      description: 'We focus on what drives results, not just what looks impressive. Every solution is built with clear business outcomes in mind.',
    },
    {
      icon: Heart,
      title: 'Practical First',
      description: 'No over-engineering. We build what you need, when you need it, with a clear path to ROI.',
    },
    {
      icon: Users,
      title: 'Business-Focused',
      description: 'We understand that technology is a means to an end. Your success is measured in leads, efficiency, and growth.',
    },
    {
      icon: Sparkles,
      title: 'Right Order',
      description: 'We identify what\'s leaking value and fix the highest-impact issues first, not the most complex ones.',
    },
  ];

  const milestones = [
    { year: '2023', title: 'Founded', description: 'CoreCrest started with a mission to help small businesses fix tech weak points' },
    { year: 'Feb 2024', title: 'First Major Client', description: 'Secured our first major client, marking a significant milestone' },
    { year: 'Feb 2026', title: 'Umwirondoro SaaS Launch', description: 'Planned launch of our Umwirondoro SaaS platform' },
  ];

  return (
    <>
      <SEO
        title="About CoreCrest - Practical Tech Solutions for Small Businesses | Rwanda"
        description="CoreCrest helps small businesses fix tech weak points that cost customers, time, and money. Based in Kigali, Rwanda. Practical, outcome-driven solutions for business growth."
        keywords="About CoreCrest, Software Company Rwanda, IT Services Kigali, Small Business Technology, Web Development Rwanda, Business Growth Solutions"
        ogTitle="About CoreCrest - Practical Tech Solutions for Small Businesses | Rwanda"
        ogDescription="CoreCrest helps small businesses fix tech weak points that cost customers, time, and money. Based in Kigali, Rwanda."
        ogUrl="https://corecrest.tech/about"
        twitterTitle="About CoreCrest - Practical Tech Solutions for Small Businesses | Rwanda"
        twitterDescription="CoreCrest helps small businesses fix tech weak points that cost customers, time, and money. Based in Kigali, Rwanda."
        canonicalUrl="https://corecrest.tech/about"
      />
      <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-green-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-green-600/10 to-green-700/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-semibold text-green-600 tracking-wide uppercase">
                About CoreCrest
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-4 mb-6">
                We help small businesses fix the tech weak points that are{' '}
                <span className="gradient-text">costing them customers, time, and money</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                CoreCrest helps small and growing businesses build websites and internal tools 
                that generate more leads, streamline operations, and support growth — without overbuilding.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Based in Kigali, we combine technical expertise with a practical understanding 
                of what actually works for growing businesses. We focus on the right improvements 
                in the right order, with a clear ROI lens.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=500&fit=crop"
                alt="CoreCrest team collaborating on website development and technology solutions for small businesses in Rwanda"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">5+</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">Years</p>
                    <p className="text-slate-600">of Excellence</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-700 to-green-800 rounded-3xl p-8 md:p-12 text-white"
            >
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-white/90 leading-relaxed">
                To help small and growing businesses identify and fix the tech weak points 
                that are costing them customers, time, and money. We deliver practical, 
                outcome-driven solutions that generate leads, streamline operations, and 
                support growth — without overbuilding.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-green-700 to-green-900 rounded-3xl p-8 md:p-12 text-white"
            >
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-white/90 leading-relaxed">
                To be the trusted partner that helps businesses make tech decisions with 
                confidence. We envision a future where every small business knows exactly 
                what to build, what to buy, and what to fix first — with clear ROI at every step.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <span className="text-sm font-semibold text-green-600 tracking-wide uppercase">
              Our Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 mb-6">
              Practical, Business-First Delivery
            </h2>
            <p className="text-lg text-slate-600">
              Most small businesses don't need more tech — they need the right improvements 
              in the right order. We identify what's leaking value and implement the highest-impact fixes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                alt="Strategic planning and innovation for small business technology solutions in Rwanda"
                className="rounded-3xl shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                'Outcome-driven recommendations, not generic packages',
                'Fixed-scope diagnostics to reduce decision risk',
                'Clean implementation with documentation and handover',
                'Prioritize improvements by ROI, not complexity',
                'Right tech at the right time — no overbuilding',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 gradient-bg rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg text-slate-700">{item}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-green-600 tracking-wide uppercase">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4">
              What Drives Us Every Day
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 gradient-bg rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-green-600 tracking-wide uppercase">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">
              Our Journey
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-green-700 to-green-600" />

            <div className="grid md:grid-cols-3 gap-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative text-center"
                >
                  <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-4 relative z-10">
                    <span className="text-lg font-bold text-white">{milestone.year}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-slate-400">
                    {milestone.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Get a clear roadmap in 1–2 weeks
            </h2>
            <p className="text-lg text-slate-600 mb-4">
              Book a Growth Diagnostic to identify what's leaking value and see exactly what to fix first. 
              Low-risk, fixed-scope assessment. Clear roadmap before you spend on a build.
            </p>
            <p className="text-sm text-slate-500 mb-10">
              Outcome-driven recommendations, not generic packages. Fixed-scope diagnostics to reduce decision risk.
            </p>
            <Link
              to={createPageUrl('BookConsultation')}
              className="inline-flex items-center gap-2 gradient-bg text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg shadow-green-700/25"
            >
              Get a 2-Week Growth Diagnostic
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}