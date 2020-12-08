import Query from "../modal/query";

class Query {
  static async create(req, res, next) {
    const query = await Query.create(req.body);
    return res.status(200).json({ success: true, data: query });
  }
}

export default Query;
