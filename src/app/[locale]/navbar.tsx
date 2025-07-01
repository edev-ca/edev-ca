// ...imports and other code...
'use client'

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import logo from "../../../public/images/edev.webp" 

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
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

  // Helper to check if a link is active
  const isActive = (href: string) => {
    // Normalize both paths for comparison
    const current = pathname.replace(/^\/(fr|en)/, '')
    const target = href.replace(/^\/(fr|en)/, '')
    return current === target
  }

  return (
    <nav>
      <div className="bg-gray-50 border-b border-gray-200 py-4 px-6">
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
          {/*button for mobile */}
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
          <ul className="hidden md:flex space-x-6 text-slate-700 text-lg">
            <li>
              <Link
                href="/formation"
                aria-disabled="true"
                className={`hover:text-slate-900 ${isActive('/formation') ? 'text-blue-600' : ''}`}
              >
                Formation
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                aria-disabled="true"
                className={`hover:text-slate-900 pointer-events-none cursor-not-allowed text-gray-400 ${isActive('/services') ? 'text-blue-600' : ''}`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/projet"
                aria-disabled="true"
                className={`hover:text-slate-900 pointer-events-none cursor-not-allowed text-gray-400 ${isActive('/projet') ? 'text-blue-600' : ''}`}
              >
                Projet
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                aria-disabled="true"
                className={`hover:text-slate-900 pointer-events-none cursor-not-allowed text-gray-400 ${isActive('/about') ? 'text-blue-600' : ''}`}
              >
                A propos
              </Link>
            </li>
          </ul>
          <div className="hidden md:flex items-center space-x-4 text-lg">
            <Link
              href="/blog"
              aria-disabled="true"
              className={`hover:text-slate-900 pointer-events-none cursor-not-allowed text-gray-400 ${isActive('/blog') ? 'text-blue-600' : ''}`}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              aria-disabled="true"
              className={`bg-blue-600 text-white px-4 py-2 rounded pointer-events-none cursor-not-allowed ${isActive('/contact') ? 'ring-2 ring-blue-600' : ''}`}
            >
              Contactez-nous
            </Link>
            <button
              onClick={handleLocaleSwitch}
              className="ml-4 px-3 py-1 border border-slate-400 rounded text-slate-700 hover:bg-slate-100"
              aria-label="Switch language"
            >
              {otherLocale.toUpperCase()}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center mt-4 text-lg">
            <ul className="flex flex-col space-y-2 text-slate-700">
              <li>
                <Link
                  href="/formation"
                  className={`hover:text-slate-900 ${isActive('/formation') ? 'text-blue-600' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  Formation
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  aria-disabled="true"
                  className={`hover:text-slate-900 pointer-events-none cursor-not-allowed text-gray-400 ${isActive('/services') ? 'text-blue-600' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projet"
                  aria-disabled="true"
                  className={`hover:text-slate-900 pointer-events-none cursor-not-allowed ${isActive('/projet') ? 'text-blue-600' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  Projet
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  aria-disabled="true"
                  className={`hover:text-slate-900 pointer-events-none cursor-not-allowed ${isActive('/about') ? 'text-blue-600' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  A propos
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  aria-disabled="true"
                  className={`hover:text-slate-900 pointer-events-none cursor-not-allowed ${isActive('/blog') ? 'text-blue-600' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`bg-blue-600 text-white px-4 py-2 rounded block text-center ${isActive('/contact') ? 'ring-2 ring-blue-600' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  Contactez-nous
                </Link>
              </li>
            </ul>
            <button
              onClick={handleLocaleSwitch}
              className="mt-4 px-3 py-1 border border-slate-400 rounded text-slate-700 hover:bg-slate-100"
              aria-label="Switch language"
            >
              {otherLocale.toUpperCase()}
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
