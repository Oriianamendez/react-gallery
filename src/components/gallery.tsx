import { useEffect, useState } from "react";
import { ImageCard } from "./image-card";
import { Search } from "./search";
// import { useQuery } from "@tanstack/react-query";
import { getImages } from "../services/services";

type ImageData = {
  imageSrc: string;
  description: string;
};

export const Gallery = () => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState<string | null>(null);

  const onSearch = (query: string) => {
    setSearch(query);
  };

  useEffect(() => {
    let ignore = false;
    if (!search) {
      return;
    }
    if (!ignore) {
      getImages(search).then((res) => setData(res));
    }
    return () => {
      ignore = true;
    };
  }, [search]);

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
