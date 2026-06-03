import { motion } from 'framer-motion'
import { Sparkles, DollarSign, Award, HelpCircle, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function AffiliateDisclosure() {
  return (
    <motion.div
      key="affiliate-disclosure"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section className="relative overflow-hidden py-24 px-5">
        {/* Background Gradient Orbs */}
        <div className="orb w-[500px] h-[500px] bg-pink-500 top-[-250px] left-[-200px]" />
        <div className="orb w-[450px] h-[450px] bg-amber-400 bottom-[-150px] right-[-150px]" />

        <div className="relative max-w-4xl mx-auto">
          {/* Back button */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-pink-500 transition-colors"
            >
              <ArrowLeft size={16} /> Back to Home
            </Link>
          </div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 glass dark:glass px-4 py-2 rounded-full mb-6 text-xs font-bold tracking-widest uppercase text-pink-500">
              <Sparkles size={12} /> Transparency First
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Affiliate <span className="text-gradient">Disclosure</span>
            </h1>
            <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
              How we support this site and maintain our editorial integrity. Honest reviews, no extra costs for you.
            </p>
          </motion.div>

          {/* Disclosure Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="glass dark:glass p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden noise"
          >
            <div className="space-y-10">
              {/* Introduction Quote */}
              <blockquote className="border-l-4 border-pink-500 pl-4 py-1.5 italic text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                "We believe in honest recommendations. We only feature products we truly love or have thoroughly researched, and we want to be completely open about how we run this platform."
              </blockquote>

              {/* What is an Affiliate Link */}
              <div>
                <h2 className="font-heading text-2xl font-bold mb-4 flex items-center gap-2.5 text-pink-500">
                  <HelpCircle size={20} /> What is an Affiliate Link?
                </h2>
                <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed text-sm md:text-base">
                  Throughout HerDailyFinds, we write reviews and curate recommendations for beauty items, cosmetics, skincare, and designer or everyday handbags. Some of the links pointing to these products are affiliate links. When you click one of these links and buy a product, we earn a small referral commission. This commission comes at <strong>zero extra cost</strong> to you.
                </p>
              </div>

              {/* Programs We Participate In */}
              <div>
                <h2 className="font-heading text-2xl font-bold mb-4 flex items-center gap-2.5 text-pink-500">
                  <DollarSign size={20} /> Partner Programs
                </h2>
                <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed text-sm md:text-base mb-4">
                  We are proud participants in several digital partner channels:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-5 bg-white/30 dark:bg-white/5 rounded-2xl border border-pink-100/10">
                    <span className="text-xs font-bold text-pink-500 uppercase tracking-widest block mb-1">Amazon Associates</span>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                      As an Amazon Associate, we earn from qualifying purchases when you click out to Amazon.com.
                    </p>
                  </div>
                  <div className="p-5 bg-white/30 dark:bg-white/5 rounded-2xl border border-pink-100/10">
                    <span className="text-xs font-bold text-pink-500 uppercase tracking-widest block mb-1">Beauty Networks</span>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                      We partner with skincare, cosmetic, and brand affiliate platforms to deliver high quality discount links.
                    </p>
                  </div>
                </div>
              </div>

              {/* Editorial Standards */}
              <div>
                <h2 className="font-heading text-2xl font-bold mb-4 flex items-center gap-2.5 text-pink-500">
                  <Award size={20} /> Integrity & Quality
                </h2>
                <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed text-sm md:text-base">
                  Our partnerships do not dictate our editorial opinions. We never receive direct compensation to list a bad product in a positive light. Every handbag comparison, lipstick review, and lifestyle round-up represents our honest evaluation.
                </p>
              </div>

              {/* Call to Action */}
              <div className="pt-6 border-t border-pink-100/20 dark:border-pink-950/20 text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400 font-light mb-4">
                  If you have any further questions or inquiries, please contact us.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white text-xs font-semibold shadow-lg shadow-pink-500/25 transition-all"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
