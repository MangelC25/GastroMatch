import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {
  Keyboard,
  EffectCoverflow,
  Pagination,
  Autoplay,
} from "swiper/modules";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Juan Pérez",
      text: "Asistir a este evento fue una experiencia inolvidable. Cada plato estaba elaborado con una dedicación excepcional, y la organización fue impecable. ¡Espero con ansias el próximo!",
      video: "https://www.example.com/video1.mp4",
      image: "https://www.example.com/image1.jpg",
    },
    {
      name: "María García",
      text: "La diversidad de sabores y la calidad de los ingredientes me sorprendieron gratamente. Además, el ambiente festivo y la atención al detalle hicieron que todo fuera perfecto.",
      video: "https://www.example.com/video2.mp4",
      image: "https://www.example.com/image2.jpg",
    },
    {
      name: "Carlos López",
      text: "Nunca había disfrutado de una experiencia culinaria tan completa. Los chefs compartieron sus historias y secretos, lo que hizo que cada bocado fuera más significativo.",
      video: "https://www.example.com/video3.mp4",
      image: "https://www.example.com/image3.jpg",
    },
    {
      name: "Daniel Peláez",
      text: "La combinación de música en vivo y platos exquisitos creó una atmósfera mágica. Sin duda, un evento que recomendaré a todos mis amigos.",
      video: "https://www.example.com/video4.mp4",
      image: "https://www.example.com/image4.jpg",
    },
  ];

  return (
    <section id="testimonials-section">
      <div className="container">
        <div className="testimonial-section-title   ">
          <h2>Testimonios</h2>
        </div>
        <article className="testimonials">
          <Swiper
            loop={true}
            effect={"coverflow"}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            keyboard={{
              enabled: true,
            }}
            pagination={true}
            modules={[Autoplay, Keyboard, EffectCoverflow, Pagination]}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="testimonial-Card"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="testimonial-content">
                    <img src={testimonial.image} alt="" />
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.text}</p>
                    <video controls>
                      <source src={testimonial.video} type="video/mp4" />
                      Tu navegador no soporta la etiqueta de video.
                    </video>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </article>
      </div>
    </section>
  );
}
