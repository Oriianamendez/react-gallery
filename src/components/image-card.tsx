type Params = {
  imageSrc: string;
  description: string;
};

export const ImageCard = ({ imageSrc, description }: Params) => {
  return (
    <article>
      <img src={imageSrc} alt="image" />
      <p>{description}</p>
    </article>
  );
};
