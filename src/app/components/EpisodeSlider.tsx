'use client';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import Image from "next/image";
import Link from "next/link";

import styles from '@/src/app/styles/EpisodeSlider.module.scss'
import "swiper/css";
import "swiper/css/pagination";

interface Episode {
  [x: string]: any;
}
interface EpisodeSliderProps {
  episodes: Episode[];
}

export const EpisodeSlider = ({ episodes }: EpisodeSliderProps) => {
  return (
    <>
      <div className={styles.swiper_wrap}>
        <Swiper
          spaceBetween={25}
          slidesPerView={1.4}
          modules={[Pagination]}
          pagination={{
            type: "bullets",
            el: ".custom-swiper-pagination",
            clickable: true,
          }}
        >
          {episodes .map((episode) => (
            <SwiperSlide key={episode.id}>
              <div className={styles.episode}>
                <Link href={`/episodes/${episode.properties.slug.rich_text[0].plain_text}/${episode.id}`}>
                  <div className={styles.episode__img}>
                    <Image
                      src={`/episodes/${episode.properties.thumbnail.rich_text[0].plain_text}`}
                      alt={`${episode.properties.title.title[0].plain_text}`}
                      width={330}
                      height={186}
                    />
                  </div>
                  <div className={styles.episode__inner}>
                    <div className={styles.episode__detail}>
                      <span>#{episode.properties.number.number}</span>
                      <h3>{episode.properties.title.title[0].plain_text}</h3>
                    </div>
                    <div className={styles.episode__bottom}>
                      <time>{episode.properties.date.date.start}</time>
                      <div>Listen</div>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-swiper-pagination"></div>
      </div>
    </>
  );
}
