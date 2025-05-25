/* src/components/layouts/Navbar.tsx */
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const goToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#services');
    }
  };

  const goToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#contact');
    }
  };

  const menu = [
    { label: 'Home',         to: '/' },
    // { label: 'About Us',     to: '/about-us' },
    { label: 'Our Services', to: '/#services', onClick: goToServices },
    // { label: 'News & Events', to: '/news-events' },
    { label: 'Our Project',  to: '/our-project' },
    // { label: 'Careers',      to: '/careers' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/">
          <img
            src="https://picsum.photos/200/300"
            alt="Hydro-Consult"
            className="h-20 w-20 object-cover"
          />
        </Link>

        {/* desktop menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700">
          {menu.map(({ label, to, onClick }) => (
            <li key={label}>
              <Link to={to} onClick={onClick} className="hover:text-primary transition">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Us */}
        <Link
          to="/#contact"
          onClick={goToContact}
          className="btn-primary hidden md:inline-block bg-amber-600"
        >
          Contact&nbsp;Us
        </Link>
      </div>
    </nav>
  );
}
