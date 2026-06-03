import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, BookOpen, Sparkles } from 'lucide-react'

const posts = [
  {
    slug: 'minimal-beauty-routine',
    title: 'Minimal Daily Beauty Routine for Women',
    excerpt: 'A simple 3-step blueprint: gentle skincare, effortless makeup, and everyday self-care habits that keep you glowing without the overwhelm.',
    image: '/images/makeup.avif',
    category: 'Skincare',
    categoryColor: 'bg-rose-500',
    readTime: '5 min',
    date: 'May 25, 2026',
    featured: true,
  },
  {
    slug: 'everyday-beauty-essentials',
    title: 'Everyday Beauty Essentials Women Actually Use',
    excerpt: 'We cut through the noise and list the 6 must-have products that simplify your routine and genuinely make a difference.',
    image: '/images/ChatGPT Image Jan 21, 2026, 01_19_34 PM.png',
    category: 'Beauty',
    categoryColor: 'bg-pink-500',
    readTime: '4 min',
    date: 'May 20, 2026',
    featured: false,
  },
  {
    slug: 'best-handbags-2026',
    title: 'The Best Handbags to Invest In For 2026',
    excerpt: 'From structured totes to sleek mini bags — these are the styles that transcend trends and carry your world in style.',
    image: '/images/premium_photo-1681415081271-dc793d3645b8bag.avif',
    category: 'Bags',
    categoryColor: 'bg-amber-500',
    readTime: '6 min',
    date: 'May 15, 2026',
    featured: false,
  },
  {
    slug: 'night-skincare-routine',
    title: 'The Perfect Night Skincare Routine',
    excerpt: 'While you sleep, your skin regenerates. Here is how to maximise that golden window with the right layers and ingredients.',
    image: '/images/premium_photo-1726783553532-2b898b7e2aa0product.avif',
    category: 'Skincare',
    categoryColor: 'bg-purple-500',
    readTime: '7 min',
    date: 'May 10, 2026',
    featured: false,
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Blog() {
  const featured = posts.find(p => p.featured)
  const rest = posts.filter(p => !p.featured)

  return (
    <motion.div key="blog" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      {/* Header */}
      <section className="relative overflow-hidden py-20 px-5">
        <div className="orb w-[500px] h-[500px] bg-pink-500 top-[-200px] left-[-150px]" />
        <div className="orb w-[300px] h-[300px] bg-purple-600 bottom-0 right-0" />
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 glass dark:glass px-4 py-2 rounded-full mb-6">
            <BookOpen size={14} className="text-pink-500" />
            <span className="text-xs font-semibold tracking-widest uppercase text-pink-500">HerDailyFinds Journal</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }}
            className="font-heading text-5xl md:text-6xl font-black mb-5">
            Beauty <span className="text-gradient">Insights</span> &amp; Style
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }}
            className="text-gray-500 dark:text-gray-400 font-light max-w-md mx-auto text-lg">
            Honest guides, skincare secrets, and accessory advice curated for the modern woman.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5 pb-24">
        {/* Featured Post */}
        {featured && (
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="mb-14">
            <Link to={`/blog/${featured.slug}`}>
              <div className="group glass dark:glass rounded-3xl overflow-hidden grid lg:grid-cols-2 hover:glow-pink-sm transition-all duration-500">
                <div className="relative overflow-hidden h-72 lg:h-auto">
                  <motion.img src={featured.image} alt={featured.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }} />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
                  <span className={`absolute top-5 left-5 ${featured.categoryColor} text-white text-[10px] font-bold tracking-widest uppercase py-1.5 px-3 rounded-full`}>
                    {featured.category}
                  </span>
                </div>
                <div className="p-10 flex flex-col justify-center">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-pink-500 mb-3 flex items-center gap-2">
                    <Sparkles size={12} /> Featured Article
                  </span>
                  <h2 className="font-heading text-3xl font-bold mb-4 group-hover:text-pink-500 transition-colors leading-tight">{featured.title}</h2>
                  <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <span className="flex items-center gap-1"><Clock size={12} /> {featured.readTime} read</span>
                      <span>{featured.date}</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-pink-500 group-hover:gap-3 transition-all">
                      Read <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {rest.map((post, i) => (
            <motion.div key={post.slug} variants={cardVariants}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1 }}>
              <Link to={`/blog/${post.slug}`}>
                <motion.article whileHover={{ y: -6 }} transition={{ duration: 0.3 }}
                  className="group glass dark:glass rounded-3xl overflow-hidden flex flex-col h-full hover:glow-pink-sm transition-all duration-400">
                  <div className="relative overflow-hidden h-52">
                    <motion.img src={post.image} alt={post.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.07 }} transition={{ duration: 0.5 }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className={`absolute top-4 left-4 ${post.categoryColor} text-white text-[10px] font-bold tracking-widest uppercase py-1 px-3 rounded-full`}>
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                      <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="font-heading font-bold text-lg mb-2 group-hover:text-pink-500 transition-colors leading-snug flex-1">{post.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-5">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-pink-500 group-hover:gap-3 transition-all">
                      Read more <ArrowRight size={13} />
                    </span>
                  </div>
                </motion.article>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
