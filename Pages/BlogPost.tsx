import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, ArrowRight, Clock, Share2, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
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

// Sample post content for demo
const samplePostContent: Record<string, {
  title: string;
  content: string;
  author: string;
  category: string;
  cover_image: string;
  created_date: Date;
}> = {
  'future-digital-transformation-rwanda': {
    title: 'The Future of Digital Transformation in Rwanda',
    content: `
## Introduction: Rwanda's Digital Ambition Is Clear — Execution Is the Next Frontier

Rwanda has made its digital ambition unmistakably clear.

From the Smart Rwanda Master Plan, to investments in broadband infrastructure, digital ID systems, fintech, and e-government services, the country has positioned technology as a core pillar of national development. Unlike many markets, Rwanda is not debating whether to digitize — it is focused on how fast and how well it can do so.

However, as we move into the next phase, the future of digital transformation in Rwanda will not be defined by strategy documents or new technologies alone. It will be defined by execution inside real organizations — especially small and growing businesses.

The next wave of transformation is less about adopting technology, and more about using it correctly.

## Digital Transformation Is Shifting From "Adoption" to "Optimization"

Over the past decade, many Rwandan organizations have focused on technology adoption:

- Launching websites
- Moving to cloud hosting
- Using accounting or HR software
- Accepting digital payments
- Introducing basic management systems

This phase was necessary — but it is no longer enough.

The future of digital transformation in Rwanda will be driven by optimization, not adoption. That means asking harder questions:

- Are digital tools actually improving productivity?
- Are systems integrated or still siloed?
- Is customer data being used intelligently?
- Are manual processes quietly slowing growth?

Many businesses now have tools, but lack systems.

## SMEs Will Drive the Next Phase of Digital Growth

Large institutions in Rwanda — banks, telecoms, government agencies — have already undergone significant digital transformation. The biggest untapped opportunity now lies with small and medium-sized enterprises (SMEs).

SMEs face a unique set of challenges:

- Limited budgets
- Small teams wearing multiple hats
- Heavy reliance on spreadsheets, WhatsApp, and email
- Off-the-shelf tools that don't fully fit their workflows

For these businesses, digital transformation does not mean "enterprise software."
It means simpler systems that remove friction and scale with growth.

In the future, the most competitive SMEs will be those that:

- Automate repetitive tasks early
- Centralize data instead of scattering it across tools
- Build lightweight internal systems tailored to how they actually operate
- Treat technology as a business asset, not a cost center

## The Rise of Custom, Lightweight Solutions

One clear trend shaping Rwanda's digital future is the shift away from purely off-the-shelf software toward custom, lightweight digital solutions.

Why?

Because many global SaaS tools are built for:

- Large markets
- Complex organizations
- One-size-fits-all workflows

Rwandan businesses often need:

- Simpler interfaces
- Localized processes
- Integration with existing tools
- Flexibility without enterprise-level cost

Custom web applications, internal dashboards, and workflow automations are becoming more attractive because they:

- Fit the business instead of forcing the business to adapt
- Reduce manual work
- Improve accuracy and accountability
- Scale gradually as the business grows

This does not mean "build everything from scratch."
The future lies in smart combinations of existing tools and custom layers on top.

## Data Will Become a Competitive Advantage — Not Just a Byproduct

Many organizations in Rwanda collect data but do not use it effectively.

Sales data, customer interactions, operational metrics, and financial information often exist — but in disconnected systems. As a result, decision-making remains intuitive rather than informed.

The next phase of digital transformation will prioritize:

- Centralizing data
- Improving visibility through dashboards and reports
- Using data to guide pricing, staffing, marketing, and investment decisions

Businesses that can answer questions like:

- "Which services are most profitable?"
- "Where do customers drop off?"
- "What processes take the most time?"

will outperform those that cannot.

Digital transformation will increasingly be about clarity, not complexity.

## Cloud, Security, and Trust Will Matter More Than Ever

As more Rwandan businesses move systems online, trust and security will become central concerns.

Future-focused organizations will:

- Use cloud infrastructure responsibly
- Protect customer and business data
- Understand basic cybersecurity risks
- Design systems with resilience and backups in mind

Digital transformation without security is fragile transformation.

This does not require advanced cybersecurity teams, but it does require:

- Thoughtful system design
- Clear access controls
- Regular backups
- Awareness of regulatory and data protection expectations

## What the Future Demands From Business Leaders

The future of digital transformation in Rwanda is not about chasing trends. It demands a mindset shift from business leaders.

Key questions leaders should be asking now:

- Where is technology helping us — and where is it silently slowing us down?
- Which processes should be automated first?
- What data do we need but currently lack visibility into?
- Are we building systems for today only, or for growth?

Digital transformation is no longer an IT project.
It is a business strategy decision.

## Conclusion: Practical, Intentional Transformation Will Win

Rwanda's digital future is promising — but the winners will not be those who adopt the most tools or use the latest buzzwords.

They will be the businesses that:

- Make intentional technology decisions
- Focus on real business outcomes
- Optimize before overbuilding
- Treat digital systems as long-term assets

The future of digital transformation in Rwanda will be practical, measured, and business-driven.

And for organizations that approach it thoughtfully, it will be a powerful catalyst for sustainable growth.
    `,
    author: 'CoreCrest Team',
    category: 'digital_transformation',
    cover_image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop',
    created_date: new Date('2025-01-23'),
  },
  'custom-software-benefits': {
    title: '7 Powerful Benefits of Custom Software Development Over Off-the-Shelf Solutions',
    content: `
In today's fast-moving digital world, businesses face a crucial decision: should they invest in custom-developed software or rely on off-the-shelf (COTS) solutions? While pre-packaged tools promise quick implementation and affordability, they often fall short when businesses need flexibility, scalability, or strategic differentiation.

On the other hand, custom software development offers tailored functionality designed to fit unique workflows, integrate seamlessly with existing systems, and evolve with organizational growth. In this article, we'll explore the 7 key benefits of custom software development, compare it against off-the-shelf alternatives, and highlight when each option makes the most sense. This comparison of custom software development vs off-the-shelf solutions helps business leaders decide which approach best supports long-term growth.

## 1. Tailored Fit to Business Needs

Unlike off-the-shelf software, which is built to serve a broad audience, custom software is designed around your specific processes. This ensures that features directly align with business goals rather than forcing you to adapt workflows to fit generic tools.

**📌 Example:** A Kigali-based logistics company managing deliveries across Rwanda needed advanced route optimization to handle rural road networks and traffic variations. Off-the-shelf solutions couldn't account for challenges like poor road data or mobile-money-based proof of delivery. A [custom web application](/services#web-app-development) allowed them to streamline routes, reduce fuel costs, and improve delivery times for customers in both urban and rural areas.

## 2. Scalability and Flexibility

As businesses grow, their software needs often change. Custom software can be scaled up with additional features, modules, or integrations to match evolving requirements.

In contrast, off-the-shelf solutions may require expensive upgrades, third-party plugins, or even a complete system switch when business needs outgrow the product.

## 3. Greater Control and Ownership

With custom development, your business owns the source code. This means full control over updates, integrations, and long-term planning—without depending on a vendor's roadmap.

Off-the-shelf software often comes with licensing restrictions, vendor lock-in, and limited influence on product evolution.

## 4. Seamless Integration

Most organizations already rely on multiple systems (CRM, ERP, accounting tools, etc.). [Custom software](/services#web-app-development) can be built to integrate seamlessly with these existing systems, reducing duplicate data entry and minimizing errors.

In contrast, packaged software may require costly workarounds or middleware solutions for integration.

## 5. Enhanced Security

Custom software allows businesses to implement security protocols tailored to their specific risks, making it harder for attackers to exploit common vulnerabilities.

Off-the-shelf solutions, being widely used, are more attractive targets for cyberattacks, and businesses are dependent on vendors to release patches.

## 6. Long-Term Cost Efficiency

While upfront costs for custom development are higher, businesses often save in the long run by avoiding:

- Recurring license fees
- Paying for unnecessary features
- Costs of switching systems when off-the-shelf tools become obsolete

<img src="/custom_vs_offtheshelf_costs.png" alt="Custom vs Off-the-Shelf Cost Comparison" style="width: 100%; max-width: 800px; margin: 2rem auto; display: block;" />

*Figure: Custom software has higher upfront costs but proves more cost-efficient in the long term compared to off-the-shelf solutions.*

Over time, the ROI of custom software can surpass that of packaged products.

## 7. Competitive Advantage

Custom software is designed with your unique workflows and customer needs in mind. This creates differentiation in the marketplace, as competitors using generic tools can't replicate the same efficiency or innovation.

## Strengths of Off-the-Shelf Software

To provide balance, off-the-shelf solutions do have benefits, particularly for small businesses or startups:

- Lower upfront costs
- Quick deployment
- Proven reliability with established support networks
- Standardized workflows for rapid stabilization

## Quick Comparison Table

| Criterion                 | Custom Software                               | Off-the-Shelf (COTS)                         |
| ------------------------- | --------------------------------------------- | -------------------------------------------- |
| Upfront Cost              | High                                          | Low                                          |
| Time to Deploy            | Long (months to years)                        | Immediate                                    |
| Fit to Business Needs     | Perfect alignment                             | Generic, one-size-fits-all                   |
| Scalability & Flexibility | High — evolves with business                  | Limited—may require upgrades or replacements |
| Control & Ownership       | Full ownership, control                       | Vendor-locked, limited roadmap influence     |
| Integration Capability    | Custom-tailored                               | May require extra tools or workarounds       |
| Security                  | Tailored security                             | Shared vulnerabilities across users          |
| Long-Term Costs           | Lower (no recurring fees, no wasted features) | Ongoing fees, potential replacement costs    |
| Competitive Advantage     | High — unique differentiation                 | None — shared by many                        |

## When to Choose Custom vs Off-the-Shelf

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 2rem 0;">

<div>

### ✅ Custom Software is best for businesses that:

- Have unique workflows or complex requirements
- Need tight system integrations
- Value security and control
- Plan for long-term scalability

</div>

<div>

### ✅ Off-the-Shelf Software works best when:

- Budget is limited
- Immediate deployment is required
- Standard workflows suffice
- Vendor-provided support is a priority

</div>

</div>

## Conclusion

The decision between custom software development and off-the-shelf solutions comes down to business priorities.

If your business needs speed, affordability, and standardization, off-the-shelf may suffice.

But if you require scalability, control, advanced security, and a competitive edge, custom software is the smarter investment.

In the end, the best choice is one that aligns with your strategic goals, budget, and growth trajectory. If you're unsure which path is right for your business, [our IT advisory services](/services#it-advisory) can help you make the right technology decision with a clear ROI lens.

## Frequently Asked Questions

### What is the difference between custom software and off-the-shelf software?

Custom software is built specifically for your business needs, workflows, and processes. It offers tailored functionality, full ownership, and the ability to evolve with your organization. Off-the-shelf software (also called COTS - Commercial Off-The-Shelf) is pre-built software designed for a broad audience, offering quick deployment and lower upfront costs but with limited customization and potential vendor lock-in.

### Is custom software worth the cost for small businesses?

Yes, custom software can be worth the investment for small businesses that have unique workflows, need tight system integrations, or plan for long-term scalability. While upfront costs are higher, businesses often save money over time by avoiding recurring license fees, paying for unnecessary features, and the costs of switching systems when off-the-shelf tools become obsolete. The key is understanding your specific needs and growth trajectory.

### When should a business move away from off-the-shelf tools?

Businesses should consider moving away from off-the-shelf tools when they face limitations such as: workflows that don't fit the software, expensive workarounds for integration, paying for features they don't need, vendor lock-in preventing necessary changes, or when the software can't scale with business growth. If these constraints are slowing down operations or limiting competitive advantage, custom software may be the better long-term solution.

### Does custom software scale better than packaged solutions?

Yes, custom software typically scales better because it's designed to evolve with your business. You can add features, modules, or integrations as needed without waiting for vendor roadmaps or paying for expensive upgrades. Custom software grows with your organization, whereas packaged solutions may require complete system switches when business needs outgrow the product's capabilities.
    `,
    author: 'CoreCrest Team',
    category: 'custom_software',
    cover_image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop',
    created_date: new Date('2024-12-22'),
  },
};

