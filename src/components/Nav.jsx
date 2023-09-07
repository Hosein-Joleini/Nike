import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { hamburger } from "../assets/icons";

const Nav = () => {
  return (
    <header className="w-full padding-x py-8 absolute z-10">
      <nav className="max-container flex justify-between items-center gap-2 font-montserrat leading-normal">
        <a href="/">
          <img src={headerLogo} alt="Logo" width="129" height="29" />
        </a>
        <ul className="flex items-center text-lg gap-16 text-slate-gray max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg font-medium max-lg:hidden wide:mr-24">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>
        <div className="max-lg:block hidden">
          <img src={hamburger} alt="hamburger icon" width="25" height="25" />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
