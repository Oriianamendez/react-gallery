import { useEffect, useState } from "react";
import { ImageCard } from "./image-card";

type ImageData = {
  imageSrc: string;
  description: string;
};

export const Gallery = () => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      fetch(`https://api.unsplash.com/search/photos?query=${"duck"}`, {
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
  }, [search]);

  return (
    <>
      <div>
        {data ? (
          data.results.map((image, index) => {
            return (
              <ImageCard
                key={index}
                imageSrc={image.urls.small}
                description={image.description}
              />
            );
          })
        ) : (
          <p>Nothing here</p>
        )}
      </div>
      <button>Prev</button>
      <button>Next</button>
    </>
  );
};
