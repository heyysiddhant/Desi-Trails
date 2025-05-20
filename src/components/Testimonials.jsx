import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Aarav Sharma",
    location: "Mumbai, India",
    image: "/src/assets/testimonial1.jpg",
    review:
      "Desi Trails planned my trip to Kerala perfectly! The backwater experience was magical. Excellent service and hassle-free booking!",
    rating: 5,
  },
  {
    name: "Priya Verma",
    location: "Delhi, India",
    image: "/src/assets/testimonial2.jpg",
    review:
      "Our trip to Rajasthan with Desi Trails was unforgettable. From forts to sand dunes, everything was organized beautifully!",
    rating: 4,
  },
  {
    name: "Rohit Khanna",
    location: "Bangalore, India",
    image: "/src/assets/testimonial3.jpg",
    review:
      "Loved the customized packages! Desi Trails made our honeymoon to Andamans a dream come true. Highly recommended!",
    rating: 5,
  },
  
  // Add more if needed
];

const TestimonialsSlider = () => {
  return (
    <section id="Testimonials" className="py-20 bg-blue-50 px-5">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
        What Our Travelers Say
      </h2>

      <div className="max-w-5xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-blue-200 mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
                <div className="flex justify-center my-2">
                  {Array(testimonial.rating)
                    .fill()
                    .map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                </div>
                <p className="text-gray-600">{testimonial.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
