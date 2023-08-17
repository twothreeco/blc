import Image from "next/image";
import styles from '../styles/Home.module.css';

const myFoot = () => {
  return (
    <footer className="dark:invert w-full bg-zinc-900 relative">
      <div className="py-8 flex flex-1 items-center justify-between text-zinc-600 text-xs container mx-auto">
        <a
          href="https://hodgkinsonbuilders.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-400 transition-colors duration-200"
        >
          &copy; {new Date().getFullYear()} - Hodgkinson Builders
        </a>
        <a
          href="https://twitter.com/aaronitzerott"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-zinc-400 transition-colors duration-200"
        >
          Webdesign by Aaron Itzerott Creative
        </a>
      </div>
    </footer>
  );
}

export default myFoot;