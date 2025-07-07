'use client'

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaTelegramPlane } from "react-icons/fa";


export default function Page() {
  return (
    <div className="bg-gray-50 text-slate-800">
      {/* Hero section */}
      <section className="relative w-full overflow-hidden py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Conseil stratégique & accompagnement digital
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Vous avez une idée ou un projet, mais vous ne savez pas par où commencer ?
              Nos experts vous guident à chaque étape pour transformer vos ambitions en succès numériques durables.
            </p>
            <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">
              Parlez à un expert
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <Image
              src="/images/consulting-afro.jpg"
              alt="Consulting digital"
              width={600}
              height={400}
              className="rounded-xl shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Value section */}
      <section className="max-w-7xl mx-auto py-20 px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <Image src="/images/analyse.jpg" alt="Audit" width={200} height={200} className="mb-4 rounded-lg shadow-md" />
            <h3 className="text-xl font-semibold mb-2">Audit & Analyse</h3>
            <p className="text-gray-800 font-semibold">Comprenez vos forces et identifiez les leviers pour performer.</p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <Image src="/images/strategy.jpg" alt="Stratégie" width={200} height={200} className="mb-4 rounded-lg shadow-md" />
            <h3 className="text-xl font-semibold mb-2">Stratégie digitale</h3>
            <p className="text-gray-600">Mettez en place un plan sur-mesure pour atteindre vos objectifs.</p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <Image src="/images/follow-up.jpg" alt="Accompagnement" width={200} height={200} className="mb-4 rounded-lg shadow-md" />
            <h3 className="text-xl font-semibold mb-2">Accompagnement continu</h3>
            <p className="text-gray-600">Bénéficiez d&apos;un soutien sur le long terme avec un expert dédié.</p>
          </motion.div>
        </div>
      </section>

      {/* Call to action */}
      <section className=" text-slate-700 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Booster votre transformation digitale </h2>
        <p className="mb-8 text-lg">Discutons de votre projet et concevons ensemble la solution adaptée.</p>
        <p className="flex justify-center"><FaTelegramPlane  className="text-gray-600 h-50 w-50"/></p>
      </section>
    </div>
  )
}
