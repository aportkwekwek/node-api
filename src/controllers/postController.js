const posts = [
  {
    id: 1,
    title: "Post 1",
    content: "This is the content of Post 1",
  },
  {
    id: 2,
    title: "Post 2",
    content: "This is the content of Post 2",
  },
];

const getPosts = () => posts;

export const getPostsLength = () => posts.length;

export default getPosts;
