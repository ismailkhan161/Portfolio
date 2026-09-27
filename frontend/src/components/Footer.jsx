import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiArrowUp, FiMail } from 'react-icons/fi';
import { SITE } from '../config/site.js';
import { isPlaceholder, toHref } from '../utils/links.js';

const SOCIALS = [
  { label: 'GitHub', icon: FaGithub, href: toHref(SITE.links.github), external: true },
  { label: 'LinkedIn', icon: FaLinkedinIn, href: toHref(SITE.links.linkedin), external: true },
  { label: 'Email', icon: FiMail, href: toHref(SITE.links.email), external: true },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          &copy; {new Date().getFullYear()} {SITE.name}. Built with React.js, Express.js, and MongoDB.
        </p>

        <ul className="footer-socials">
          {SOCIALS.filter((social) => !isPlaceholder(social.href)).map(({ label, icon: Icon, href, external }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <Icon aria-hidden="true" />
              </a>
            </li>
          ))}
          <li>
            <a href="#home" aria-label="Back to top">
              <FiArrowUp aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
