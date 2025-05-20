const Footer = () => {
    return (
      <footer id="Contact" className="bg-gradient-to-tr from-blue-900 via-blue-800 to-blue-900 text-white py-10 px-6 mt-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo & Tagline */}
          <div>
            <h2 className="text-3xl font-bold mb-2">Desi Trails</h2>
            <p className="text-gray-300">"Wander. Discover. Live the Desi Spirit."</p>
          </div>
  
          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Hotel Bookings</li>
              <li>Tour Packages</li>
              <li>Flight Tickets</li>
              <li>Customized Trips</li>
            </ul>
          </div>
  
          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#About" className="hover:underline">About Us</a></li>
              <li><a href="#Locations" className="hover:underline">Locations</a></li>
              <li><a href="#Tours" className="hover:underline">Tours</a></li>
              <li><a href="#Contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
  
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@desitrails.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Address: New Delhi, India</li>
            </ul>
          </div>
  
        </div>
  
        {/* Bottom copyright */}
        <div className="text-center mt-10 text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Desi Trails | Developed by Siddhant Mishra. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;