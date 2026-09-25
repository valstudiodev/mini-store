import { routeMap } from "@/app/routes/routeMap";
import { Title } from "@/shared/typography";
import { Section } from "@/shared/primitives";
import '../styles/hero-section.scss';
import Container from "@/shared/primitives/Container/Container";
import LinkButton from "@/shared/ui/LinkButton/ui/LInkButton";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { heroImages } from "../model/hero-data";
import 'swiper/css/navigation';
import type { Swiper as SwiperInstance } from 'swiper'
import { useEffect, useRef } from "react";
import ButtonSlider from "./ButtonSlider";

function HeroSection(): React.JSX.Element {
  const heroSection = 'hero-section'

  const swiperRef = useRef<SwiperInstance | null>(null)

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const swiper = swiperRef.current
    const prevButton = prevRef.current
    const nextButton = nextRef.current

    if (!swiper || !prevRef.current || !nextRef.current) return

    const navigation = swiper.params.navigation

    if (navigation && typeof navigation !== 'boolean') {
      navigation.prevEl = prevButton
      navigation.nextEl = nextButton
    }

    swiper.navigation.destroy()
    swiper.navigation.init()
    swiper.navigation.update()

  }, []);

  return (
    <Section className={heroSection}>
      <div className={`${heroSection}__inner`}>
        <ButtonSlider
          disabled={true}
          ariaLabel='previuos button'
          ref={prevRef}
          className='prev'
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="67" height="128" viewBox="0 0 67 128" fill="none">
            <path d="M64.8171 126.414L2.81714 63.4143L64.8171 1.41431" stroke="currentColor" stroke-width="4" />
          </svg>
        </ButtonSlider>
        <Container className={`${heroSection}__container`}>
          <div className={`${heroSection}__body`}>
            <div className={`${heroSection}__content`}>
              <Title
                as="h1"
                className={`${heroSection}__title`}
              >
                Your Products are great.
              </Title>
              <LinkButton
                href={routeMap.pages.path}
                variant="primary"
                className={`${heroSection}__btn`}
              >
                Shop Product
              </LinkButton>
            </div>
            <div className={`${heroSection}__slider`}>
              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper
                }}
                modules={[Navigation]}
                slidesPerView={1}
                className={`${heroSection}__swiper mySwiper`}>
                <div className={`${heroSection}__wrap`}>
                  {heroImages.map((img) => (
                    <SwiperSlide className={`${heroSection}__slide`}>
                      <img
                        className={`${heroSection}__img`}
                        src={img.imageUrl} alt={img.title ?? ''} />
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>
            </div>
          </div>
        </Container>
        <ButtonSlider
          disabled={true}
          ariaLabel="next button"
          ref={nextRef}
          className="next"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="67" height="128" viewBox="0 0 67 128" fill="none">
            <path d="M64.8171 126.414L2.81714 63.4143L64.8171 1.41431" stroke="currentColor" stroke-width="4" />
          </svg>
        </ButtonSlider>
      </div>
    </Section>
  );
}

export default HeroSection;