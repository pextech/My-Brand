import path from "path";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import mocha from "mocha";
import Post from "../modal/user";
import server from "../index";
const { it, describe, beforeEach, afterEach } = mocha;

chai.should();

chai.use(chaiHttp);

const mockUser = {
  name: "user1",
  email: "azertshema@gmail.com",
  password: "kn88chr4!cross1",
};

const mockLogin = {
  email: "azertshema@gmail.com",
  password: "kn88chr4!cross1",
};

describe("Testing user", () => {
  //   beforeEach(async () => {
  //     await Post.deleteMany({});
  //   });

  //   afterEach(async () => {
  //     await Post.deleteMany({});
  //   });

  it("should register user", (done) => {
    chai
      .request(server)
      .post("/shema/user/register")
      .send(mockUser)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property("token");
        done();
      });
  });

  it("should login user", (done) => {
    chai
      .request(server)
      .post("/shema/user/login")
      .send(mockLogin)
      .end((err, res) => {
        if (err) {
          throw error;
        }
        res.should.have.status(200);
        res.body.should.have.property("token");
        done();
      });
  });
});
