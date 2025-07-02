'use client'

import Catalogue from '../components/catalogue'
import { FaArrowDown } from 'react-icons/fa6'
import Image from 'next/image'

const page = () => {
  function handleScroll(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    event.preventDefault();
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  }

  return (
    <div className='min-h-screen bg-gradient-to-br bg-gray-50 p-2 sm:p-4 md:p-8 flex flex-col'>
      <div className="flex flex-col ml-0 sm:ml-4 md:ml-20">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4 sm:mb-6 leading-tight">
          Développez vos <span className="text-green-800">compétences</span> <br />
          dans le <span className="text-blue-800">Numérique</span>
        </h1>
        <p className='text-slate-900 text-sm xs:text-base sm:text-lg max-w-full sm:max-w-2xl text-left mt-2 sm:mt-3'>
          Former, c’est révéler des talents pour transformer nos communautés.
          Nos formations vont au-delà des compétences techniques : elles cultivent innovation, collaboration et responsabilité.
        </p>

        <button onClick={handleScroll} className="inline-flex items-center mt-10 sm:mt-10 md:mt-20 text-blue-800 p-3 sm:p-4 text-sm sm:text-lg">
          <FaArrowDown className="mr-2 h-4 w-4" /> En Savoir Plus
        </button>
      </div>

      {/* Catalogue section */}
      <div className='ml-0 sm:ml-2 md:ml-1'>
        <h2 className='text-lg xs:text-xl sm:text-2xl md:text-3xl text-slate-800 font-light mt-10 sm:mt-20 md:mt-40 ml-0 sm:ml-4 md:ml-20'>
          Découvrez le catalogue
        </h2>
        <div className='flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mb-8 sm:mb-10'>
          <Catalogue 
            title="Développement Web"  
            description="Maîtrisez le développement d'applications web et mobiles. De l’architecture aux interactions dynamiques avec JavaScript ou React, vous apprendrez à construire des solutions complètes adaptées aux besoins réels." 
            image="/images/web-app.webp" 
            detailsLink="/" 
          />

          <Catalogue 
            title="Gestion de Projet"  
            description="Développez vos compétences en gestion de projet, Git, GitHub et méthodes de travail en équipe. Initiez-vous aux bonnes pratiques de collaboration entre développeurs pour réussir dans un environnement professionnel ou communautaire." 
            image="/images/teamwork.webp" 
            detailsLink="/" 
          />

          <Catalogue
            title="Formation Web"  
            description="Apprenez à concevoir et développer des sites web modernes et responsives, de la structure HTML/CSS jusqu'à l'intégration. Une formation orientée pratique pour créer des interfaces professionnelles." 
            image="/images/site.webp" 
            detailsLink="/" 
          />
        </div>
      </div>
      
      {/* Mission section */}
      <div className='ml-0 sm:ml-2 md:ml-1'>
        <div className="w-full max-h-[40vh] sm:max-h-screen flex justify-center">
          <Image
            src="/images/vision.jpg"
            alt="Formation"
            width={800}
            height={600}
            className="w-full max-w-xs sm:max-w-2xl max-h-[30vh] sm:max-h-[60vh] object-cover rounded-lg shadow-lg"
          />
        </div>
        <h2 className='text-lg xs:text-xl sm:text-2xl md:text-3xl text-slate-800 font-light mt-6 sm:mt-10 md:mt-10 ml-0 sm:ml-4 md:ml-20'>
          La vision
        </h2>
        <p className="text-slate-900 text-sm xs:text-base sm:text-lg max-w-full sm:max-w-2xl text-left mt-4 sm:mt-8 ml-0 sm:ml-4 md:ml-20">
          Nous croyons que la formation est la clé pour libérer le potentiel de nos communautés. 
          En offrant des programmes adaptés, nous contribuons à l&apos;émergence d&apos;une nouvelle génération de professionnels du numérique, capables de transformer leur environnement.
        </p>
      </div>
      <div className='mt-10 sm:mt-20'></div>
    </div>
  )
}

export default page
