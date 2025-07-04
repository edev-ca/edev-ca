import Image from "next/image";

type Partenaire = {
  src: string;
  alt?: string;
};

type PartenairesProps = {
  partenaires: Partenaire[];
};

export default function Partenaires({ partenaires }: PartenairesProps) {
  return (
    <div className="mt-10 sm:mt-20 text-center mb-6 sm:mb-10">
      <h2 className="text-sm  sm:text-2xl font-extralight text-gray-600 mb-4 sm:mb-8">Nos Partenaires</h2>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-8 items-center">
        {partenaires.map((partenaire, id) => (
          <Image
            key={id}
            src={partenaire.src}
            alt={partenaire.alt || "logo"}
            height={120}
            width={120}
            className="object-contain rounded-lg shadow-gray-600 shadow-lg"
          />
        ))}
      </div>
    </div>
  );
}
