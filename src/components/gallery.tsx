import { useState } from "react";
import { ImageCard } from "./image-card";
import { Search } from "./search";
import { useQuery } from "@tanstack/react-query";
//import { getImages } from "../services/services";

type ImageData = {
  imageSrc: string;
  description: string;
};

export const Gallery = () => {
  const [search, setSearch] = useState<string | null>(null);

  const onSearch = (query: string) => {
    setSearch(query);
  };

  const { data } = useQuery({
    queryKey: ["images", search],
    queryFn: async () => {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${search}`,
        {
          headers: {
            Authorization: `Client-ID ${import.meta.env.VITE_API_KEY}`,
          },
        },
      );
      return response.json();
    },
  });

  return (
    <>
      <Search onSearch={onSearch} />
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
