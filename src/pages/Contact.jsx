import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MessageSquare, Send, Sparkles, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <motion.div key="contact" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <section className="relative overflow-hidden py-24 px-5">
        <div className="orb w-[500px] h-[500px] bg-rose-500 top-[-200px] left-[-200px]" />
        <div className="orb w-[400px] h-[400px] bg-pink-600 bottom-[-100px] right-[-150px]" />

        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 glass dark:glass px-4 py-2 rounded-full mb-6 text-xs font-bold tracking-widest uppercase text-pink-500">
              <MessageSquare size={12} /> Get In Touch
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-black mb-6 leading-tight">
              Let's <span className="text-gradient">Talk</span>
            </h1>
            <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed text-lg mb-10">
              Have a question, suggestion, or just want to say hello? We'd love to hear from you. Drop us a message and we'll get back within 24 hours.
            </p>

            <div className="space-y-5">
              {[
                { icon: Mail, title: 'Email Us', value: 'hello@herdailyfinds.com', color: 'from-pink-500 to-rose-400' },
                { icon: Sparkles, title: 'Collab & PR', value: 'partnerships@herdailyfinds.com', color: 'from-purple-500 to-indigo-400' },
              ].map(({ icon: Icon, title, value, color }) => (
                <div key={title} className="flex items-center gap-4 glass dark:glass p-4 rounded-2xl">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shrink-0`}>
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{title}</p>
                    <p className="text-sm font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative image */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="mt-12 rounded-3xl overflow-hidden h-52 shadow-2xl glow-pink-sm hidden lg:block"
            >
              <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80" alt="Beauty" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>

          {/* Right Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.7 }}>
            <div className="glass dark:glass p-8 md:p-10 rounded-3xl shadow-2xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 to-rose-400 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-pink-500/30"
                  >
                    <CheckCircle2 size={36} className="text-white" />
                  </motion.div>
                  <h3 className="font-heading text-2xl font-bold mb-3">Message Sent!</h3>
                  <p className="text-gray-500 dark:text-gray-400 font-light">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <>
                  <h2 className="font-heading text-2xl font-bold mb-7">Send a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {[
                      { id: 'name', label: 'Your Name', type: 'text', placeholder: 'Jane Doe' },
                      { id: 'email', label: 'Email Address', type: 'email', placeholder: 'jane@example.com' },
                    ].map(({ id, label, type, placeholder }) => (
                      <div key={id}>
                        <label htmlFor={id} className="block text-sm font-semibold mb-2">{label}</label>
                        <input
                          id={id}
                          type={type}
                          required
                          placeholder={placeholder}
                          value={form[id]}
                          onChange={e => setForm({ ...form, [id]: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-white/50 dark:bg-white/5 border border-pink-100 dark:border-pink-950/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all placeholder-gray-400 text-sm"
                        />
                      </div>
                    ))}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        placeholder="Tell us what's on your mind..."
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-white/50 dark:bg-white/5 border border-pink-100 dark:border-pink-950/50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all placeholder-gray-400 text-sm resize-none"
                      />
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white font-semibold flex items-center justify-center gap-2 shadow-xl shadow-pink-500/25 transition-all"
                    >
                      <Send size={16} /> Send Message
                    </motion.button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
