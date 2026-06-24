import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import SEO from '../components/SEO';

const categoryLabels: Record<string, string> = {
  technology: 'Technology',
  saas: 'SaaS',
  web_design: 'Web Design',
  it_strategy: 'IT Strategy',
  digital_transformation: 'Digital Transformation',
  custom_software: 'Custom Software',
};

const categoryColors: Record<string, string> = {
  technology: 'bg-teal-200 text-teal-700',
  saas: 'bg-teal-200 text-teal-700',
  web_design: 'bg-orange-100 text-orange-700',
  it_strategy: 'bg-teal-200 text-teal-700',
  digital_transformation: 'bg-pink-100 text-pink-700',
  custom_software: 'bg-blue-100 text-blue-700',
};

// Blog posts
const samplePosts = [
  {
    id: '1',
    title: 'The Future of Digital Transformation in Rwanda',
    slug: 'future-digital-transformation-rwanda',
    excerpt: 'Rwanda\'s digital ambition is clear — execution is the next frontier. Learn how SMEs will drive the next phase of digital growth through practical, intentional transformation.',
    author: 'CoreCrest Team',
    category: 'digital_transformation',
    cover_image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
    created_date: new Date('2025-01-23'),
    published: true,
  },
  {
    id: '7',
    title: '7 Powerful Benefits of Custom Software Development Over Off-the-Shelf Solutions',
    slug: 'custom-software-benefits',
    excerpt: 'Explore the 7 key benefits of custom software development, compare it against off-the-shelf alternatives, and learn when each option makes the most sense for businesses in Kigali, Rwanda.',
    author: 'CoreCrest Team',
    category: 'custom_software',
    cover_image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
    created_date: new Date('2024-12-22'),
    published: true,
  },
  {
    id: '2',
    title: 'How to Choose a Web Developer in Rwanda: 7 Questions to Ask Before You Sign',
    slug: 'how-to-choose-web-developer-rwanda',
    excerpt: 'Not all web developers are equal. Here are the 7 questions every Rwandan business owner should ask before hiring a developer — and the red flags to watch out for.',
    author: 'CoreCrest Team',
    category: 'web_design',
    cover_image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop',
    created_date: new Date('2025-02-10'),
    published: true,
  },
  {
    id: '3',
    title: '5 Signs Your Small Business Needs Automation (And How to Start)',
    slug: 'signs-your-business-needs-automation',
    excerpt: 'If your team is copying data between spreadsheets, chasing unpaid invoices manually, or spending hours on tasks that repeat daily — automation could save you 10+ hours a week.',
    author: 'CoreCrest Team',
    category: 'technology',
    cover_image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop',
    created_date: new Date('2025-03-05'),
    published: true,
  },
  {
    id: '4',
    title: 'Website vs WhatsApp: Which Should Your SME in Rwanda Invest In First?',
    slug: 'website-vs-whatsapp-for-smes-rwanda',
    excerpt: 'Many Rwandan SMEs run their entire business through WhatsApp. It works — until it doesn\'t. Here\'s an honest comparison to help you decide where to invest your digital budget first.',
    author: 'CoreCrest Team',
    category: 'web_design',
    cover_image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop',
    created_date: new Date('2025-03-20'),
    published: true,
  },
  {
    id: '5',
    title: 'What Is IT Advisory and Why Every Growing Business in Rwanda Needs It',
    slug: 'what-is-it-advisory-rwanda',
    excerpt: 'IT advisory isn\'t just for big corporations. Learn how small and medium businesses in Rwanda can avoid costly tech mistakes and make smarter technology decisions with the right guidance.',
    author: 'CoreCrest Team',
    category: 'it_strategy',
    cover_image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    created_date: new Date('2025-04-08'),
    published: true,
  },
  {
    id: '6',
    title: 'How to Measure the ROI of Your Business Website in Rwanda',
    slug: 'measure-website-roi-rwanda',
    excerpt: 'Your website is not just a digital brochure — it should generate leads and revenue. Here\'s a practical framework for measuring whether your website is actually working for your business.',
    author: 'CoreCrest Team',
    category: 'technology',
    cover_image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    created_date: new Date('2025-04-25'),
    published: true,
  },
  {
    id: '8',
    title: 'When Does Your Business Need a Custom Web App? (vs Using Off-the-Shelf Tools)',
    slug: 'when-does-your-business-need-custom-web-app',
    excerpt: 'Trello, Notion, and Google Sheets are great — until your business outgrows them. Here\'s how to know when it\'s time to build a custom internal tool or web application.',
    author: 'CoreCrest Team',
    category: 'saas',
    cover_image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
    created_date: new Date('2025-05-12'),
    published: true,
  },
];

