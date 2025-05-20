import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Dummy countdown (5 days from now)
const getRemainingTime = (endDate) => {
  const total = Date.parse(endDate) - Date.now();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
};

const offers = [
  {
    title: "Summer Escape - 20% Off",
    image: "/src/assets/offer1.jpg",
    description: "Book a summer trip to Manali or Shimla and get 20% off!",
    endDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
  },
  {
    title: "Goa Festive Offer - Flat ₹1500 Off",
    image: "/src/assets/offer2.jpg",
    description: "Limited time Goa package discount. Enjoy beaches and nightlife!",
    endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
  },
  {
    title: "Kerala Backwaters - 15% Off",
    image: "/src/assets/offer3.jpg",
    description: "Houseboat packages and tea estate tours on discount this month!",
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  },
];

const Offers = () => {
  const [timers, setTimers] = useState(
    offers.map((offer) => getRemainingTime(offer.endDate))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers(offers.map((offer) => getRemainingTime(offer.endDate)));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="Offers" className="py-20 bg-gradient-to-r from-orange-100 to-yellow-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Exciting Deals & Discounts</h2>

      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {offers.map((offer, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02]">
                <img src={offer.image} alt={offer.title} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-1">{offer.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{offer.description}</p>
                  
                  <div className="text-sm font-medium text-red-600 mb-3">
                    {timers[index].total > 0 ? (
                      <>
                        Hurry! Ends in:{" "}
                        {`${timers[index].days}d ${timers[index].hours}h ${timers[index].minutes}m ${timers[index].seconds}s`}
                      </>
                    ) : (
                      "Offer Expired"
                    )}
                  </div>

                  <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition">
                    Book Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Offers;