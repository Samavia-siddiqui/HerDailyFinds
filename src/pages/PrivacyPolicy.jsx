import { motion } from 'framer-motion'
import { ShieldCheck, Eye, Lock, FileText, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  return (
    <motion.div
      key="privacy-policy"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section className="relative overflow-hidden py-24 px-5">
        {/* Background Gradient Orbs */}
        <div className="orb w-[500px] h-[500px] bg-pink-500 top-[-200px] right-[-200px]" />
        <div className="orb w-[400px] h-[400px] bg-purple-600 bottom-[-100px] left-[-150px]" />

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
              <ShieldCheck size={12} /> Compliance & Trust
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
              Your trust is our priority. We are committed to transparency and safeguarding your personal data when you visit HerDailyFinds.
            </p>
          </motion.div>

          {/* Policy Card Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="glass dark:glass p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden noise"
          >
            <div className="space-y-12">
              {/* Introduction */}
              <div>
                <h2 className="font-heading text-2xl font-bold mb-4 flex items-center gap-2.5 text-pink-500">
                  <FileText size={20} /> 1. Introduction
                </h2>
                <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed text-sm md:text-base">
                  Welcome to HerDailyFinds ("we," "our," "us"). We respect your privacy and want you to understand how we collect, use, and share your personal information. This Privacy Policy applies to our website and any other services we provide. By using our website, you consent to the data practices described in this statement.
                </p>
              </div>

              {/* Information We Collect */}
              <div>
                <h2 className="font-heading text-2xl font-bold mb-4 flex items-center gap-2.5 text-pink-500">
                  <Eye size={20} /> 2. Information We Collect
                </h2>
                <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed text-sm md:text-base mb-4">
                  We collect information to provide a better browsing experience. This includes:
                </p>
                <ul className="list-none space-y-3 pl-1 text-sm md:text-base text-gray-500 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0" />
                    <span><strong>Personal Information:</strong> When you subscribe to our newsletter or contact us via our contact form, you may provide your name and email address.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0" />
                    <span><strong>Usage Data:</strong> We automatically collect pageviews, duration, device details, and approximate location using analytical cookies to optimize content distribution.</span>
                  </li>
                </ul>
              </div>

              {/* How We Use Your Information */}
              <div>
                <h2 className="font-heading text-2xl font-bold mb-4 flex items-center gap-2.5 text-pink-500">
                  <Lock size={20} /> 3. How We Use Your Information
                </h2>
                <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed text-sm md:text-base mb-4">
                  We process personal data for various business purposes, including:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-5 bg-white/30 dark:bg-white/5 rounded-2xl border border-pink-100/10">
                    <h3 className="font-heading font-semibold text-base mb-2">Enhance Content</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                      Tailoring our handbag guides, beauty product lists, and reviews to match user preferences.
                    </p>
                  </div>
                  <div className="p-5 bg-white/30 dark:bg-white/5 rounded-2xl border border-pink-100/10">
                    <h3 className="font-heading font-semibold text-base mb-2">Communication</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-light leading-relaxed">
                      Answering customer inquiries, providing support, and sending optional newsletter updates.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cookies & Tracking */}
              <div>
                <h2 className="font-heading text-2xl font-bold mb-4 flex items-center gap-2.5 text-pink-500">
                  <ShieldCheck size={20} /> 4. Cookies & Trackers
                </h2>
                <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed text-sm md:text-base">
                  HerDailyFinds uses cookies to maintain website sessions and monitor outbound affiliate links. Cookies are tiny text files stored in your web browser. You have the ability to accept or decline cookies directly inside your browser configurations. Disabling cookies might limit some interactive aspects of the site.
                </p>
              </div>

              {/* Third-Party Links */}
              <div>
                <h2 className="font-heading text-2xl font-bold mb-4 flex items-center gap-2.5 text-pink-500">
                  <FileText size={20} /> 5. Third-Party & Affiliate Links
                </h2>
                <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed text-sm md:text-base">
                  Our site links out to external online stores (such as Amazon and Sephora) as part of our affiliate program. We are not responsible for the privacy practices of external web assets. We encourage you to review their individual privacy statements when buying products.
                </p>
              </div>

              {/* Contact Us */}
              <div className="pt-6 border-t border-pink-100/20 dark:border-pink-950/20 text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400 font-light mb-4">
                  Have questions about this Privacy Policy? Get in touch with us.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white text-xs font-semibold shadow-lg shadow-pink-500/25 transition-all"
                >
                  Contact Page
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