export default function Blog() {
  const [displayCount, setDisplayCount] = useState(10);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Use sample posts
  const allPosts = samplePosts;

  const filteredPosts = selectedCategory === 'all'
    ? allPosts
    : allPosts.filter(post => post.category === selectedCategory);

  const displayedPosts = filteredPosts.slice(0, displayCount);
  const hasMore = displayCount < filteredPosts.length;

  const featuredPost = filteredPosts.length > 0 ? filteredPosts[0] : null;

  return (
    <>
      <SEO
        title="CoreCrest Blog - Insights & Resources | Software Development Rwanda"
        description="Stay updated with the latest trends, tips, and insights on technology, web development, SaaS, and digital transformation from CoreCrest, Rwanda's leading software company."
        keywords="Blog Rwanda, Technology Blog, Web Development Insights, SaaS Trends, Digital Transformation Africa, IT Strategy, CoreCrest Blog"
        ogTitle="CoreCrest Blog - Insights & Resources | Software Development Rwanda"
        ogDescription="Stay updated with the latest trends, tips, and insights on technology, web development, SaaS, and digital transformation from CoreCrest."
        ogUrl="https://corecrest.tech/blog"
        twitterTitle="CoreCrest Blog - Insights & Resources | Software Development Rwanda"
        twitterDescription="Stay updated with the latest trends, tips, and insights on technology, web development, SaaS, and digital transformation from CoreCrest."
        canonicalUrl="https://corecrest.tech/blog"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "CoreCrest Blog",
            "description": "Tech insights, guides, and resources for small businesses in Rwanda.",
            "url": "https://corecrest.tech/blog",
            "publisher": {
              "@type": "Organization",
              "name": "CoreCrest",
              "logo": { "@type": "ImageObject", "url": "https://corecrest.tech/logo.png" }
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://corecrest.tech" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://corecrest.tech/blog" }
            ]
          }
        ]}
      />
      <div className="pt-24 min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-200/30">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-sm font-semibold text-teal-600 tracking-wide uppercase">
              Our Blog
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mt-4 mb-6">
              CoreCrest Blog — Tech Insights for <span className="gradient-text">Small Businesses in Rwanda</span>
            </h1>
            <p className="text-lg text-slate-600">
              Stay updated with the latest trends, tips, and insights on technology, 
              web development, SaaS, and digital transformation.
            </p>
          </motion.div>

          {/* Featured Post */}
          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
            >
              <Link to={`/blog/${featuredPost.slug}`}>
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="grid md:grid-cols-2">
                    <div className="aspect-[4/3] md:aspect-auto">
                      <img
                        src={featuredPost.cover_image}
                        alt={featuredPost.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4">
                        <Badge className={`${categoryColors[featuredPost.category]} border-0`}>
                          {categoryLabels[featuredPost.category]}
                        </Badge>
                        <span className="text-sm text-slate-500">Featured</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 hover:text-teal-600 transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-slate-600 mb-6 line-clamp-3">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center gap-6 text-sm text-slate-500">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {featuredPost.author}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {format(new Date(featuredPost.created_date), 'MMM d, yyyy')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'gradient-bg text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All Posts
            </button>
            {Object.entries(categoryLabels).map(([value, label]) => (
              <button
                key={value}
                onClick={() => setSelectedCategory(value)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === value
                    ? 'gradient-bg text-white'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedPosts.filter((post) => post.id !== featuredPost?.id).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/blog/${post.slug}`}>
                  <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all h-full flex flex-col">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={post.cover_image}
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge className={`${categoryColors[post.category]} border-0 text-xs`}>
                          {categoryLabels[post.category]}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-3 hover:text-teal-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-4 line-clamp-2 flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                          <Calendar className="w-4 h-4" />
                          {format(new Date(post.created_date), 'MMM d, yyyy')}
                        </div>
                        <span className="text-teal-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                          Read more
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          {hasMore && (
            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setDisplayCount(prev => prev + 6)}
                className="rounded-full px-8"
              >
                Load More Posts
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-500">No posts found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Want to Stay Updated?
            </h2>
            <p className="text-lg text-slate-400 mb-10">
              Get the latest insights on technology and digital transformation 
              delivered straight to your inbox.
            </p>
            <Link
              to={createPageUrl('Contact')}
              className="inline-flex items-center gap-2 gradient-bg text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}