'use client'

import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import {Link} from '@/i18n/navigation';
import { useTranslations } from "next-intl";

function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Logo & Socials */}
        <div className="flex flex-col items-center md:items-start gap-6 w-full md:w-1/4">
          <div>
            <h2 className="text-4xl font-bold text-slate-800">ēdev</h2>
          </div>
          <div className="flex gap-4 text-2xl text-slate-700">
            <a href="#" aria-label="GitHub" className="hover:text-black"><FaGithub /></a>
            <a href="#" aria-label="Facebook" className="hover:text-blue-600"><FaFacebook /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-800"><FaLinkedin /></a>
            <a href="#" aria-label="X (Twitter)" className="hover:text-black"><FaSquareXTwitter /></a>
          </div>
        </div>

        {/* Center: Links */}
        <div className="flex flex-1 justify-center gap-12">
          <div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">{t("produits")}</h3>
            <ul className="space-y-2 text-slate-700 text-base">
              <li><Link href="/formation">{t("links.formation")}</Link></li>
              <li><Link href="/services">{t("links.uiux")}</Link></li>
              <li><Link href="/services">{t("links.software")}</Link></li>
              <li><Link href="/services">{t("links.db")}</Link></li>
              <li><Link href="/services">{t("links.social")}</Link></li>
              <li><Link href="/services">{t("links.consulting")}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">{t("solutions")}</h3>
            <ul className="space-y-2 text-slate-700 text-base">
              <li><Link href="/formation">{t("links.etudiant")}</Link></li>
              <li><a href="#">{t("links.business")}</a></li>
              <li><a href="#">{t("links.entrepreneur")}</a></li>
              <li><a href="#">{t("links.institution")}</a></li>
              <li><a href="#">{t("links.salarié")}</a></li>
            </ul>
          </div>
        </div>

        {/* Right: Ressources & Company */}
        <div className="flex flex-1 justify-center gap-12">
          <div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">{t("ressources")}</h3>
            <ul className="space-y-2 text-slate-700 text-base">
              <li><a href="#">{t("links.guide")}</a></li>
              <li><Link href="/blog">{t("links.blog")}</Link></li>
              <li><Link href="/projet">{t("links.projet")}</Link></li>
              <li><a href="#">{t("links.doc")}</a></li>
              <li><Link href="/contact">{t("links.contact")}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">{t("compagnie")}</h3>
            <ul className="space-y-2 text-slate-700 text-base">
              <li><Link href="/about">{t("links.about")}</Link></li>
              <li><a href="#">{t("links.Carrière")}</a></li>
              <li><Link href="/contact">{t("links.partenaire")}</Link></li>
              <li><Link href="#">{t("links.legal")}</Link></li>
              <li><a href="#">{t("links.privacy")}</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-sm text-gray-500">
           {t('copyright', { year })}
      </div>
    </footer>
  );
}

export default Footer;