import path from "path";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import mocha from "mocha";
import User from "../modal/user";
import server from "../index";
import mockdata from "./mockdata";
const { it, describe, beforeEach, afterEach } = mocha;

chai.should();

chai.use(chaiHttp);

describe("Testing user", () => {
  beforeEach(async () => {
    await User.deleteMany({});
  });

  afterEach(async () => {
    await User.deleteMany({});
  });

  it("should register user", (done) => {
    chai
      .request(server)
      .post("/shema/user/register")
      .send(mockdata.signUpUser)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property("token");
        done();
      });
  });

  it("should login user", (done) => {
    chai
      .request(server)
      .post("/shema/user/register")
      .send(mockdata.signUpUser)
      .then(() => {
        chai
          .request(server)
          .post("/shema/user/login")
          .send(mockdata.loginUser)
          .end((err, res) => {
            if (err) {
              throw error;
            }
            console.log(res.body);
            res.should.have.status(200);
            res.body.should.have.property("token");
            done();
          });
      });
  });
  it("should not loginUser", (done) => {
    chai
      .request(server)
      .post("/shema/user/login")
      .send(mockdata.loginUser1)
      .end((err, res) => {
        res.should.have.status(401);
        // res.body.should.have.property("token");
        done();
      });
  });
});
