const mockdata = {
  signUpUser: {
    name: "shema christian",
    email: "azertshema@gmail.com",
    password: "James@2020",
  },
  signUpInvalid: {
    name: "J",
    email: "jimnyagtr@gmail.com",
    password: "James@2020",
  },
  loginUser: {
    email: "jimnyagtr@gmail.com",
    password: "James@2020",
  },
  loginInvalidUser: {
    email: "jim",
    password: "James@2020",
  },
  query: {
    name: "James",
    email: "james@gmail.com",
    message: "test message",
  },
  blogPost: {
    title: "blog title",
    content: "This is a blog content",
  },
  postComment: { comment: "This blog post is interesting!!!" },
};
export default mockdata;
