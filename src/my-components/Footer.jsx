import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="text-white p-8">
      <hr className="opacity-10 border-white mb-8" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links Section */}
          <div className="flex flex-col md:items-start md:text-left">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-green-400 transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-green-400 transition-colors">Services</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col md:items-start md:text-left">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: <a href="mailto:echinecherem729@gmail.com" className="hover:text-green-400 transition-colors">echinecherem729@gmail.com</a></li>
              <li>Phone: <a href="tel:+2349121059853" className="hover:text-green-400 transition-colors">+234 912 105 9853</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col md:items-start md:text-left">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://x.com/home" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-green-400 transition-colors">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="https://github.com/emmanuel-nwafor" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-green-400 transition-colors">
                <i className="bx bxl-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/emmanuel-chinecherem-767739284/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-green-400 transition-colors">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-xs md:text-center">
          <p>&copy; {currentYear} eco-studios. All Rights Reserved.</p> {/* Dynamically updates year */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