export default function BlogPost() {
  const [searchParams] = useSearchParams();
  const slug = searchParams.get('slug') || '';

  // Use sample content
  const post = samplePostContent[slug] || samplePostContent['future-digital-transformation-rwanda'];

  if (!post) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Post not found</h1>
          <Link to={createPageUrl('Blog')} className="text-teal-600 hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Generate SEO metadata for custom-software-benefits post
  const isCustomSoftwarePost = slug === 'custom-software-benefits';
  const seoTitle = isCustomSoftwarePost 
    ? '7 Benefits of Custom Software vs Off-the-Shelf Solutions | CoreCrest'
    : `${post.title} | CoreCrest`;
  const seoDescription = isCustomSoftwarePost
    ? 'Discover 7 powerful benefits of custom software development compared to off-the-shelf solutions, and learn when each option makes sense for your business.'
    : post.content.substring(0, 160).replace(/\n/g, ' ').trim();
  const canonicalUrl = isCustomSoftwarePost
    ? 'https://corecrest.tech/blog-post?slug=custom-software-benefits'
    : `https://corecrest.tech/blog-post?slug=${slug}`;
  const ogImage = post.cover_image.startsWith('http') 
    ? post.cover_image 
    : `https://corecrest.tech${post.cover_image}`;
  
  // Format date for Open Graph article metadata
  const publishedDate = format(post.created_date, 'yyyy-MM-dd');

  // Generate Article schema for custom-software-benefits
  const articleSchema = isCustomSoftwarePost ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": seoDescription,
    "image": ogImage,
    "datePublished": post.created_date.toISOString(),
    "dateModified": post.created_date.toISOString(),
    "author": {
      "@type": "Organization",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "CoreCrest",
      "logo": {
        "@type": "ImageObject",
        "url": "https://corecrest.tech/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    },
    "articleSection": "Custom Software",
    "keywords": "custom software development vs off-the-shelf software, benefits of custom software development, custom software vs COTS, off-the-shelf software limitations, custom business software, software development for growing businesses"
  } : null;

  // Generate FAQPage schema for custom-software-benefits
  const faqSchema = isCustomSoftwarePost ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between custom software and off-the-shelf software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Custom software is built specifically for your business needs, workflows, and processes. It offers tailored functionality, full ownership, and the ability to evolve with your organization. Off-the-shelf software (also called COTS - Commercial Off-The-Shelf) is pre-built software designed for a broad audience, offering quick deployment and lower upfront costs but with limited customization and potential vendor lock-in."
        }
      },
      {
        "@type": "Question",
        "name": "Is custom software worth the cost for small businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, custom software can be worth the investment for small businesses that have unique workflows, need tight system integrations, or plan for long-term scalability. While upfront costs are higher, businesses often save money over time by avoiding recurring license fees, paying for unnecessary features, and the costs of switching systems when off-the-shelf tools become obsolete. The key is understanding your specific needs and growth trajectory."
        }
      },
      {
        "@type": "Question",
        "name": "When should a business move away from off-the-shelf tools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Businesses should consider moving away from off-the-shelf tools when they face limitations such as: workflows that don't fit the software, expensive workarounds for integration, paying for features they don't need, vendor lock-in preventing necessary changes, or when the software can't scale with business growth. If these constraints are slowing down operations or limiting competitive advantage, custom software may be the better long-term solution."
        }
      },
      {
        "@type": "Question",
        "name": "Does custom software scale better than packaged solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, custom software typically scales better because it's designed to evolve with your business. You can add features, modules, or integrations as needed without waiting for vendor roadmaps or paying for expensive upgrades. Custom software grows with your organization, whereas packaged solutions may require complete system switches when business needs outgrow the product's capabilities."
        }
      }
    ]
  } : null;

  const schemas = [];
  if (articleSchema) schemas.push(articleSchema);
  if (faqSchema) schemas.push(faqSchema);

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={isCustomSoftwarePost ? "custom software development vs off-the-shelf software, benefits of custom software development, custom software vs COTS, off-the-shelf software limitations, custom business software, software development for growing businesses, custom software for SMEs" : undefined}
        ogTitle={seoTitle}
        ogDescription={seoDescription}
        ogImage={ogImage}
        ogUrl={canonicalUrl}
        ogType={isCustomSoftwarePost ? 'article' : undefined}
        ogPublishedTime={isCustomSoftwarePost ? `${publishedDate}T00:00:00+00:00` : undefined}
        ogAuthor={isCustomSoftwarePost ? post.author : undefined}
        ogSection={isCustomSoftwarePost ? 'Custom Software' : undefined}
        twitterTitle={seoTitle}
        twitterDescription={seoDescription}
        twitterImage={ogImage}
        canonicalUrl={canonicalUrl}
        schema={schemas.length > 0 ? schemas : undefined}
      />
      <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <section className="relative">
        <div className="h-[40vh] relative overflow-hidden">
          <img
            src={post.cover_image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to={createPageUrl('Blog')}
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
              
              <Badge className={`${categoryColors[post.category]} border-0 mb-4`}>
                {categoryLabels[post.category]}
              </Badge>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {format(new Date(post.created_date), 'MMMM d, yyyy')}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  5 min read
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg prose-slate max-w-none"
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                h2: ({ children }) => (
                  <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4 first:mt-0">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-semibold text-slate-900 mt-6 mb-3">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="space-y-1.5 mb-4 list-disc list-inside text-slate-600">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="space-y-1.5 mb-4 list-decimal list-inside text-slate-600">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="text-slate-600">{children}</li>
                ),
                strong: ({ children }) => (
                  <strong className="text-slate-900 font-semibold">{children}</strong>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-teal-700 pl-6 py-2 my-4 bg-slate-50 rounded-r-lg">
                    {children}
                  </blockquote>
                ),
                hr: () => <hr className="my-8 border-slate-200" />,
                em: ({ children }) => (
                  <em className="text-slate-500 italic">{children}</em>
                ),
                img: ({ src, alt, ...props }: any) => {
                  return (
                    <div className="my-4">
                      <img
                        src={src}
                        alt={alt}
                        className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
                        {...props}
                      />
                    </div>
                  );
                },
                div: ({ children, ...props }: any) => {
                  // Check if this is the side-by-side comparison div (grid container)
                  if (props.style && typeof props.style === 'object' && props.style.display === 'grid') {
                    return (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6" {...props}>
                        {children}
                      </div>
                    );
                  }
                  // Check if this is one of the comparison section divs (child of grid)
                  // These divs contain h3 headings with checkmarks
                  const hasH3 = Array.isArray(children) && children.some((child: any) => {
                    if (React.isValidElement(child)) {
                      // Check if it's an h3
                      if (child.type === 'h3') return true;
                      // Check if it has children that contain checkmark
                      const childProps = child.props as any;
                      if (childProps?.children) {
                        const nestedChildren = Array.isArray(childProps.children) 
                          ? childProps.children 
                          : [childProps.children];
                        return nestedChildren.some((nested: any) => 
                          typeof nested === 'string' && nested.includes('✅')
                        );
                      }
                    }
                    return false;
                  });
                  
                  if (hasH3) {
                    return (
                      <div className="bg-gradient-to-br from-teal-50 to-slate-50 border-2 border-teal-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-teal-300 transition-all" {...props}>
                        {children}
                      </div>
                    );
                  }
                  return <div {...props}>{children}</div>;
                },
                table: ({ children }) => (
                  <div className="overflow-x-auto my-4">
                    <table className="min-w-full border-collapse border border-slate-300 rounded-lg overflow-hidden">
                      {children}
                    </table>
                  </div>
                ),
                thead: ({ children }) => (
                  <thead className="bg-teal-600 text-white">
                    {children}
                  </thead>
                ),
                tbody: ({ children }) => (
                  <tbody className="bg-white divide-y divide-slate-200">
                    {children}
                  </tbody>
                ),
                tr: ({ children }) => (
                  <tr className="hover:bg-slate-50 transition-colors">
                    {children}
                  </tr>
                ),
                th: ({ children }) => (
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white border border-slate-300">
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td className="px-6 py-4 text-sm text-slate-700 border border-slate-300">
                    {children}
                  </td>
                ),
                a: ({ href, children, ...props }: any) => {
                  // Handle internal links
                  if (href && (href.startsWith('/') || href.startsWith('#'))) {
                    return (
                      <Link
                        to={href}
                        className="text-teal-700 hover:text-teal-800 underline font-medium"
                        {...props}
                      >
                        {children}
                      </Link>
                    );
                  }
                  // Handle external links
                  return (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-700 hover:text-teal-800 underline font-medium"
                      {...props}
                    >
                      {children}
                    </a>
                  );
                },
              }}
            >
              {post.content}
            </ReactMarkdown>
          </motion.article>

          {/* Share */}
          <div className="border-t border-slate-200 mt-8 pt-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <span className="text-slate-500">Share this article:</span>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <Link
                to={createPageUrl('Blog')}
                className="text-teal-700 hover:text-teal-800 font-medium flex items-center gap-2"
              >
                View all posts
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Let's discuss how CoreCrest can help you achieve your digital transformation goals.
            </p>
            <Link
              to={createPageUrl('BookConsultation')}
              className="inline-flex items-center gap-2 gradient-bg text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg shadow-teal-700/25"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}