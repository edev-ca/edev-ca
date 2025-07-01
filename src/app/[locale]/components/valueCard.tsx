import Image from 'next/image';

interface ValueCardProps {
    imageValue: string;
    descriptionValue: string;
    alt?: string;
}

const ValueCard = ({ imageValue, descriptionValue, alt = "Value image" }: ValueCardProps) => {
  return (
    <div className="border border-gray-200 rounded-2xl shadow-sm p-10 bg-white max-w-xl max-h-2xl text-center transition-transform duration-300 ease-in-out transform hover:scale-105">
      <div className="mb-6 flex justify-center">
        <Image
          src={imageValue}
          alt={alt}
          width={500}
          height={500}
          className="object-cover bg-gray-100 rounded-xl w-full h-44"
        />
      </div>
      <p className="text-slate-800 text-lg leading-7 font-medium">
        {descriptionValue}
      </p>
    </div>
  );
};

export default ValueCard;
