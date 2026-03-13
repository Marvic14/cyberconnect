import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import "./CategoriaCarousel.scss";
import { useNavigate } from 'react-router-dom'; // 1. Importar o hook

export const CategoriaCarousel = ({ itens }) => {
    const navigate = useNavigate(); // 2. Inicializar o hook
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            loop={itens.length > 2}
            spaceBetween={1}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
                0: {
                    slidesPerView: 1.2,
                },
                768: {
                    slidesPerView: 1.5,
                },
                1024: {
                    slidesPerView: 2.2,
                },
            }}
        >
            {itens.map((cat, index) => (
                <SwiperSlide key={cat.id || index}>
                    <div
                        className="div-item"
                        onClick={() => navigate(`/products?categoria=${cat.titulo}`)} // Note o /products (em inglês como no seu App.jsx)
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="div-image-products">
                            <img src={cat.img} alt={cat.titulo} />
                        </div>
                        <h3>{cat.titulo}</h3>
                        <div className="orange"></div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};