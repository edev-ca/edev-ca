'use client'

import Image from 'next/image'
//import image from '../../../public/images/car.png'
import { FaArrowDown } from "react-icons/fa6";
//import Link from 'next/link';
import ValueCard from "./components/valueCard";
import Card from './components/card';
import { useRef } from 'react';



// Place this at the top of your component tree

export default function HomePage() {

   const fondementsRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (fondementsRef.current) {
      fondementsRef.current.scrollIntoView({ behavior: 'smooth'});
    }
  };


  return (
    <main className="min-h-screen bg-gradient-to-br bg-gray-50 p-4 md:p-8 flex flex-col gap-24">

       <div className="hidden md:block absolute top-60 left-150 w-[700px] h-full md:h-96 opacity-25 z-0 ">
          <Image
            src="/images/map.png" // <-- change this to your desired image
            alt="Background decorative"
            height={700}
            width={700}
            className="object-cover"
        />
      </div>
      {/* Hero Section */}
      <div className="flex flex-col ml-10">
        <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-18">
          Le <span className="text-blue-800">Numérique</span> <br />
          au service du Développement
        </h1>
        <p className='text-slate-900 text-base sm:text-lg max-w-2xl text-left mt-3'>
        Nous sommes une startup technologique engagée qui conçoit des solutions digitales innovantes et sur mesure, pour accélérer l&apos;impact social, économique et humain des communautés en Afrique centrale.
        </p>

        <button onClick={handleScroll} className="inline-flex items-center mt-10 text-blue-800 p-4 text-base sm:text-lg">
          <FaArrowDown className="mr-2 h-4 w-4" /> En Savoir Plus
        </button>
      </div>

      {/* Fondements Section */}
      <div ref={fondementsRef}  className='mt-30 ml-5'>
        <h2 className='text-2xl sm:text-3xl text-slate-800 mb-4'>
          Nos Fondements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          <ValueCard
            imageValue="/images/opportunnity.jpg"
            descriptionValue="Transformation Digitale"
          />
          <ValueCard
            imageValue="/images/formation.jpg"
            descriptionValue="Formation"
          />
          <ValueCard
            imageValue="/images/formation2.jpg"
            descriptionValue="Inclusion Numérique"
          />
        </div>
        <div className="mt-5 ml-10">
          <p className="text-slate-900 text-2xl sm:text-lg max-w-2xl text-left mt-8">
              Portés par la Transformation Digitale, la Formation et l’Inclusion Numérique, nous construisons un avenir où la technologie devient un levier d’émancipation pour tous.
          </p>

        </div>
      </div>

      <div  className="text-left text-2xl mt-5 ml-10">
        <h1 className="text-2xl sm:text-4xl md:text-5xl text-slate-800 mb-3 leading-15">
            Nos solution<span className="text-green-800"> Solutions</span> 
        </h1>
       
      </div>
      {/* Services Section */}
      <div className="mt-0 grid grid-cols-1 gap-25 m-10 ml-5">
        <Card
          image="/images/formation.jpg"
          description="À travers des programmes pratiques, accessibles et ancrés dans la réalité locale, nous accompagnons l’émergence d’une nouvelle génération d’acteurs du numérique, outillés pour concevoir des solutions innovantes, porter le changement et contribuer activement à la transformation digitale de leur communauté."
          lien="https://edev-ca.com"
          title="formation"
          alt="Formation"
        />

        <Card
          image="/images/accompagnement.jpg"
          description="Nous offrons un accompagnement digital personnalisé, conçu pour aider les organisations à réussir leur transition numérique. De l’audit de leurs besoins jusqu’à la mise en œuvre de solutions concrètes, nous les guidons pas à pas vers une transformation efficace, durable et adaptée à leurs réalités, en mettant l’humain et l’impact au cœur de chaque démarche."
          lien="https://edev-ca.com"
          title="Accompagnement Digital"
          alt="Accompagnement"
        />

        <Card
          image="/images/conseil.jpg"
          description="Un accompagnement stratégique pour les structures en quête de transformation numérique. Grâce à une approche sur mesure, des diagnostics précis et une compréhension fine des réalités locales, nous identifions les leviers d’innovation, optimisons les processus et co-construisons des solutions durables à fort impact social et économique."
          lien="https://edev-ca.com"
          title="Consulting"
          alt="Consulting"
        />

        <Card
          image="/images/elearning.jpg"
          description="Nous concevons des solutions digitales innovantes, durables et ancrées dans la réalité locale, qui répondent aux besoins concrets des communautés. Grâce à une approche centrée utilisateur, nous transformons les défis quotidiens en opportunités numériques, en créant des applications web et mobiles, des plateformes sur mesure et des outils intelligents capables d’impacter positivement l’éducation, la santé, l’économie et bien plus encore."
          lien="https://edev-ca.com"
          title="Développement des solutions digitales"
          alt="Développement Web"
        />
      </div>
<hr className='border-t border-gray-200 my-10'/>
      {/* Partenaires Section */}
      <div className="mt-20 text-center mb-10">
        <h2 className="text-2xl sm:text-md font-light text-slate-800 mb-8">Nos Partenaires Strategiques</h2>
        <div className="flex flex-wrap justify-center gap-8 items-center">
         {/*logo*/}
       
        </div>
      </div>
    </main>
  );
}