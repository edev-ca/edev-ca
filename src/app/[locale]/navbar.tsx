
'use client'
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import logo from "../../../public/images/edev.webp" 
import { motion, AnimatePresence } from 'framer-motion'
import { FaChalkboardTeacher, FaCogs, FaUserTie, FaLaptopCode} from "react-icons/fa"


const services = [
  {
    title: 'Consulting',
    description: 'Stratégie digitale et conseils personnalisés.',
    href: '/services/consulting',
    icon: <FaUserTie className="text-gray-600 w-5 h-5" />
  },
  {
    title: 'Conception logiciel',
    description: 'Développement de logiciels sur mesure.',
    href: '/services/conception-logiciel',
    icon: <FaCogs className="text-gray-600 w-5 h-5" />
  },
  {
    title: 'Formation',
    description: 'Formations techniques pour tous les niveaux.',
    href: '/formation',
    icon: <FaChalkboardTeacher className="text-gray-600 w-5 h-5" />
  },
  {
    title: 'Accompagnement digital',
    description: 'Soutien dans la transformation numérique.',
    href: '/services/accompagnement-digital',
    icon: <FaLaptopCode className="text-gray-600 w-5 h-5" />
  }
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const currentLocale = pathname.split('/')[1] === 'fr' ? 'fr' : 'en'
  const otherLocale = currentLocale === 'fr' ? 'en' : 'fr'

  const switchLocalePath = () => {
    const segments = pathname.split('/')
    segments[1] = otherLocale
    return segments.join('/') || '/'
  }

  const handleLocaleSwitch = () => {
    router.push(switchLocalePath())
    setMenuOpen(false)
  }

  const isActive = (href: string) => {
    const current = pathname.replace(/^\/(fr|en)/, '')
    const target = href.replace(/^\/(fr|en)/, '')
    return current === target
  }

  return (
    <nav className="bg-gray-50 border-b border-gray-200 py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-slate-800 flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="ēdev Logo"
              width={40}
              height={40}
              className="inline-block mr-2 rounded-full"
            />
            ēdev
          </Link>
        </div>

        {/* Mobile button */}
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded text-slate-700 border-slate-400"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 text-slate-700 text-lg items-center">
          <li>
            <Link href="/formation" className={`hover:text-slate-900 ${isActive('/formation') ? 'text-blue-600' : ''}`}>Formation</Link>
          </li>

          {/* Dropdown Services */}
          <li className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="hover:text-slate-900 font-medium flex items-center gap-1 focus:outline-none"
            >
              Services
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.25 }}
                  className="absolute z-50 top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-xl p-4"
                >
                  <ul className="space-y-2">
                    {services.map((service) => (
                      <motion.li
                        key={service.title}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 }}
                      >
                        <Link
                          href={service.href}
                          className="flex items-start gap-3 hover:bg-gray-50 p-3 rounded-md transition"
                          onClick={() => setServicesOpen(false)}
                        >
                          {service.icon}
                          <div>
                            <h4 className="text-sm font-semibold text-slate-800">{service.title}</h4>
                            <p className="text-sm text-gray-500">{service.description}</p>
                          </div>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          <li>
            <Link href="/projet" aria-disabled="true" className="text-gray-400 pointer-events-none cursor-not-allowed">Projet</Link>
          </li>
          <li>
            <Link href="/about" aria-disabled="true" className="text-gray-400 pointer-events-none cursor-not-allowed">A propos</Link>
          </li>
        </ul>

        {/* Right block */}
        <div className="hidden md:flex items-center space-x-4 text-lg">
          <Link href="/contact" className={`bg-blue-600 text-white px-4 py-2 rounded ${isActive('/contact') ? 'ring-2 ring-blue-600' : ''}`}>Contactez-nous</Link>
          <button
            onClick={handleLocaleSwitch}
            className="ml-2 px-3 py-1 border border-slate-400 rounded text-slate-700 hover:bg-slate-100"
            aria-label="Switch language"
          >
            {otherLocale.toUpperCase()}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 text-lg">
          <ul className="flex flex-col space-y-2 text-slate-700 w-full">
            <li><Link href="/formation" onClick={() => setMenuOpen(false)}>Formation</Link></li>

            {/* Mobile services dropdown */}
            <details className="w-full">
              <summary className="cursor-pointer py-2 px-4 text-left w-full">Services</summary>
              <ul className="px-4 py-2">
                {services.map((service) => (
                  <li key={service.title}>
                    <Link href={service.href} onClick={() => setMenuOpen(false)} className="block py-1 text-sm text-gray-700">
                      <div className="flex items-start gap-2">
                        {service.icon}
                        <div>
                          <strong>{service.title}</strong><br />
                          <span className="text-xs text-gray-500">{service.description}</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </details>

            <li><Link href="/projet" className="pointer-events-none text-gray-400">Projet</Link></li>
            <li><Link href="/about" className="pointer-events-none text-gray-400">A propos</Link></li>
            <li><Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded text-center">Contactez-nous</Link></li>
          </ul>
          <button
            onClick={handleLocaleSwitch}
            className="mt-4 px-3 py-1 border border-slate-400 rounded text-slate-700 hover:bg-slate-100"
          >
            {otherLocale.toUpperCase()}
          </button>
        </div>
      )}
    </nav>
  )
}