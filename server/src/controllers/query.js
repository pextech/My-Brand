import Queries from "../modal/query";

class Query {
  static async create(req, res, next) {
    const query = await Queries.create(req.body);
    return res.status(200).json({ success: true, data: query });
  }

  static async getAll(req, res, next) {
    const query = await Queries.find();
    return res
      .status(200)
      .json({ success: true, count: query.length, data: query });
  }
}

export default Query;
