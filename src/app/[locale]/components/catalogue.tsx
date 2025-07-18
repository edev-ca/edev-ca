import Link from 'next/link';
import Image from 'next/image';

interface CatalogueProps {
    title: string;
    description: string;
    image: string;
    detailsLink?: string;
}

const Catalogue = ({title, description, image, detailsLink }: CatalogueProps) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="border border-gray-400 rounded-md w-70 overflow-hidden shadow-md">
                {/* Image section */}
                <div className="relative w-full h-40">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 320px) 100vw, 320px"
                    />
                </div>
                {/* Text section with white background */}
                <div className="bg-white p-6 flex flex-col items-center">
                    <h2 className="text-xl font-bold mb-2">{title}</h2>
                    <p className="text-gray-600 mb-4 text-light text-sm text-left">
                        {description}
                    </p>
                    {detailsLink && (
                        <Link
                            href={detailsLink}
                            className="text-blue-600 border border-blue-500 px-4 py-2 rounded hover:bg-blue-50 transition font-semibold"
                        >
                            Je m&apos;inscris
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Catalogue;
