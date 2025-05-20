const Packages = () => {
  const packages = [
    {
      image: "/src/assets/RoyalRajasthan.jpg",
      title: "Royal Rajasthan Retreat",
      description: "Experience the grandeur of palaces, camel safaris, and desert nights in a luxurious style.",
    },
    {
      image: "/src/assets/himalaya.jpg",
      title: "Himalayan Adventure",
      description: "Trek through the scenic trails of Himachal and Uttarakhand with expert guides and cozy stays.",
    },
    {
      image: "/src/assets/keralaBackwater.jpg",
      title: "Backwaters of Kerala",
      description: "Enjoy serene houseboat cruises, Ayurvedic therapies, and authentic South Indian cuisine.",
    },
    {
      image: "/src/assets/goaBeech.jpg",
      title: "Goa Beach Escape",
      description: "Chill on sun-kissed beaches, enjoy vibrant nightlife, and indulge in water sports.",
    },
    {
      image: "/src/assets/slide6.jpg",
      title: "Spiritual North India",
      description: "Explore Varanasi, Rishikesh & Haridwar with yoga retreats and holy Ganga Aarti experiences.",
    },
    {
      image: "/src/assets/trianglertour.jpg",
      title: "Heritage Triangle Tour",
      description: "Discover Delhi, Agra & Jaipur – a blend of Mughal architecture and Rajput culture.",
    },
  ];

  return (
    <section id="Tours" className="py-20 px-5 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Our Tour Packages</h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Handpicked tours across India to suit every traveler—be it adventure, luxury, heritage, or spirituality. Discover Desi Trails curated travel experiences crafted for unforgettable memories.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages.map((pkg, idx) => (
          <div key={idx} className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-52 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
            <p className="text-gray-700">{pkg.description}</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Explore More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;