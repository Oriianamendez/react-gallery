import { useEffect, useState } from "react";
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
    imageSrc: "https://picsum.photos/id/255/200/300",
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
  const [data, setData] = useState(null);

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      fetch(`https://api.unsplash.com/search/photos?query=${"horse"}`, {
        headers: {
          Authorization: `Client-ID ${import.meta.env.VITE_API_KEY}`,
        },
      })
        .then((res) => res.json())
        .then((res) => setData(res));
    }
    return () => {
      ignore = true;
    };
  }, []);
  console.log(data);
  return (
    <>
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
      <button>Prev</button>
      <button>Next</button>
    </>
  );
};
