export const getImages = async (search: string) => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${search}`,
    {
      headers: {
        Authorization: `Client-ID ${import.meta.env.VITE_API_KEY}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error();
  }
  return await response.json();
};
