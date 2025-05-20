const About = () => {
  return (
    <section id="About" className="py-20 px-6 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Welcome to Desi Trails</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
          At <span className="font-semibold text-indigo-600">Desi Trails</span>, we bring you closer to the heart of India. Whether you're planning a soulful escape to the Himalayas, a spiritual journey through Varanasi, a beach break in Goa, or a royal retreat in Rajasthan — we've got you covered.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-bold text-indigo-700 mb-2">Authentic Experiences</h3>
            <p className="text-gray-600">Curated local tours, heritage stays, and cultural trails to experience India like never before.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-bold text-indigo-700 mb-2">Personalized Itineraries</h3>
            <p className="text-gray-600">Get tailored plans that suit your travel style — from backpackers to luxury explorers.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-bold text-indigo-700 mb-2">Secure Bookings</h3>
            <p className="text-gray-600">Easy online bookings with trusted partners, verified accommodations, and 24x7 support.</p>
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <h4 className="text-2xl font-semibold text-gray-700 mb-4">Why Choose Desi Trails?</h4>
          <ul className="text-gray-600 space-y-2 text-left md:text-center">
            <li>✓ 100+ handpicked destinations across India</li>
            <li>✓ Transparent pricing & no hidden fees</li>
            <li>✓ Local guides with deep cultural knowledge</li>
            <li>✓ Seamless travel planning from start to end</li>
            <li>✓ Real traveler reviews & community stories</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;