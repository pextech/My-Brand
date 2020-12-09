import path from "path";
import chai, { expect, should } from "chai";
import chaiHttp from "chai-http";
import mocha from "mocha";
import Post from "../modal/blog";
import server from "../index";
import mockdata from "./mockdata";
import Comment from "../modal/comment";
import User from "../modal/user";

const { it, describe, beforeEach, afterEach } = mocha;

chai.should();

chai.use(chaiHttp);

const testPost = {
  Author: "issa",
  Title: "this is awesome",
  Content: "bla bla bla bla",
};

describe("Api Endpoints", () => {
  beforeEach(async () => {
    await Post.deleteMany({});
  });

  afterEach(async () => {
    await Post.deleteMany({});
  });

  it("should create post", async () => {
    const res = await chai
      .request(server)
      .post("/shema/blog")
      .field("Author", testPost.Author)
      .field("Title", testPost.Title)
      .field("Content", testPost.Content)
      .attach("image", path.resolve(__dirname, "./uploads/test.jpg"));
    res.should.have.status(201);
    res.body.should.have.property("data");
  });

  it("should ask for description post", async () => {
    const res = await chai
      .request(server)
      .post("/shema/blog")
      .field("Author", testPost.Author)
      .field("Titlle", testPost.Title)
      .field("Content", testPost.Content)
      .attach("image", path.resolve(__dirname, "./uploads/test.jpg"));
    res.should.have.status(400);
  });

  it("Duplicate error", async () => {
    let res = await chai
      .request(server)
      .post("/shema/blog")
      .field("Author", testPost.Author)
      .field("Title", testPost.Title)
      .field("Content", testPost.Content)
      .attach("image", path.resolve(__dirname, "./uploads/test.jpg"));

    res = await chai
      .request(server)
      .post("/shema/blog")
      .field("Author", testPost.Author)
      .field("Title", testPost.Title)
      .field("Content", testPost.Content)
      .attach("image", path.resolve(__dirname, "./uploads/test.jpg"));
    res.should.have.status(400);
  });

  it("should get all Posts", async () => {
    const res = await chai.request(server).get("/shema/blog");

    res.should.have.status(201);
    res.body.should.have.property("data");
  });

  it("should get post by ID", async () => {
    const post = await Post.create(testPost);
    await post.save();

    const res = await chai.request(server).get(`/shema/blog/${post.id}`);
  });

  it("should not get any post", async () => {
    const res = await chai.request(server).get("/shema/blog/test");

    res.should.have.status(500);
  });

  it("should add comment", async () => {
    const mockComment = {
      name: "shema christian",
      message: "issa you did a great job",
    };
    const post = await Post.create(testPost);
    await post.save();

    const comment = await Comment.create(mockComment);
    await comment.save();

    const res = await chai
      .request(server)
      .post(`/shema/blog/${post._id}/comments`)
      .send(mockComment);
  });

  it("should delete post", (done) => {
    chai
      .request(server)
      .post("/shema/user/register")
      .send(mockdata.signUpUser)
      .then(() => {
        chai
          .request(server)
          .post("/shema/user/login")
          .send(mockdata.loginUser)
          .then((res) => {
            Post.create(testPost).then((post) => {
              chai
                .request(server)
                .set("Bearer", `${res.body.token}`)
                .delete(`/shema/blog/${post._id}`)
                .send(mockComment)
                .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.have.property("msg");
                  done();
                });
              s;
            });
          });
      });
    done();
  });
});
