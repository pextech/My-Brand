import path from "path";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import mocha from "mocha";
import Post from "../modal/blog";
import server from "../index";
// import { stub } from "sinon";
// import uploader from "../config/cloudinary";
const { it, describe, beforeEach, afterEach } = mocha;

chai.should();

chai.use(chaiHttp);

// const images = "https://pixabay.com/vectors/avatar-icon-placeholder-1577909/";
// stub(uploader, "upload").resolves({ url: images });

const testPost = {
  Author: "issa",
  Title: "this is awesome",
  Content: "bla bla bla bla",
};

describe("Api Endpoints", async () => {
  beforeEach(async () => {
    await Post.deleteMany({});
  });

  afterEach(async () => {
    await Post.deleteMany({});
  });
  // Test creating post
  describe("POST shema/blog", () => {
    it("should create post", (done) => {
      chai
        .request(server)
        .post("/shema/blog")
        .set()
        .field("Author", testPost.Author)
        .field("Title", testPost.Title)
        .field("Content", testPost.Content)
        .attach("image", path.resolve(__dirname, "./uploads/test.jpg"))
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.have.property("data");
          done();
        });
    });

    it("should  ask  description of post", (done) => {
      chai
        .request(server)
        .post("/shema/blog")
        .field("Author", testPost.Author)
        .field("Titlhje", testPost.Title)
        .field("Content", testPost.Content)
        .attach("image", path.resolve(__dirname, "./uploads/test.jpg"))
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.have.property("error");
          done();
        });
    });

    it("should duplicate post", (done) => {
      chai
        .request(server)
        .post("/shema/blog")
        .field("Author", testPost.Author)
        .field("Title", testPost.Title)
        .field("Content", testPost.Content)
        .attach("image", path.resolve(__dirname, "./uploads/test.jpg"))
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.have.property("error");
          done();
        });
      chai
        .request(server)
        .post("/shema/blog")
        .field("Author", testPost.Author)
        .field("Title", testPost.Title)
        .field("Content", testPost.Content)
        .attach("image", path.resolve(__dirname, "./uploads/test.jpg"))
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.have.property("error");
          done();
        });
    });
  });

  // Test Get all post
  describe("GET shema/blog", () => {
    it("should get all posts", (done) => {
      chai
        .request(server)
        .get("/shema/blog")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
    it("should not get all posts", (done) => {
      chai
        .request(server)
        .get("/shema/blog/test")
        .end((err, res) => {
          res.should.have.status(500);
          //   res.body.should.have.property("msg");
          done();
        });
    });
    // Test get post By ID
    describe("GET shema/posts/:id", () => {
      it("should get post by ID", (done) => {
        Post.create(testPost).then((post) => {
          chai
            .request(server)
            .get(`/shema/blog/${post.id}`)
            .end((err, res) => {
              res.should.have.status(200);
              done();
            });
        });
      });

      it("should not get post by ID", (done) => {
        chai
          .request(server)
          .get(`/shema/blog/penetration`)
          .end((err, res) => {
            res.should.have.status(500);
            done();
          });
      });
    });
  });

  // Testing comment
  describe("should add comment", () => {
    const mockComment = {
      name: "shema christian",
      message: "issa you did a great job",
    };
    it("should add one comment", (done) => {
      Post.create(testPost).then((post) => {
        chai
          .request(server)
          .post(`/shema/blog/${post._id}/comments`)
          .send(mockComment)
          .end((err, res) => {
            res.should.have.status(201);
            res.body.should.have.property("msg");
            done();
          });
      });
    });

    // it("should return error ", (done) => {
    //   Post.create(testPost).then((post) => {
    //     chai
    //       .request(server)
    //       .post(`/shema/posts/${post._id}/comments`)
    //       .send(mockComment.name)
    //       .end((err, res) => {
    //         if (err) {
    //           throw err;
    //         }
    //         console.log(res);
    //         res.should.have.status(400);
    //         res.body.should.have.property("error");
    //       });
    //     done();
    //   });
    // });
  });
});
