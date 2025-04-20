import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/">
        <img
            src="https://picsum.photos/200/300"
            alt="Hydro‑Consult"
            className="h-20 w-20 object-cover"
          />
        </Link>
        <ul className="hidden md:flex space-x-8 text-gray-700">
          {['Home','About Us','Our Services','News & Events','Our Project','Careers'].map(text => (
            <li key={text}>
              <Link to={`/${text.toLowerCase().replace(/ & /, '-').replace(/\s+/g,'-')}`}
                    className="hover:text-primary transition">{text}</Link>
            </li>
          ))}
        </ul>
        <Link to="/contact" className="btn-primary hidden md:inline-block">Contact Us</Link>
        {/* mobile menu button here */}
      </div>
    </nav>
  )
}
