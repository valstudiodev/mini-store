import { InstaLinksItem } from "./instaLInks-types";
import image1 from "@/assets/img/home/insta-img-01.webp";
import image2 from "@/assets/img/home/insta-img-02.webp";
import image3 from "@/assets/img/home/insta-img-03.webp";
import image4 from "@/assets/img/home/insta-img-04.webp";
import image5 from "@/assets/img/home/insta-img-05.webp";

const images: string[] = [
  image1,
  image2,
  image3,
  image4,
  image5,
]

export const instaLinks: InstaLinksItem[] = images.map(
  (image) => ({
    id: crypto.randomUUID(),
    image,
  })
)