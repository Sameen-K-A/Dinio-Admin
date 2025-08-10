import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdOutlineErrorOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { ROUTE } from "@/routes/router";

export default function NotFoundPage() {
  const youtubeUrl = import.meta.env.VITE_YOUTUBE;
  const instagramUrl = import.meta.env.VITE_INSTAGRAM;
  const linkedinUrl = import.meta.env.VITE_LINKEDIN;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black px-4 text-center">
      <div className="flex flex-col items-center justify-center overflow-y-auto py-15">
        <MdOutlineErrorOutline className="w-30 h-30 text-white" />

        <h1 className="mt-6 text-3xl font-bold text-white">
          404 - Page Not Found
        </h1>

        <p className="mt-2 max-w-md text-gray-400">
          Please scan the QR code from your table or click the button below to
          return to the home page and continue exploring Dinio.
        </p>

        <Link
          to={ROUTE.DASHBOARD}
          className="mt-6 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg shadow hover:scale-105 transition-transform"
        >
          Back to Home
        </Link>
      </div>

      <div className="flex space-x-4 fixed bottom-0 pb-5 pt-2 left-1/2 transform -translate-x-1/2 bg-black w-full justify-center">
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors duration-300"
          aria-label="YouTube"
        >
          <FaYoutube className="w-5 h-5 md:w-6 md:h-6" />
        </a>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors duration-300"
          aria-label="Instagram"
        >
          <RiInstagramFill className="w-5 h-5 md:w-6 md:h-6" />
        </a>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="w-5 h-5 md:w-6 md:h-6" />
        </a>
      </div>
    </div>
  );
}