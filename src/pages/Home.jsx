import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Star, ShoppingBag } from 'lucide-react'

// Local product images
const products = [
  {
    id: 1,
    name: 'Matte Velvet Lipstick',
    desc: 'Long-lasting 24hr formula in 40 curated shades. Weightless finish that feels like silk.',
    tag: 'Trending',
    tagColor: 'bg-pink-500',
    price: '$28',
    rating: 4.9,
    image: '/images/premium_photo-1677172236723-43f41d37d509.avif',
  },
  {
    id: 2,
    name: 'Luxe Leather Tote',
    desc: 'Italian-grain leather with gold hardware. The everyday bag that elevates everything.',
    tag: 'Classic',
    tagColor: 'bg-amber-500',
    price: '$185',
    rating: 4.8,
    image: '/images/photo-1713425886176-2c618d1e63cd.avif',
  },
  {
    id: 3,
    name: 'Glow Serum Foundation',
    desc: 'Buildable, skin-like coverage with SPF 30. Glows from within — never cakey.',
    tag: 'Bestseller',
    tagColor: 'bg-rose-500',
    price: '$42',
    rating: 4.9,
    image: '/images/photo-1557205465-f3762edea6d3foundation.avif',
  },
  {
    id: 4,
    name: 'Crystal Evening Clutch',
    desc: 'Hand-embellished rhinestones on satin. For the nights you deserve to sparkle.',
    tag: 'Glamour',
    tagColor: 'bg-purple-500',
    price: '$95',
    rating: 5.0,
    image: '/images/Gold-Envelope-Clutch-Bag-with-Rhinestones-Clutch-Bags-3_2000x.jpg',
  },
  {
    id: 5,
    name: 'Volume Lift Mascara',
    desc: 'Waterproof, buildable black that lifts, curves and adds extreme volume instantly.',
    tag: 'Essential',
    tagColor: 'bg-indigo-500',
    price: '$24',
    rating: 4.7,
    image: '/images/photo-1650793450119-3d608d0a9532mascra.avif',
  },
  {
    id: 6,
    name: 'Canvas Mini Backpack',
    desc: 'Chic structured canvas with leather trim. Goes from brunch to board meetings.',
    tag: 'New In',
    tagColor: 'bg-teal-500',
    price: '$78',
    rating: 4.8,
    image: '/images/premium_photo-1723649902774-4eafa4b42abcbagpack.avif',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

function ProductCard({ product }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative glass dark:glass rounded-3xl overflow-hidden flex flex-col"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-64">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Tag */}
        <span className={`absolute top-4 left-4 ${product.tagColor} text-white text-[10px] font-bold tracking-widest uppercase py-1 px-3 rounded-full`}>
          {product.tag}
        </span>

        {/* Price pill */}
        <span className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs font-bold py-1 px-3 rounded-full">
          {product.price}
        </span>

        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shimmer" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={11} className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} />
          ))}
          <span className="text-xs text-gray-400 ml-1 font-medium">{product.rating}</span>
        </div>
        <h3 className="font-heading font-bold text-lg mb-1.5 group-hover:text-pink-500 transition-colors">{product.name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed flex-1">{product.desc}</p>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="mt-5 w-full py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white text-sm font-semibold transition-all shadow-lg shadow-pink-500/20 hover:shadow-pink-500/30 flex items-center justify-center gap-2"
        >
          <ShoppingBag size={15} />
          View Product
        </motion.button>
      </div>
    </motion.div>
  )
}

export default function Home() {
  return (
    <motion.div
      key="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* BG Orbs */}
        <div className="orb w-[600px] h-[600px] bg-pink-500 top-[-200px] right-[-200px]" />
        <div className="orb w-[400px] h-[400px] bg-rose-400 bottom-[-100px] left-[-100px]" />
        <div className="orb w-[300px] h-[300px] bg-purple-600 top-1/2 left-1/3" />

        <div className="relative max-w-7xl mx-auto px-5 py-24 grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="inline-flex items-center gap-2 glass dark:glass px-4 py-2 rounded-full mb-6"
            >
              <Sparkles size={14} className="text-pink-500" />
              <span className="text-xs font-semibold tracking-widest uppercase text-pink-500">Curated Luxury Finds</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6"
            >
              Everyday Finds <br />
              <span className="text-gradient">Women Actually</span>
              <br />Love
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="text-lg text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-10 max-w-md"
            >
              Handpicked beauty essentials and chic handbag collections — curated to elevate your daily style effortlessly.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="#featured"
                onClick={e => { e.preventDefault(); document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white font-semibold shadow-2xl shadow-pink-500/30 transition-all hover:shadow-pink-500/50"
              >
                Explore Finds
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass dark:glass border border-pink-200/30 dark:border-pink-800/30 font-semibold hover:text-pink-500 transition-all"
              >
                Read Blog
              </Link>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4 mt-10"
            >
              <div className="flex -space-x-2">
                {['https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop',
                  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop',
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=50&h=50&fit=crop'].map((src, i) => (
                  <img key={i} src={src} alt="" className="w-9 h-9 rounded-full border-2 border-white dark:border-darkBg object-cover" />
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Loved by 10k+ women</p>
              </div>
            </motion.div>
          </div>

          {/* Hero Image Collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full h-[520px]">
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-0 right-10 w-60 h-72 rounded-3xl overflow-hidden shadow-2xl glow-pink"
              >
                <img src="/images/premium_photo-1726783553532-2b898b7e2aa0product.avif" alt="Beauty" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute bottom-0 left-0 w-52 h-64 rounded-3xl overflow-hidden shadow-2xl"
              >
                <img src="/images/premium_photo-1681415081271-dc793d3645b8bag.avif" alt="Bags" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-16 right-0 w-44 h-52 rounded-3xl overflow-hidden shadow-xl"
              >
                <img src="/images/makeup.avif" alt="Makeup" className="w-full h-full object-cover" />
              </motion.div>
              {/* Floating card */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                className="absolute top-16 left-4 glass dark:glass px-4 py-3 rounded-2xl shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-rose-400 flex items-center justify-center">
                    <Sparkles size={14} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold">New Arrivals</p>
                    <p className="text-[10px] text-gray-400">Updated daily</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Featured Products ── */}
      <section id="featured" className="max-w-7xl mx-auto px-5 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-pink-500 mb-3">
            <Sparkles size={12} /> Featured Finds
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Hand-Picked <span className="text-gradient">For You</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-light max-w-sm mx-auto">
            Top-rated essentials that real women swear by — beauty and bags that fit every lifestyle.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </motion.div>
      </section>

      {/* ── Blog Teaser ── */}
      <section className="max-w-7xl mx-auto px-5 py-16 mb-8">
        <div className="glass dark:glass rounded-3xl overflow-hidden grid lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-10 md:p-14 flex flex-col justify-center"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-pink-500 mb-4">From The Blog</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5 leading-tight">
              Everyday Beauty Essentials <span className="text-gradient">Women Actually Use</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-8">
              Discover the must-have products that simplify your morning routine and enhance your natural glow — no fuss, just results.
            </p>
            <Link
              to="/blog"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white font-semibold text-sm shadow-lg shadow-pink-500/20 transition-all w-fit"
            >
              Read Article
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-72 lg:h-auto overflow-hidden"
          >
            <img
              src="/images/ChatGPT Image Jan 21, 2026, 01_22_59 PM.png"
              alt="Beauty essentials"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/10" />
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
