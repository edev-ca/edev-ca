'use client'

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function Page() {
  return (
    <div className="bg-gray-50 text-slate-800">
      {/* Hero */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            À propos de ēdev
          </motion.h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ēdev est une startup tech sociale basée à Bangui, en République Centrafricaine. Nous concevons des solutions numériques sur mesure pour accompagner la transformation digitale des entreprises, institutions et organisations locales.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Notre mission</h2>
            <p className="text-gray-600 text-lg">
              Utiliser la technologie comme levier de changement pour résoudre les défis locaux, réduire la fracture numérique, former une nouvelle génération d&apos;acteurs du numérique et créer de la valeur durable.
            </p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Notre vision</h2>
            <p className="text-gray-600 text-lg">
              Bâtir un écosystème digital solide en Afrique centrale, où la jeunesse et les entreprises locales ont les outils pour s’épanouir dans une économie connectée, inclusive et durable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map & contact */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Nous contacter</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <Mail className="w-10 h-10 text-gray-600" />
                <span><strong>Email :</strong> contact@edev-ca.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-10 h-10 text-gray-600" />
                <span><strong>Téléphone :</strong> +236 72 35 39 61</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-10 h-10 text-gray-600" />
                <span><strong>Adresse :</strong> Centre-ville, Bangui, République Centrafricaine</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-10 h-10  text-gray-600 " />
                <span><strong>Horaires :</strong> Lun - Ven : 24h/7j</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full h-96 rounded-xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.916359215373!2d18.562734075804276!3d4.361343545776146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a62df28f6a3a315%3A0x4aaf4c8d9ff27f86!2sBangui%2C%20Central%20African%20Republic!5e0!3m2!1sen!2s!4v1688392938817!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="emap"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  )
}