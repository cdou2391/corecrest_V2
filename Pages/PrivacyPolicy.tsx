import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: FileText,
      title: 'Information We Collect',
      content: [
        'We collect information that you provide directly to us, including:',
        '• Personal information (name, email address, phone number, company name) when you contact us or book a consultation',
        '• Project details and requirements when you submit inquiries',
        '• Communication records when you interact with our team',
        '• Technical information such as IP address, browser type, and device information when you visit our website',
      ],
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        'We use the information we collect to:',
        '• Provide, maintain, and improve our services',
        '• Respond to your inquiries and provide customer support',
        '• Send you updates about our services (with your consent)',
        '• Analyze website usage and improve user experience',
        '• Comply with legal obligations and protect our rights',
      ],
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: [
        'We implement appropriate technical and organizational measures to protect your personal information:',
        '• Encryption of data in transit using SSL/TLS',
        '• Secure storage of data with access controls',
        '• Regular security assessments and updates',
        '• Limited access to personal information on a need-to-know basis',
        'However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.',
      ],
    },
    {
      icon: Shield,
      title: 'Data Sharing and Disclosure',
      content: [
        'We do not sell your personal information. We may share your information only in the following circumstances:',
        '• With your explicit consent',
        '• To comply with legal obligations or respond to lawful requests',
        '• To protect our rights, property, or safety, or that of our clients',
        '• With service providers who assist us in operating our business (under strict confidentiality agreements)',
        '• In connection with a business transfer or merger (with notice to affected users)',
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
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Privacy Policy
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
            At CoreCrest, we are committed to protecting your privacy and ensuring the security of your personal information. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our 
            website or use our services.
          </p>
          <p className="text-slate-700 leading-relaxed">
            By using our website or services, you agree to the collection and use of information in accordance with this policy. 
            If you do not agree with our policies and practices, please do not use our services.
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
          transition={{ delay: 0.6 }}
          className="bg-white rounded-3xl shadow-lg border border-slate-200/50 p-8 md:p-10 mt-8"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Your Rights</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="space-y-2 pl-6 list-disc">
              <li>The right to access and receive a copy of your personal information</li>
              <li>The right to rectify inaccurate or incomplete information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to object to or restrict processing of your information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent at any time</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us at{' '}
              <a href="mailto:info@corecrest.tech" className="text-green-600 hover:underline font-medium">
                info@corecrest.tech
              </a>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-3xl shadow-lg border border-slate-200/50 p-8 md:p-10 mt-6"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Cookies and Tracking Technologies</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              We use cookies and similar tracking technologies to track activity on our website and store certain information. 
              Cookies are files with a small amount of data that are sent to your browser from a website and stored on your device.
            </p>
            <p>
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you 
              do not accept cookies, you may not be able to use some portions of our website.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-3xl shadow-lg border border-slate-200/50 p-8 md:p-10 mt-6"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Data Retention</h2>
          <p className="text-slate-700 leading-relaxed">
            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, 
            unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely 
            delete or anonymize it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-white rounded-3xl shadow-lg border border-slate-200/50 p-8 md:p-10 mt-6"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Changes to This Privacy Policy</h2>
          <p className="text-slate-700 leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy 
            on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="bg-gradient-to-br from-green-50 to-slate-50 rounded-3xl shadow-lg border border-green-100 p-8 md:p-10 mt-6"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            If you have any questions about this Privacy Policy or our data practices, please contact us:
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

