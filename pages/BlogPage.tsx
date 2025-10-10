import React from 'react';
import { posts } from '../data/posts';

const BlogPage: React.FC = () => {

  const categories = [
    'Strategic Engineering',
    'Performance & Optimization',
    'AI in Business',
    'Workflow Automation',
    'Digital Integrity'
  ];

  // Posts are now sourced from ../data/posts

  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 sm:py-32 text-center bg-[#02050E]">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Insights & Perspectives</h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
            A space for articles, case studies, and reflections on building enduring digital systems. Here, we explore the intersection of technology, strategy, and craftsmanship.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Posts */}
            <div className="lg:w-3/4">
              <h2 className="text-2xl font-bold text-white mb-8">Latest Articles</h2>
              <div className="space-y-12">
                {posts.map((post) => (
                   <article key={post.title} className="group relative flex flex-col items-start md:flex-row gap-8">
                      <div className="md:w-1/3">
                        <img src={post.imageUrl} alt="" className="aspect-[16/9] w-full rounded-2xl object-cover sm:aspect-[2/1] lg:aspect-[3/2] border-2 border-transparent group-hover:border-[#F88F26] transition" />
                      </div>
                      <div className="md:w-2/3">
                        <div className="flex items-center gap-x-4 text-xs">
                          <span className="relative z-10 rounded-full bg-[#F88F26]/20 px-3 py-1.5 font-medium text-[#FBBF24]">
                            {post.category}
                          </span>
                        </div>
                        <div className="relative">
                          <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-[#F88F26]">
                            <a href={`/blog/${post.slug}`}><span className="absolute inset-0" />{post.title}</a>
                          </h3>
                          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-400">{post.excerpt}</p>
                        </div>
                      </div>
                  </article>
                ))}
                <div className="text-center py-12">
                    <p className="text-gray-400">More articles coming soon...</p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-1/4">
              <div className="sticky top-28 p-6 bg-gray-900/30 rounded-2xl border border-blue-900/50">
                <h3 className="text-xl font-semibold text-white mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map(cat => (
                    <li key={cat}>
                      <a href="#" className="text-gray-400 hover:text-[#F88F26] transition-colors">{cat}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;