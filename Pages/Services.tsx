import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';
import { 
  Globe, Cloud, Code2, Lightbulb, ArrowRight, CheckCircle,
  Smartphone, Search, Gauge, Shield, RefreshCw,
  BarChart3, Users, Zap, Database, Settings
} from 'lucide-react';
import SEO from '../components/SEO';

const services = [
  {
    id: 'website-development',
    icon: Globe,
    title: 'Websites That Convert',
    subtitle: 'Small Business Website Design That Converts Visitors into Customers',
    description: 'Get a website that turns visitors into enquiries, bookings, or sales — built around your customer journey, not just design. We focus on what drives results: clear calls-to-action, fast loading times, and a user experience that guides visitors to take action. Small business website design that converts visitors into customers and generates more qualified leads for your business.',
    color: 'from-teal-600 to-teal-700',
    features: [
      { icon: Search, text: 'Built around your customer journey, not just design' },
      { icon: Smartphone, text: 'Mobile-first so customers can engage anywhere' },
      { icon: Gauge, text: 'Fast loading to reduce bounce rates' },
      { icon: Zap, text: 'Clear calls-to-action that convert visitors' },
      { icon: Shield, text: 'Secure and reliable hosting' },
      { icon: RefreshCw, text: 'Easy for you to update content yourself' },
    ],
    useCases: [
      'Service businesses needing more qualified leads',
      'E-commerce stores looking to reduce cart abandonment',
      'Local businesses wanting online booking systems',
      'Companies needing landing pages that convert',
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
  },
  {
    id: 'saas-products',
    icon: Cloud,
    title: 'Automation & Integrations',
    subtitle: 'Business Automation & Tool Integrations for SMEs',
    description: 'Connect the tools you already use and automate repetitive tasks so your team can focus on work that actually grows the business. We help you eliminate manual work, reduce errors, and create workflows that save time and money. Business automation and tool integrations for SMEs that streamline operations and improve operational efficiency.',
    color: 'from-teal-700 to-teal-800',
    features: [
      { icon: Zap, text: 'Connect your existing tools (CRM, email, payment systems)' },
      { icon: RefreshCw, text: 'Automate repetitive tasks and workflows' },
      { icon: BarChart3, text: 'Reduce manual data entry and errors' },
      { icon: Users, text: 'Free up your team to focus on growth work' },
      { icon: Gauge, text: 'Simple setup without complex infrastructure' },
      { icon: Shield, text: 'Reliable and secure automation' },
    ],
    useCases: [
      'Automating data entry between systems',
      'Connecting your website to CRM and email tools',
      'Streamlining order processing and fulfillment',
      'Setting up automated customer communications',
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
  {
    id: 'web-app-development',
    icon: Code2,
    title: 'Custom Web Apps & Internal Tools',
    subtitle: 'Custom Internal Tools & Web Applications for Business Efficiency',
    description: 'Replace spreadsheets, email chains, and manual processes with simple tools that save time and reduce mistakes. We build internal tools that your team will actually use — no over-engineering, just practical solutions that solve real problems. Custom internal tools and web applications for business efficiency that help small businesses manage operations better.',
    color: 'from-teal-600 to-teal-800',
    features: [
      { icon: Code2, text: 'Replace Excel-based processes with proper tools' },
      { icon: Database, text: 'Centralize data so everyone has visibility' },
      { icon: Zap, text: 'Reduce mistakes from manual data handling' },
      { icon: Users, text: 'Tools your team will actually use' },
      { icon: Settings, text: 'Simple interfaces, no over-engineering' },
      { icon: RefreshCw, text: 'Built to grow with your business' },
    ],
    useCases: [
      'Replacing Excel-based processes with proper tools',
      'Building customer portals for self-service',
      'Creating internal dashboards for better visibility',
      'Developing tools for managing operations and inventory',
    ],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
  },
  {
    id: 'it-advisory',
    icon: Lightbulb,
    title: 'IT Advisory (Decision-Safe Tech)',
    subtitle: 'Technology Strategy & Advisory for Small Businesses',
    description: 'Make tech decisions with confidence. We help you choose what to build, what to buy, and what to fix first — with a clear ROI lens. Get practical advice that reduces risk and ensures you\'re investing in the right solutions. Technology strategy and advisory for small businesses that prioritize improvements by ROI and help you make decision-safe tech choices.',
    color: 'from-teal-700 to-teal-900',
    features: [
      { icon: Lightbulb, text: 'Build vs buy vs automate decisions' },
      { icon: BarChart3, text: 'Prioritize improvements by ROI' },
      { icon: Settings, text: 'Evaluate software options before buying' },
      { icon: Zap, text: 'Identify what to fix first for maximum impact' },
      { icon: Users, text: 'Get clarity on tech decisions' },
      { icon: Shield, text: 'Reduce risk with practical recommendations' },
    ],
    useCases: [
      'Deciding whether to build, buy, or automate',
      'Evaluating software options before purchasing',
      'Prioritizing tech improvements by ROI',
      'Getting clarity on what to fix first',
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
  },
];

export default function Services() {
  return (
    <>
      <SEO
        title="Our Services - Website Development, SaaS & Web Apps for Small Businesses | CoreCrest"
        description="CoreCrest offers comprehensive technology solutions for small businesses in Rwanda: websites that convert, custom web apps & internal tools, business automation & integrations, and decision-safe IT advisory services. Helping businesses grow with practical, outcome-driven solutions."
        keywords="Website Development Rwanda, SaaS Solutions, Custom Web Applications, IT Advisory Services, Web App Development Kigali, Software Services Rwanda, Small Business Website Design, Business Automation Rwanda, Internal Tools SMEs, Workflow Automation, Lead Generation, Conversion Optimization"
        ogTitle="Our Services - Website Development, SaaS & Web Apps for Small Businesses | CoreCrest"
        ogDescription="Comprehensive technology solutions for small businesses in Rwanda: websites that convert, custom web apps, business automation, and IT advisory services."
        ogUrl="https://corecrest.tech/services"
        twitterTitle="Our Services - Website Development, SaaS & Web Apps for Small Businesses | CoreCrest"
        twitterDescription="Comprehensive technology solutions for small businesses in Rwanda: websites that convert, custom web apps, business automation, and IT advisory services."
        canonicalUrl="https://corecrest.tech/services"
      />
      <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-teal-50/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-teal-600/10 to-teal-700/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-sm font-semibold text-teal-600 tracking-wide uppercase">
              What We Do
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-4 mb-6">
              Most small businesses don't need more tech — they need the{' '}
              <span className="gradient-text">right improvements in the right order</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              We identify what's leaking value and implement the highest-impact fixes. 
              Practical, outcome-driven solutions that generate leads, streamline operations, 
              and support growth — without overbuilding.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} items-center justify-center mb-6`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
                      {service.title}
                    </h2>
                    <h3 className="text-lg text-teal-600 font-medium mb-4">
                      {service.subtitle}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-8">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <feature.icon className="w-4 h-4 text-slate-600" />
                          </div>
                          <span className="text-sm text-slate-700">{feature.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Use Cases */}
                    <div className="bg-slate-50 rounded-2xl p-6 mb-8">
                      <h4 className="font-semibold text-slate-900 mb-4">Potential Use Cases</h4>
                      <ul className="space-y-2">
                        {service.useCases.map((useCase, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-teal-700 flex-shrink-0" />
                            <span className="text-slate-600">{useCase}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      to={createPageUrl('BookConsultation') + `?service=${service.id}`}
                      className={`inline-flex items-center gap-2 bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg`}
                    >
                      Discuss This Service
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>

                  {/* Image */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="relative">
                      <img
                        src={service.image}
                        alt={`${service.title} - ${service.subtitle} for small businesses in Rwanda`}
                        className="rounded-3xl shadow-2xl w-full"
                      />
                      <div className={`absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br ${service.color} rounded-2xl opacity-20 blur-2xl`} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-teal-600 tracking-wide uppercase">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">
              How We Work With You
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'We learn about your business, goals, and challenges' },
              { step: '02', title: 'Planning', desc: 'We design a solution and create a detailed roadmap' },
              { step: '03', title: 'Development', desc: 'We build your solution with regular updates' },
              { step: '04', title: 'Launch & Support', desc: 'We deploy and provide ongoing support' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-bold gradient-text opacity-30 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400">
                  {item.desc}
                </p>
                {index < 3 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 w-8 h-8 text-teal-700/30" />
                )}
              </motion.div>
            ))}
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
              className="inline-flex items-center gap-2 gradient-bg text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg shadow-teal-700/25"
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