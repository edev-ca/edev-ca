import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

interface CardProps {
    image: string;
    title: string;
    description: string;
    lien: string;
    alt: string;
}

const Card = ({ image, title, description, lien, alt }: CardProps) => {
    return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-full mx-auto flex flex-col md:flex-row">
            <div className="relative w-full md:w-1/2 min-h-[400px] md:min-h-[280px]">
                <Image
                    src={image}
                    alt={alt}
                    fill
                    className="object-cover w-full h-full"
                    sizes="(max-width: 768px) 100vw, 700px"
                    priority
                />
            </div>
            <div className="flex flex-col justify-center gap-3 p-4 md:p-8 w-full md:w-1/2">
                <h3 className="text-lg md:text-xl font-bold text-slate-800">
                    <span className="text-green-700 font-bold">ēdev </span>| {title}
                </h3>
                <p className="text-sm md:text-base text-gray-800 leading-relaxed">
                    {description}
                </p>
                <hr className="border-gray-300 w-full" />
                <Link
                    href={lien}
                    className="text-slate-600 flex items-center text-sm md:text-base font-bold self-start gap-2"
                >
                    <span>Visitez</span>
                    <FaArrowRight />
                </Link>
            </div>
        </div>
    );
};

export default Card;