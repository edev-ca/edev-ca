'use client'

import Catalogue from '../components/catalogue';
import { FaArrowDown } from 'react-icons/fa6';
import Image from 'next/image';
import Partenaires from '../components/partenar';
import partners from '../contant';
import { motion } from 'framer-motion';

const page = () => {
  function handleScroll(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    event.preventDefault();
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  }

  return (
    <div className="bg-gradient-to-br bg-gray-50 to-white  min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 py-12 flex flex-col items-center"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
          Développez vos <span className="text-green-800">compétences</span> <br />
          dans le <span className="text-blue-800">Numérique</span>
        </h1>
        <p className="text-slate-900 text-lg sm:text-xl max-w-2xl mb-8 leading-relaxed">
          Former, c’est révéler des talents pour transformer nos communautés.
          Nos formations vont au-delà des compétences techniques, elles cultivent innovation, collaboration et responsabilité.
        </p>
        <button
          onClick={handleScroll}
          className="inline-flex items-center gap-2 bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium rounded-full px-6 py-3 transition-colors shadow"
        >
          <FaArrowDown className="h-5 w-5" /> En Savoir Plus
        </button>
      </motion.section>

      {/* Catalogue Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto py-10"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-slate-800 font-light text-center mb-8">
          Découvrez le catalogue
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }}>
              {[
                <Catalogue
                  key="web"
                  title="Développement Web"
                  description="Maîtrisez le développement d'applications web et mobiles..."
                  image="/images/web-app.webp"
                  detailsLink="/"
                />,
                <Catalogue
                  key="gestion"
                  title="Gestion de Projet"
                  description="Développez vos compétences en gestion de projet..."
                  image="/images/teamwork.webp"
                  detailsLink="/"
                />,
                <Catalogue
                  key="formation"
                  title="Formation Web"
                  description="Apprenez à concevoir et développer des sites web modernes..."
                  image="/images/site.webp"
                  detailsLink="/"
                />,
                <Catalogue
                  key="mobile"
                  title="Développement Mobile"
                  description="Apprenez à concevoir et développer des applications mobiles..."
                  image="/images/mobile.webp"
                  detailsLink="/"
                />,
                <Catalogue
                  key="data"
                  title="Gestion de Donnée"
                  description="Maîtriser les données, c’est maîtriser la structure invisible..."
                  image="/images/database.webp"
                  detailsLink="/"
                />,
                <Catalogue
                  key="lead"
                  title="Leadership Tech"
                  description="Ce module te permet de mieux te connaître, de développer ton leadership..."
                  image="/images/personal-growth.webp"
                  detailsLink="/"
                />,
              ][i]}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Vision Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-10"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-slate-800 font-light text-center mb-12">
          Notre vision de la formation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 order-2 md:order-1"
          >
            <Image
              src="/images/study-group.jpg"
              alt="image"
              width={800}
              height={500}
              className="object-cover rounded-xl shadow-lg w-full h-56 sm:h-72 md:h-96"
              priority
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2 border border-blue-200 bg-white/80 rounded-xl shadow-md p-6 md:p-8 flex flex-col justify-center"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl text-slate-800 mb-4 font-semibold">
              La vision de la formation chez ēdev
            </h3>
            <p className="text-slate-900 text-base sm:text-lg leading-relaxed text-justify">
              Nous croyons que la formation est la clé pour libérer le potentiel de nos communautés.
              En offrant des programmes adaptés, nous contribuons à l&apos;émergence d&apos;une nouvelle génération de professionnels du numérique, capables de transformer leur environnement.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Partenaires Section */}
      <div className='flex justify-center '>
        <hr className='border-t border-gray-200 w-2xl my-5 sm:my-10' />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Partenaires partenaires={partners} />
      </motion.div>
    </div>
  );
};

export default page;
