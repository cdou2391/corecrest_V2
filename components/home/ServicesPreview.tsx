import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../../utils';
import { motion } from 'framer-motion';
import { Globe, Cloud, Code2, Lightbulb, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Websites That Convert',
    description: 'Get a website that turns visitors into enquiries, bookings, or sales — built around your customer journey, not just design.',
    color: 'from-teal-700 to-teal-600',
    bgColor: 'bg-teal-200',
    iconColor: 'text-teal-600',
  },
  {
    icon: Code2,
    title: 'Custom Web Apps & Internal Tools',
    description: 'Replace spreadsheets, email chains, and manual processes with simple tools that save time and reduce mistakes.',
    color: 'from-teal-600 to-teal-800',
    bgColor: 'bg-teal-100',
    iconColor: 'text-teal-700',
  },
  {
    icon: Cloud,
    title: 'Automation & Integrations',
    description: 'Connect the tools you already use and automate repetitive tasks so your team can focus on work that actually grows the business.',
    color: 'from-teal-600 to-teal-700',
    bgColor: 'bg-teal-200',
    iconColor: 'text-teal-600',
  },
  {
    icon: Lightbulb,
    title: 'IT Advisory (Decision-Safe Tech)',
    description: 'Make tech decisions with confidence. We help you choose what to build, what to buy, and what to fix first — with a clear ROI lens.',
    color: 'from-teal-700 to-teal-900',
    bgColor: 'bg-teal-200',
    iconColor: 'text-teal-600',
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-slate-50 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            What We Do
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Most small businesses don't need more tech — they need the right improvements in the right order. We identify what's leaking value and implement the highest-impact fixes to help you attract more customers, streamline operations, and grow with confidence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 h-full border border-slate-100 hover:border-transparent hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300">
                <div className={`w-14 h-14 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  to={createPageUrl('Services')}
                  className="inline-flex items-center gap-2 text-sm font-medium text-teal-700 hover:text-teal-800 group-hover:gap-3 transition-all"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}