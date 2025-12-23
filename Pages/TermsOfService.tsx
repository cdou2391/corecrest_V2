import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

export default function TermsOfService() {
  const sections = [
    {
      icon: FileText,
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using the CoreCrest website and services, you accept and agree to be bound by the terms and provision of this agreement.',
        'If you do not agree to abide by the above, please do not use this service.',
        'We reserve the right to modify these terms at any time. We will notify users of any changes by updating the "Last updated" date on this page.',
      ],
    },
    {
      icon: Scale,
      title: 'Use License',
      content: [
        'Permission is granted to temporarily access the materials on CoreCrest\'s website for personal, non-commercial transitory viewing only.',
        'This is the grant of a license, not a transfer of title, and under this license you may not:',
        '• Modify or copy the materials',
        '• Use the materials for any commercial purpose or for any public display',
        '• Attempt to reverse engineer any software contained on the website',
        '• Remove any copyright or other proprietary notations from the materials',
        'This license shall automatically terminate if you violate any of these restrictions.',
      ],
    },
    {
      icon: AlertCircle,
      title: 'Service Terms',
      content: [
        'When you engage CoreCrest for services:',
        '• All project specifications, timelines, and deliverables will be outlined in a separate service agreement',
        '• Payment terms and schedules will be specified in the service agreement',
        '• Intellectual property rights will be transferred as specified in the service agreement',
        '• We reserve the right to refuse service to anyone for any reason at any time',
        '• You agree to provide accurate, current, and complete information during the service engagement',
      ],
    },
    {
      icon: CheckCircle,
      title: 'User Obligations',
      content: [
        'You agree to:',
        '• Provide accurate and complete information when using our services',
        '• Maintain the security of any account credentials provided',
        '• Not use our services for any unlawful purpose or to solicit others to perform unlawful acts',
        '• Not violate any local, state, national, or international law or regulation',
        '• Not transmit any worms, viruses, or any code of a destructive nature',
        '• Not infringe upon or violate our intellectual property rights or the intellectual property rights of others',
      ],
    },
    {
      icon: XCircle,
      title: 'Disclaimer',
      content: [
        'The materials on CoreCrest\'s website are provided on an "as is" basis. CoreCrest makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation:',
        '• Implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property',
        '• Any warranty that the website will be available, secure, or error-free',
        '• Any warranty regarding the accuracy, reliability, or currency of any information on the website',
        'We do not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on our website or otherwise relating to such materials or on any sites linked to this site.',
      ],
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 gradient-bg rounded-2xl mb-6">
            <Scale className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl shadow-lg border border-slate-200/50 p-8 md:p-10 mb-8"
        >
          <p className="text-slate-700 leading-relaxed mb-4">
            These Terms of Service ("Terms") govern your access to and use of the CoreCrest website and services. 
            Please read these Terms carefully before using our services.
          </p>
          <p className="text-slate-700 leading-relaxed">
            By accessing or using our website or services, you agree to be bound by these Terms. If you disagree with 
            any part of these terms, then you may not access the service.
          </p>
        </motion.div>

        {/* Main Content Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-3xl shadow-lg border border-slate-200/50 p-8 md:p-10"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center flex-shrink-0">
                  <section.icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">{section.title}</h2>
              </div>
              <div className="space-y-3 text-slate-700 leading-relaxed">
                {section.content.map((item, itemIndex) => (
                  <p key={itemIndex} className={item.startsWith('•') ? 'pl-4' : ''}>
                    {item}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-3xl shadow-lg border border-slate-200/50 p-8 md:p-10 mt-6"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Limitations of Liability</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              In no event shall CoreCrest or its suppliers be liable for any damages (including, without limitation, damages for loss 
              of data or profit, or due to business interruption) arising out of the use or inability to use the materials on 
              CoreCrest's website, even if CoreCrest or a CoreCrest authorized representative has been notified orally or in writing 
              of the possibility of such damage.
            </p>
            <p>
              Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential 
              or incidental damages, these limitations may not apply to you.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-3xl shadow-lg border border-slate-200/50 p-8 md:p-10 mt-6"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Intellectual Property</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              The service and its original content, features, and functionality are and will remain the exclusive property of CoreCrest 
              and its licensors. The service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may 
              not be used in connection with any product or service without our prior written consent.
            </p>
            <p>
              For services provided under a separate agreement, intellectual property rights will be transferred as specified in that 
              agreement. Unless otherwise specified, all custom-developed software and solutions become the property of the client upon 
              full payment.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-white rounded-3xl shadow-lg border border-slate-200/50 p-8 md:p-10 mt-6"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Payment Terms</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Payment terms for services will be specified in individual service agreements. Generally:
            </p>
            <ul className="space-y-2 pl-6 list-disc">
              <li>Payment schedules may include deposits, milestone payments, or full payment upon completion</li>
              <li>Late payments may incur interest charges as specified in the service agreement</li>
              <li>All prices are in the currency specified in the service agreement</li>
              <li>Refunds, if applicable, will be handled according to the terms specified in the service agreement</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="bg-white rounded-3xl shadow-lg border border-slate-200/50 p-8 md:p-10 mt-6"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Termination</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, 
              including without limitation if you breach the Terms.
            </p>
            <p>
              Upon termination, your right to use the service will cease immediately. If you wish to terminate your account, you may 
              simply discontinue using the service or contact us to request account deletion.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="bg-white rounded-3xl shadow-lg border border-slate-200/50 p-8 md:p-10 mt-6"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Governing Law</h2>
          <p className="text-slate-700 leading-relaxed">
            These Terms shall be interpreted and governed by the laws of Rwanda, without regard to its conflict of law provisions. 
            Any disputes arising from these Terms or the use of our services shall be subject to the exclusive jurisdiction of 
            the courts of Rwanda.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="bg-white rounded-3xl shadow-lg border border-slate-200/50 p-8 md:p-10 mt-6"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Changes to Terms</h2>
          <p className="text-slate-700 leading-relaxed">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, 
            we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change 
            will be determined at our sole discretion.
          </p>
          <p className="text-slate-700 leading-relaxed mt-4">
            By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="bg-gradient-to-br from-green-50 to-slate-50 rounded-3xl shadow-lg border border-green-100 p-8 md:p-10 mt-6"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <div className="space-y-2 text-slate-700">
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:info@corecrest.tech" className="text-green-600 hover:underline">
                info@corecrest.tech
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{' '}
              <a href="tel:+250788863783" className="text-green-600 hover:underline">
                +250 788 863 783
              </a>
            </p>
            <p>
              <strong>Address:</strong> Kigali, Rwanda
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

