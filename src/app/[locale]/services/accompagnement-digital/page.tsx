'use client'

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Page() {
  return (
    <div className="bg-gray-50 text-slate-800">
      {/* Hero */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Accompagnement digital personnalisé
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Faites-vous accompagner dans votre transformation numérique par une équipe dédiée. 
              Stratégie, outils, performance : nous sommes à vos côtés pour chaque étape.
            </p>
            <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">
              Lancer un accompagnement
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <Image
              src="/images/conseil.jpg"
              alt="Accompagnement digital"
              width={600}
              height={400}
              className="rounded-xl shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Étapes */}
      <section className="max-w-7xl mx-auto py-20 px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl font-bold text-center mb-12">Une approche sur mesure</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <Image src="/images/opportunnity.jpg" alt="Écoute" width={200} height={200} className="mb-4 rounded-lg shadow-lg" />
            <h3 className="text-xl font-semibold mb-2">Écoute & diagnostic</h3>
            <p className="text-gray-600">Nous comprenons vos enjeux et établissons un état des lieux précis.</p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <Image src="/images/analyse.jpg" alt="Plan" width={200} height={200} className="mb-4 rounded-lg shadow-lg" />
            <h3 className="text-xl font-semibold mb-2">Plan d&apos;action</h3>
            <p className="text-gray-600">Nous co-construisons un plan adapté à votre structure et vos objectifs.</p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <Image src="/images/partenaire.jpg" alt="Suivi" width={200} height={200} className="mb-4 rounded-lg shadow-lg" />
            <h3 className="text-xl font-semibold mb-2">Suivi & performance</h3>
            <p className="text-gray-600">Un accompagnement continu avec des indicateurs de progrès clairs.</p>
          </motion.div>
        </div>
      </section>
      {/* CTA */}
      <section className=" text-slate-700 font-light py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Envie de faire passer votre structure au digital ?</h2>
        <p className="mb-8 text-lg">Nous sommes prêts à vous guider, à votre rythme et selon vos priorités.</p>
        <Link
          href="/contact"
          className="inline-block bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Discuter avec un conseiller
        </Link>
      </section>
    </div>
  )
}
