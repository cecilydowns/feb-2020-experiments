// https://5e4dd4bc6272aa00142301cf.mockapi.io/posts

export const getPosts = async (page: string, limit: string) => {
  const posts = await fetch(
    `https://5e4dd4bc6272aa00142301cf.mockapi.io/posts&p=${page}&l=${limit}`
  );
  const json = await posts.json();
  return json;
};
