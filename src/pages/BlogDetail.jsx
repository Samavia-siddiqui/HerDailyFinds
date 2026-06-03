import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Clock, Calendar, CheckCircle2 } from 'lucide-react'

export default function BlogDetail() {
  return (
    <motion.div key="blog-detail" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      {/* Back */}
      <div className="max-w-4xl mx-auto px-5 pt-10">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-pink-500 transition-colors font-medium mb-8">
          <ArrowLeft size={16} /> Back to Blog
        </Link>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto px-5 mb-10"
      >
        <div className="rounded-3xl overflow-hidden h-[420px] shadow-2xl glow-pink">
          <img
            src="/images/makeup.avif"
            alt="Minimal beauty routine"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Article */}
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="max-w-3xl mx-auto px-5 pb-24"
      >
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className="bg-rose-500 text-white text-[10px] font-bold tracking-widest uppercase py-1.5 px-3 rounded-full">Skincare</span>
          <span className="flex items-center gap-1.5 text-sm text-gray-400"><Clock size={14} /> 5 min read</span>
          <span className="flex items-center gap-1.5 text-sm text-gray-400"><Calendar size={14} /> May 25, 2026</span>
        </div>

        <h1 className="font-heading text-4xl md:text-5xl font-black mb-6 leading-tight">
          Minimal Daily Beauty Routine <span className="text-gradient">for Women</span>
        </h1>
        <p className="text-sm text-gray-400 italic mb-10 border-l-4 border-pink-500 pl-4">
          By HerDailyFinds — A curated guide for the modern woman who values simplicity without sacrificing glow.
        </p>

        {/* Content */}
        <div className="space-y-8 text-gray-600 dark:text-gray-300 font-light leading-relaxed text-[16.5px]">
          <p>
            A daily beauty routine doesn't need to be complicated, expensive, or time-consuming. With a few intentional steps, you can maintain healthy, radiant skin and a clean, natural aesthetic every single day — even on the busiest mornings.
          </p>

          <div className="glass dark:glass rounded-2xl p-6 border-l-4 border-pink-500">
            <p className="text-base font-medium text-gray-800 dark:text-gray-100 italic">
              "Consistency and quality over quantity. The best routine is the one you actually do every day."
            </p>
          </div>

          {/* Step 1 */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-rose-400 text-white text-sm font-bold flex items-center justify-center">1</span>
              Gentle Skincare Basics
            </h2>
            <p className="mb-4">
              Start your morning with a gentle, pH-balanced cleanser suited for your skin type. Follow with a lightweight, hydrating moisturiser and a broad-spectrum SPF 30+ sunscreen. This trio takes under 3 minutes and is the single most impactful step for long-term skin health.
            </p>
            <ul className="space-y-3">
              {['Gentle foam or gel cleanser', 'Hyaluronic acid serum for hydration', 'SPF moisturiser (non-negotiable!)', 'Niacinamide for pore-minimising and glow'].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-pink-500 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hero product image */}
          <div className="rounded-2xl overflow-hidden h-64 shadow-xl">
            <img src="/images/photo-1557205465-f3762edea6d3foundation.avif" alt="Skincare products" className="w-full h-full object-cover" />
          </div>

          {/* Step 2 */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-rose-400 text-white text-sm font-bold flex items-center justify-center">2</span>
              Minimal Makeup Essentials
            </h2>
            <p className="mb-4">
              Less truly is more. Focus on light, skin-like coverage with a BB cream or tinted moisturiser rather than full-coverage foundation. Define your brows naturally, add a swipe of mascara, and finish with a sheer lipstick or balm tint for an effortlessly polished look.
            </p>
          </div>

          {/* Step 3 */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-rose-400 text-white text-sm font-bold flex items-center justify-center">3</span>
              Everyday Self-Care Habits
            </h2>
            <p>
              True radiance is an inside job. Drink at least 8 glasses of water daily, prioritise 7–8 hours of sleep, and incorporate at least 20 minutes of movement. These habits compound over time and no serum can replicate their effects.
            </p>
          </div>

          {/* CTA Box */}
          <div className="bg-gradient-to-br from-pink-500/10 to-rose-400/10 dark:from-pink-950/30 dark:to-rose-950/20 rounded-2xl p-7 border border-pink-200/30 dark:border-pink-800/20 text-center">
            <p className="font-heading font-bold text-lg mb-2 text-pink-500">Ready to shop the routine?</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">We've hand-picked every product mentioned in this guide.</p>
            <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 text-white font-semibold text-sm shadow-lg shadow-pink-500/20">
              View All Finds
            </Link>
          </div>
        </div>
      </motion.article>
    </motion.div>
  )
}
