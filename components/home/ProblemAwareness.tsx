import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

const problems = [
  'You get website visitors, but enquiries and bookings are inconsistent.',
  'Your team relies on spreadsheets, WhatsApp, or email threads to run core workflows.',
  'Customer follow-ups are manual, late, or forgotten.',
  'Reporting takes hours because data lives in too many places.',
  'You keep paying for tools, but nothing feels connected.',
  'Small mistakes (double work, missed messages, wrong data) happen too often.',
];

export default function ProblemAwareness() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Signs your tech is costing you money
            </h2>
          </div>
          
          <ul className="space-y-4">
            {problems.map((problem, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 text-slate-700"
              >
                <span className="text-green-600 mt-1 flex-shrink-0">•</span>
                <span>{problem}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

