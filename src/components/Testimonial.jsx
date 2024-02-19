// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// required modules
import { Pagination, Autoplay } from 'swiper/modules';
// ScrollReveal
import ScrollReveal from 'scrollreveal';


export default function Testimonial() {

    ScrollReveal().reveal(".testimonial__bg", {
        origin: "bottom",
        distance: "60px",
        duration: 3000,
        delay: 800,
    })

    ScrollReveal().reveal(".testimonial__title", {
        origin: "bottom",
        distance: "60px",
        duration: 3000,
        delay: 600,
    })

    return (
        <section className="testimonial mt-[80px] xl:my-[150px]" id="testimonials">
            <div className="testimonial__bg container mx-auto bg-accent-secondary rounded-[70px] px-6">
                <div className="flex flex-col items-center py-10">
                    <h2 className="testimonial__title h2 mb-9 text-center">What clients say</h2>
                    {/* slider */}
                    <div className="w-full">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={20}
                            pagination={{
                                clickable: true
                            }}
                            autoplay={{
                                delay: 2000
                            }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1
                                },
                                960: {
                                    slidesPerView: 2
                                },
                                1200: {
                                    slidesPerView: 3
                                },
                            }}
                            modules={[Pagination, Autoplay]}
                            className='pb-16'
                        >
                            {/* slide 1 */}
                            <SwiperSlide>
                                <div
                                    className="testimonial__item w-full max-w-[450px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto">
                                    <div className="flex gap-4 mb-6">
                                        <img src="./src/assets/testimonial/01.png" alt="" />
                                        <div>
                                            <h3 className="h3">Nattasha Mith</h3>
                                            <div>Greenville, USA</div>
                                        </div>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the typesetting industry.</p>
                                </div>
                            </SwiperSlide>
                            {/* slide 2 */}
                            <SwiperSlide>
                                <div
                                    className="testimonial__item w-full max-w-[450px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto">
                                    <div className="flex gap-4 mb-6">
                                        <img src="./src/assets/testimonial/02.png" alt="" />
                                        <div>
                                            <h3 className="h3">Nattasha Mith</h3>
                                            <div>Greenville, USA</div>
                                        </div>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the typesetting industry.</p>
                                </div>
                            </SwiperSlide>
                            {/* slide 3 */}
                            <SwiperSlide>
                                <div
                                    className="testimonial__item w-full max-w-[450px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto">
                                    <div className="flex gap-4 mb-6">
                                        <img src="./src/assets/testimonial/03.png" alt="" />
                                        <div>
                                            <h3 className="h3">Nattasha Mith</h3>
                                            <div>Greenville, USA</div>
                                        </div>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the typesetting industry.</p>
                                </div>
                            </SwiperSlide>
                            {/* slide 4 */}
                            <SwiperSlide>
                                <div
                                    className="testimonial__item w-full max-w-[450px] h-[340px] bg-white rounded-[30px] flex flex-col justify-center p-9 mx-auto">
                                    <div className="flex gap-4 mb-6">
                                        <img src="./src/assets/testimonial/04.png" alt="" />
                                        <div>
                                            <h3 className="h3">Nattasha Mith</h3>
                                            <div>Greenville, USA</div>
                                        </div>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the typesetting industry.</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section >
    )
}
