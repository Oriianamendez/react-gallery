import { ImageCard } from "./image-card";

type ImageData = {
  imageSrc: string;
  description: string;
};

const images: ImageData[] = [
  {
    imageSrc: "https://picsum.photos/id/237/200/300",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, unde?",
  },
  {
    imageSrc: "https://picsum.photos/id/237/200/300",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, unde?",
  },
  {
    imageSrc: "https://picsum.photos/id/237/200/300",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, unde?",
  },
  {
    imageSrc: "https://picsum.photos/id/237/200/300",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, unde?",
  },
  {
    imageSrc: "https://picsum.photos/id/237/200/300",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, unde?",
  },
];

export const Gallery = () => {
  return (
    <div>
      {images.map((image, index) => {
        return (
          <ImageCard
            key={index}
            imageSrc={image.imageSrc}
            description={image.description}
          />
        );
      })}
    </div>
  );
};
