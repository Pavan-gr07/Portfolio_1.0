import Image from "next/image";

interface SocialIconProps {
    src: string;
    alt: string;
    link: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ src, alt, link }) => {
    return (
        <a href={link} target="_blank" className="w-[42px] h-[42px] border flex items-center justify-center rounded-full group relative overflow-hidden bg-rgba(217, 217, 217, 0.1);">
            {/* Background Hover Effect */}
            <span className="absolute w-[42px] h-[42px] bg-white rounded-full scale-0 transition-transform duration-300 ease-in-out group-hover:scale-100"></span>

            {/* Social Icon */}
            <Image
                src={src}
                alt={alt}
                width={42} // Ensures Image optimization
                height={42}
                className="w-[40%] transition-all group-hover:brightness-0 group-hover:saturate-100 group-hover:invert-0 group-hover:sepia-[7%] group-hover:saturate-[18%] group-hover:hue-rotate-[346deg] group-hover:brightness-[15%] group-hover:contrast-[86%]"
            />
        </a>
    );
};

export default SocialIcon;
