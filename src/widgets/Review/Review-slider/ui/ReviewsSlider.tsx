import { reviews } from "@/entities/review/model/reviewItem-data";
import ReviewItem from "@/entities/review/ui/ReviewItem";
import { Section } from "@/shared/primitives";
import Container from "@/shared/primitives/Container/Container";
import ButtonReviewSlider from "../../ButtonReviewSlider/ui/ButtonReviewSlider";
import { useRef, useState } from "react";
import { Swiper as SwiperInstance } from 'swiper'
import { SwiperSlide, Swiper } from "swiper/react";
import '../styles/reviewSlider.scss';


function ReviewsSlider(): React.JSX.Element {
  const reviewsSlider = 'reviews-slider'

  const swiperRef = useRef<SwiperInstance | null>(null)

  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState(reviews.length <= 1);

  const updateNavigation = (swiper: SwiperInstance): void => {
    setIsBeginning(swiper.isBeginning)
    setIsEnd(swiper.isEnd)
  }

  return (
    <Section className={reviewsSlider}>
      <Container className={`${reviewsSlider}__container`}>
        <div className={`${reviewsSlider}__body`}>
          <ButtonReviewSlider
            aria-label="Previous reviews"
            className={`${reviewsSlider}__btn-prev`}
            disabled={isBeginning}
            onClick={() => swiperRef?.current?.slidePrev()}
          />

          <div className={`${reviewsSlider}__slider`}>
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              slidesPerView={1}
              onSlideChange={updateNavigation}
              onReachBeginning={() => setIsBeginning(true)}
              onReachEnd={() => setIsEnd(true)}
              className={`${reviewsSlider}__swiper mySwiper`}
            >
              {reviews.map((review) => (
                <SwiperSlide
                  key={review.id}
                  className={`${reviewsSlider}__slide`}
                >
                  <ReviewItem review={review} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <ButtonReviewSlider
            aria-label="Next reviews"
            disabled={isEnd}
            onClick={() => swiperRef?.current?.slideNext()}
            className={`${reviewsSlider}__btn-next`}
          />
        </div>
      </Container>
    </Section>
  );
}

export default ReviewsSlider
