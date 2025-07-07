'use client'

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Page() {
  return (
    <div className="bg-gray-50 text-slate-800">
      {/* Hero */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Conception de logiciels sur mesure
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Nous transformons vos idées en solutions logicielles puissantes et évolutives. 
              De l&apos;analyse à la mise en production, notre équipe vous accompagne à chaque étape.
            </p>
            <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">
              Discuter de votre projet
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <Image
              src="/images/developer.jpg"
              alt="Développement logiciel"
              width={600}
              height={400}
              className="rounded-xl shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Avantages */}
      <section className="max-w-7xl mx-auto py-20 px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl font-bold text-center mb-12">Notre approche</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <Image src="/images/analyse.jpg" alt="Analyse" width={200} height={200} className="mb-4 rounded-lg shadow-xl" />
            <h3 className="text-xl font-semibold mb-2">Analyse & conception</h3>
            <p className="text-gray-600">Étude détaillée de vos besoins et modélisation de la solution optimale.</p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <Image src="/images/agile.jpg" alt="Développement" width={200} height={200} className="mb-4 rounded-lg shadow-xl" />
            <h3 className="text-xl font-semibold mb-2">Développement agile</h3>
            <p className="text-gray-600">Livraison rapide et itérative pour maximiser la valeur à chaque étape.</p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <Image src="/images/support.jpg" alt="Support" width={200} height={200} className="mb-4 rounded-lg shadow-xl" />
            <h3 className="text-xl font-semibold mb-2">Maintenance & support</h3>
            <p className="text-gray-600">Assistance continue et mises à jour pour garantir performance et sécurité.</p>
          </motion.div>
        </div>
      </section>

      {/* Call to action */}
      <section className=" text-slate-700 font-light py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Vous avez une idée de logiciel ?</h2>
        <p className="mb-8 text-lg">Nous vous aidons à la concrétiser avec des outils fiables, performants et adaptés à vos besoins.</p>
        <Link
          href="/contact"
          className="inline-block bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Contactez notre équipe
        </Link>
      </section>
    </div>
  )
}
