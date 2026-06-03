import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, Eye, Shield, Sparkles } from 'lucide-react'

const values = [
  { icon: Heart, title: 'Curated With Love', desc: 'Every product is hand-selected. We test, research, and only recommend what we truly believe in.', color: 'from-pink-500 to-rose-400' },
  { icon: Eye, title: 'Honest Reviews', desc: 'No paid placements, no inflated ratings. Our voice is our readers\' voice — always transparent.', color: 'from-purple-500 to-indigo-400' },
  { icon: Shield, title: 'Trust First', desc: 'We disclose all affiliate relationships and prioritise your trust above every commission.', color: 'from-amber-500 to-orange-400' },
  { icon: Sparkles, title: 'Everyday Luxury', desc: 'Premium doesn\'t have to mean unaffordable. We find the sweet spot between quality and value.', color: 'from-teal-500 to-emerald-400' },
]

export default function About() {
  return (
    <motion.div key="about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 px-5">
        <div className="orb w-[500px] h-[500px] bg-pink-500 top-[-150px] right-[-200px]" />
        <div className="orb w-[350px] h-[350px] bg-purple-600 bottom-0 left-0" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass dark:glass px-4 py-2 rounded-full mb-6 text-xs font-bold tracking-widest uppercase text-pink-500">
            <Sparkles size={12} /> Our Story
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }}
            className="font-heading text-5xl md:text-6xl font-black mb-6">
            About <span className="text-gradient">HerDailyFinds</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }}
            className="text-xl text-gray-500 dark:text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
            We believe every woman deserves access to beauty and style that is honest, curated, and genuinely worth her time.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-5 pb-16">
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden h-96 glow-pink shadow-2xl">
                <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&q=80" alt="About HerDailyFinds" className="w-full h-full object-cover" />
              </div>
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -right-6 glass dark:glass p-5 rounded-2xl shadow-xl">
                <p className="font-heading font-bold text-2xl text-gradient">10k+</p>
                <p className="text-xs text-gray-400 font-medium">Happy Readers</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className="text-xs font-bold tracking-widest uppercase text-pink-500 mb-4">Who We Are</p>
            <h2 className="font-heading text-4xl font-bold mb-6 leading-tight">Empowering Women Through Honest Curation</h2>
            <div className="space-y-5 text-gray-500 dark:text-gray-400 font-light leading-relaxed">
              <p>At HerDailyFinds, we started with a simple frustration: too much noise, too many sponsored posts, and not enough genuine recommendations women could actually trust.</p>
              <p>We focus on lifestyle curation — helping you discover beauty and handbag essentials that fit seamlessly into your real daily routine. Whether it's finding the perfect long-lasting lipstick or a versatile tote for work and weekends, we prioritise what real women love and actually use.</p>
              <p>Trust is at our absolute core. We share honest insights, disclose every affiliate relationship, and always put your experience before any commission.</p>
            </div>
            <div className="flex gap-4 mt-8">
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 text-white font-semibold text-sm shadow-lg shadow-pink-500/20">
                Get In Touch
              </Link>
              <Link to="/blog" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass dark:glass font-semibold text-sm hover:text-pink-500 transition-colors">
                Read Blog
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="text-center mb-12">
          <h2 className="font-heading text-4xl font-bold mb-3">What We Stand For</h2>
          <p className="text-gray-500 dark:text-gray-400 font-light">The principles that guide every recommendation we make.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(({ icon: Icon, title, desc, color }, i) => (
            <motion.div key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="glass dark:glass p-7 rounded-3xl text-center flex flex-col items-center group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={24} className="text-white" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">{title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  )
}
