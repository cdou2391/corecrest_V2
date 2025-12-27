import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Users, Heart, Target, Award } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Outcome-driven recommendations',
    description: 'Not generic packages — we identify what\'s leaking value and prioritize fixes that deliver measurable results.',
  },
  {
    icon: Shield,
    title: 'Fixed-scope diagnostics',
    description: 'Reduce decision risk with a clear 1–2 week assessment that shows exactly what to fix first.',
  },
  {
    icon: Zap,
    title: 'Clear ROI tradeoffs',
    description: 'Understand the build vs buy vs automate decision for every recommendation, with cost and time estimates.',
  },
  {
    icon: Users,
    title: 'Prioritized roadmap',
    description: 'Get a step-by-step plan that shows which improvements will have the biggest impact on your business.',
  },
  {
    icon: Award,
    title: 'Clean implementation',
    description: 'Solutions you can maintain, with documentation and handover so your team can take over smoothly.',
  },
  {
    icon: Heart,
    title: 'Local business understanding',
    description: 'We know the challenges small and growing businesses face in Rwanda and East Africa.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Practical, business-first delivery
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              We focus on outcomes that matter to your business, not just technical features. 
              Every recommendation comes with clear ROI tradeoffs and a prioritized roadmap.
            </p>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop"
                alt="Team working on technology solutions"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-slate-900/60 to-transparent" />
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-teal-600/30 transition-colors"
              >
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}