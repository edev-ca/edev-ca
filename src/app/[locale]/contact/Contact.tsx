'use client'

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


const contactSchema = z.object({
  firstname: z.string().min(2, 'Prénom requis'),
  lastname: z.string().min(2, 'Nom requis'),
  email: z.string().email('Email invalide'),
  phone: z.string().optional(),
  company: z.string().optional(),
  projectType: z.string().min(2, 'Type de projet requis'),
  message: z.string().min(10, 'Message trop court')
});

type ContactForm = z.infer<typeof contactSchema>;

enum Step {
  Info = 1,
  Project = 2,
  Submit = 3,
  Preview = 4
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState<Step>(Step.Info);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues
  } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactForm) => {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (res.ok) setSubmitted(true);
  };

  useEffect(() => {
  if (submitted) {
    const timer = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => clearTimeout(timer);
  }
}, [submitted, router]);


  return (
    <div className="min-h-screen bg-gradient-to-r bg-gray-50 px-4 py-10 flex flex-col items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xl sm:text-5xl py-8 font-light text-slate-800 text-center mb-12"
      >
        Discutons de votre prochain <br /> projet
      </motion.h1>

      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key={step}
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-10 space-y-10"
          >
            {step === Step.Info && (
              <>
                <h2 className="text-xl font-semibold text-slate-600">Informations Personnelles</h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Prénom</label>
                  <input
                    type="text"
                    {...register('firstname')}
                    className="mt-1 w-full px-4 py-2 border border-slate-500 rounded-lg shadow-sm"
                  />
                  {errors.firstname && <p className="text-sm text-red-500 mt-1">{errors.firstname.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nom</label>
                  <input
                    type="text"
                    {...register('lastname')}
                    className="mt-1 w-full px-4 py-2 border border-gray-300 text-slate-500 rounded-lg shadow-sm"
                  />
                  {errors.lastname && <p className="text-sm text-red-500 mt-1">{errors.lastname.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    {...register('email')}
                    className="mt-1 w-full px-4 py-2 border border-gray-300 text-slate-500 rounded-lg shadow-sm"
                  />
                  {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
                </div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="button"
                  onClick={() => setStep(Step.Project)}
                  className="w-full bg-indigo-600 text-white py-2 rounded-lg shadow hover:bg-indigo-700"
                >
                  Suivant
                </motion.button>
              </>
            )}

            {step === Step.Project && (
              <>
                <h2 className="text-xl font-semibold text-slate-600">À propos de votre projet</h2>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Téléphone (optionnel)</label>
                  <input
                    type="text"
                    {...register('phone')}
                    className="mt-1 w-full px-4 py-2 border border-gray-300 text-slate-500 rounded-lg shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nom de l&apos;organisation / entreprise (optionnel)</label>
                  <input
                    type="text"
                    {...register('company')}
                    className="mt-1 w-full px-4 py-2 border border-gray-300 text-slate-500 rounded-lg shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Type de projet</label>
                  <input
                    type="text"
                    {...register('projectType')}
                    className="mt-1 w-full px-4 py-2 border border-gray-300 text-slate-500 rounded-lg shadow-sm"
                  />
                  {errors.projectType && <p className="text-sm text-red-500 mt-1">{errors.projectType.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Détaillez votre besoin</label>
                  <textarea
                    rows={5}
                    {...register('message')}
                    className="mt-1 w-full px-4 py-2 border border-gray-300 text-slate-600 rounded-lg shadow-sm"
                  ></textarea>
                  {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>}
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(Step.Info)}
                    className="text-indigo-500 hover:underline"
                  >
                    Retour
                  </button>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="button"
                    onClick={() => setStep(Step.Preview)}
                    className="bg-indigo-600 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-700"
                  >
                    Aperçu
                  </motion.button>
                </div>
              </>
            )}

            {step === Step.Preview && (
              <>
                <h2 className="text-xl font-semibold text-slate-600">Aperçu de votre message</h2>
                <div className="text-gray-800 space-y-10 p-10">
                  <p><strong>Prénom:</strong> {getValues('firstname')}</p>
                  <p><strong>Nom:</strong> {getValues('lastname')}</p>
                  <p><strong>Email:</strong> {getValues('email')}</p>
                  <p><strong>Téléphone:</strong> {getValues('phone')}</p>
                  <p><strong>Organisation:</strong> {getValues('company')}</p>
                  <p><strong>Type de projet:</strong> {getValues('projectType')}</p>
                  <p><strong>Message:</strong><br /> {getValues('message')}</p>
                </div>
                <div className="flex justify-between mt-6">
                  <button
                    type="button"
                    onClick={() => setStep(Step.Project)}
                    className="text-indigo-500 hover:underline"
                  >
                    Modifier
                  </button>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-green-600 text-white py-2 px-4 rounded-lg shadow hover:bg-green-700 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Envoi…' : 'Envoyer'}
                  </motion.button>
                </div>
              </>
            )}
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-8 rounded-xl shadow-lg text-center text-green-600 font-light text-xl"
          >
            Merci pour votre message ! Nous vous répondrons très bientôt.
          </motion.div>
        )}
      </AnimatePresence> 
    </div>
  );
}