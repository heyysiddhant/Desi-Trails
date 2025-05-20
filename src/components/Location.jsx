import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const locations = [
  {
    name: "Goa",
    image: "/src/assets/goa.jpg",
    description: "Sun-kissed beaches, nightlife, and Portuguese heritage.",
  },
  {
    name: "Manali",
    image: "/src/assets/manali.jpg",
    description: "Snow-capped peaks, adventure sports, and serene landscapes.",
  },
  {
    name: "Kerala",
    image: "/src/assets/kerala.jpg",
    description: "Backwaters, houseboats, and lush green hills.",
  },
  {
    name: "Rajasthan",
    image: "/src/assets/rajasthan.jpg",
    description: "Palaces, deserts, and royal heritage.",
  },
  {
    name: "Ladakh",
    image: "/src/assets/ladakh.jpg",
    description: "Stark landscapes, monasteries, and Himalayan beauty.",
  },
  {
    name: "Andaman",
    image: "/src/assets/andaman.jpg",
    description: "Crystal-clear waters, marine life, and tropical bliss.",
  },
  {
    name: "Darjeeling",
    image: "/src/assets/darjeeling.jpg",
    description: "Tea gardens, toy train, and panoramic views.",
  },
  {
    name: "Varanasi",
    image: "/src/assets/varanasi.jpg",
    description: "Spiritual ghats, temples, and timeless culture.",
  },
  {
    name: "Rishikesh",
    image:"/src/assets/rishikesh.jpg",
    description: "Yoga capital, Ganga rafting, and mountain peace.",
  },
  {
    name: "Udaipur",
    image: "/src/assets/udaipur.jpg",
    description: "Lakes, palaces, and romantic getaways.",
  },
];

const Location = () => {
  const [startIndex, setStartIndex] = useState(0);

  const prevSlide = () => {
    setStartIndex((prev) => (prev === 0 ? locations.length - 3 : prev - 1));
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % (locations.length - 2));
  };

  return (
    <section id="Locations" className="py-20 bg-white px-6">
      {" "}
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Top Indian Locations
      </h2>{" "}
      <div className="relative max-w-6xl mx-auto">
        {" "}
        <div className="flex overflow-x-auto no-scrollbar space-x-6 transition-transform duration-500">
          {" "}
          {locations
            .slice(startIndex, startIndex + 3)
            .map((location, index) => (
              <div
                key={index}
                className="min-w-[300px] bg-gray-100 p-4 rounded-lg shadow hover:shadow-md"
              >
                {" "}
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />{" "}
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                  {location.name}
                </h3>{" "}
                <p className="text-gray-600">{location.description}</p>{" "}
              </div>
            ))}{" "}
        </div>
        <div className="flex justify-between mt-8">
          <button
            onClick={prevSlide}
            className="bg-indigo-600 text-white p-2 rounded-full shadow hover:bg-indigo-700"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="bg-indigo-600 text-white p-2 rounded-full shadow hover:bg-indigo-700"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="mt-12 text-center text-gray-600">
        <p>
          Explore more with Desi Trails — crafted itineraries, verified stays,
          and local experiences at every destination.
        </p>
        <button className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition">
          View All Locations
        </button>
      </div>
    </section>
  );
};

export default Location;
