import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container w-full text-white font-montserrat">
      <div className="w-full flex max-lg:flex-col lg:gap-12">
        <div className="mb-20 mr-auto">
          <a href="/">
            <img src={footerLogo} alt="Footer Logo" width="157" height="37" />
          </a>
          <p className="mt-6 mb-8 text-white-400 font-montserrat sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex gap-4">
            {socialMedia.map((social) => (
              <div
                key={social.alt}
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center"
              >
                <img src={social.src} alt={social.alt} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-12 justify-between">
          {footerLinks.map((item) => (
            <div key={item.title}>
              <h3 className="text-2xl font-semibold mb-8">{item.title}</h3>
              <ul className="flex flex-col gap-4 text-white-400">
                {item.links.map((linkItem) => (
                  <li className="flex-1" key={linkItem.name}>
                    <a href={linkItem.link} className="text-base">
                      {linkItem.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-24 flex flex-col justify-center items-center sm:flex-row sm:justify-between">
        <a className="flex gap-2" href="/">
          <img src={copyrightSign} alt="Copyright sign" />
          Copyright. All rights reserved.
        </a>
        <a href="/">Terms & Conditions</a>
      </div>
    </footer>
  );
};

export default Footer;
