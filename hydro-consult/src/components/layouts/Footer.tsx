// src/components/layout/Footer.tsx
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-blue-500 text-white">
      {/* Top columns */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
        {/* Project */}
        <div>
          <h4 className="font-bold mb-2">Project</h4>
          <ul className="space-y-1">
            <li><a href="/projects/international" className="hover:underline">International</a></li>
            <li><a href="/projects/national"     className="hover:underline">National</a></li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h4 className="font-bold mb-2">About Us</h4>
          <ul className="space-y-1">
            <li><a href="/about/key-personnels" className="hover:underline">Key Personnels</a></li>
            <li><a href="/about/board"           className="hover:underline">Board of Directors</a></li>
            <li><a href="/about/overview"        className="hover:underline">Overview</a></li>
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h4 className="font-bold mb-2">Important Links</h4>
          <ul className="space-y-1">
            <li><a href="/notices" className="hover:underline">Notices</a></li>
            <li><a href="/careers" className="hover:underline">Careers</a></li>
            <li><a href="/gallery" className="hover:underline">Gallery</a></li>
          </ul>
        </div>

        {/* Contact us */}
        <div>
          <h4 className="font-bold mb-2">Contact us</h4>
          <ul className="space-y-1">
            <li>Buddhanagar, Kathmandu, Nepal</li>
            <li>Tel. No.: +977-1-4792507</li>
            <li>FAX No.: +977-1-4795920</li>
            <li>PO Box: 14408</li>
            <li>Email: <a href="mailto:service@hcel.com.np" className="hover:underline">service@hcel.com.np</a></li>
          </ul>
          <div className="mt-4">
            <h4 className="font-bold mb-2">Get Social With Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="h-5 w-5 hover:text-gray-300" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="h-5 w-5 hover:text-gray-300" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-dark/50">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4 text-sm">
          <span>2021 © Survey Pro. All Rights Reserved</span>
          <span>Powered By: Pvt Ltd</span>
        </div>
      </div>
    </footer>
  )
}
