'use client';

import Image from 'next/image';
import { FaArrowDown } from 'react-icons/fa6';
import ValueCard from './components/valueCard';
import Card from './components/card';
import { useRef } from 'react';
import Partenaires from './components/partenar';
import partners from '../[locale]/contant/index';
import { useTranslations } from "next-intl";

export default function HomePage() {
  const fondementsRef = useRef<HTMLDivElement | null>(null);
  const  t  = useTranslations();

  const handleScroll = () => {
    if (fondementsRef.current) {
      fondementsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br bg-gray-50 p-2 sm:p-4 md:p-8 flex flex-col gap-16 sm:gap-20 md:gap-24">
      <div className="hidden md:block absolute top-55 left-150 w-[300px] sm:w-[500px] md:w-[700px] h-full md:h-96 opacity-25 z-0">
        <Image
          src="/images/map.png"
          alt="Background decorative"
          height={700}
          width={700}
          className="object-cover"
        />
      </div>

      {/* Hero Section */}
      <div className="flex flex-col ml-2 sm:ml-6 md:ml-10">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-800 mb-4 sm:mb-6 leading-tight">
          {t('homepage.hero.title1')} <span className="text-blue-800">{t('homepage.hero.title2')}</span><br />
          {t('homepage.hero.title3')}
        </h1>
        <p className="text-slate-900 text-sm sm:text-base md:text-lg max-w-2xl text-left mt-2 sm:mt-3">
          {t('homepage.hero.description')}
        </p>

        <button onClick={handleScroll} className="inline-flex items-center mt-6 sm:mt-8 text-blue-800 p-2 sm:p-4 text-base sm:text-lg">
          <FaArrowDown className="mr-2 h-4 w-4" /> {t('homepage.hero.button')}
        </button>
      </div>

      {/* Fondements Section */}
      <div ref={fondementsRef} className="mt-10 sm:mt-20 ml-2 sm:ml-5">
        <h2 className="text-xl sm:text-2xl md:text-3xl text-slate-800 mb-2 sm:mb-4">
          {t('homepage.fondements.title')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-10">
          <ValueCard imageValue="/images/opportunnity.jpg" descriptionValue={t('homepage.fondements.items.0')} />
          <ValueCard imageValue="/images/formation.jpg" descriptionValue={t('homepage.fondements.items.1')} />
          <ValueCard imageValue="/images/formation2.jpg" descriptionValue={t('homepage.fondements.items.2')} />
        </div>
        <div className="mt-4 sm:mt-5 ml-2 sm:ml-10">
          <p className="text-slate-900 text-base sm:text-lg max-w-2xl text-left mt-4 sm:mt-8">
            {t('homepage.fondements.description')}
          </p>
        </div>
      </div>

      {/* Solutions Section */}
      
      <div className="text-left text-xl sm:text-2xl mt-6 sm:mt-8 ml-2 sm:ml-10">
        <h1 className="text-xl sm:text-3xl md:text-5xl text-slate-800 mb-2 sm:mb-3 leading-tight">
          {t('homepage.solutions.title1')} <span className="text-green-800">{t('homepage.solutions.title2')}</span>
        </h1>
      </div>

      {/* Services Cards */}
      <div className="mt-0 grid grid-cols-1 gap-10 sm:gap-12 m-2 sm:m-6 md:m-10 ml-2 sm:ml-5">
        <Card
          image="/images/formation.jpg"
          description={t('homepage.solutions.cards.0.description')}
          lien="/formation"
          title={t('homepage.solutions.cards.0.title')}
          alt="Formation"
        />

        <Card
          image="/images/accompagnement.jpg"
          description={t('homepage.solutions.cards.1.description')}
          lien="/services/accompagnement-digital"
          title={t('homepage.solutions.cards.1.title')}
          alt="Accompagnement"
        />

        <Card
          image="/images/conseil.jpg"
          description={t('homepage.solutions.cards.2.description')}
          lien="/services/consulting"
          title={t('homepage.solutions.cards.2.title')}
          alt="Consulting"
        />

        <Card
          image="/images/elearning.jpg"
          description={t('homepage.solutions.cards.3.description')}
          lien="/services/conception-logiciel"
          title={t('homepage.solutions.cards.3.title')}
          alt="Développement Web"
        />
      </div>

      <hr className="border-t border-gray-200 my-5 sm:my-10" />

      {/* Partenaires Section */}
      <Partenaires partenaires={partners} />
    </main>
  );
}
