// components/Testimonials.js
"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import styles from './Testimonials.module.css';



const Testimonials = ({testimonials}) => {
    return (
        <>
        <div className={styles.testimonialContainer}>
            <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 3000 }}
    loop={true}
>
    {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
            <div className={styles.testimonialSlide}>
                <p className={styles.tdes}>"{testimonial.text}"</p>
                <h4 className={styles.tn}>{testimonial.name}</h4>
                <p className={styles.title}>{testimonial.title}</p>
            </div>
        </SwiperSlide>
    ))}
</Swiper>

        </div>
        </>
    );
};

export default Testimonials;
