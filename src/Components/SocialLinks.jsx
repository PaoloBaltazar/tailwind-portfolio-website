// SocialLinks.js
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 space-y-4">
      <a
        href="https://www.linkedin.com/in/paolo-baltazar-b4733218b/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 group"
      >
        <FaLinkedin className="text-3xl text-blue-500 group-hover:text-blue-700" />
        <span className="text-white opacity-0 group-hover:opacity-100 transform translate-x-[-20px] group-hover:translate-x-0 transition-all duration-300">
          LinkedIn
        </span>
      </a>

      <a
        href="https://github.com/PaoloBaltazar"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 group"
      >
        <FaGithub className="text-3xl text-gray-700 group-hover:text-gray-900" />
        <span className="text-white opacity-0 group-hover:opacity-100 transform translate-x-[-20px] group-hover:translate-x-0 transition-all duration-300">
          GitHub
        </span>
      </a>

      <a
        href="mailto:your-email@example.com"
        className="flex items-center space-x-2 group"
      >
        <FaEnvelope className="text-3xl text-red-500 group-hover:text-red-700" />
        <span className="text-white opacity-0 group-hover:opacity-100 transform translate-x-[-20px] group-hover:translate-x-0 transition-all duration-300">
          Email
        </span>
      </a>
    </div>
  );
};

export default SocialLinks;
