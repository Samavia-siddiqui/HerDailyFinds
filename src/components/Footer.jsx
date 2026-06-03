import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-pink-100/30 dark:border-pink-950/30 glass-light dark:glass-dark">
      <div className="max-w-7xl mx-auto px-5 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h3 className="font-heading text-2xl font-extrabold text-gradient mb-3">HerDailyFinds</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-light max-w-xs">
            Curated beauty and handbag essentials for the modern woman. Discover what women actually love.
          </p>
          <div className="flex gap-4 mt-5">
            <a href="#" aria-label="Instagram" className="p-2.5 rounded-full glass dark:glass hover:text-pink-500 hover:glow-pink-sm transition-all">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" aria-label="Pinterest" className="p-2.5 rounded-full glass dark:glass hover:text-pink-500 transition-all flex items-center justify-center">
              <svg viewBox="0 0 16 16" width="18" height="18" fill="currentColor">
                <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-pink-500">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { to: '/', label: 'Home' },
              { to: '/blog', label: 'Blog' },
              { to: '/about', label: 'About Us' },
              { to: '/contact', label: 'Contact' },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="text-sm text-gray-500 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider text-pink-500">Legal</h4>
          <ul className="space-y-2">
            {[
              { to: '/privacy-policy', label: 'Privacy Policy' },
              { to: '/affiliate-disclosure', label: 'Affiliate Disclosure' },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="text-sm text-gray-500 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-gray-400 dark:text-gray-600 leading-relaxed">
            As an Amazon Associate, we earn from qualifying purchases at no extra cost to you.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-pink-100/20 dark:border-pink-950/20 py-5 px-5">
        <p className="text-center text-xs text-gray-400 dark:text-gray-600 flex items-center justify-center gap-1">
          &copy; 2026 HerDailyFinds. Made with <Heart size={12} className="text-pink-500 fill-pink-500" /> for everyday elegance.
        </p>
      </div>
    </footer>
  )
}
