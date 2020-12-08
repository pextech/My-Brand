import uploader from "../config/cloudinary";
import errorResponse from "../util/errorResponse";
import Post from "../modal/blog";

class Blog {
  static async create(req, res, next) {
    const post = await Post.create({
      ...req.body,
      imageUrl: "",
      imageId: "",
      time: Date.now(),
    });

    if (req.files) {
      const tmp = req.files.image.tempFilePath;
      const result = await uploader.upload(tmp, (_, result) => result);
      post.imageUrl = result.url;
      post.imageId = result.public_id;
      post.save();

      return res.status(201).json({ success: true, data: post });
    }
  }

  static async getAll(req, res, next) {
    const post = await Post.find();
    res.status(200).json({ success: true, count: post.length, data: post });
  }

  static async getOne(req, res, next) {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return next(
        new errorResponse(`Post not found with id of ${req.params.id}`, 404)
      );
    }

    return res.status(200).json({ success: true, data: post });
  }

  static async update(req, res, next) {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!post) {
      return next(
        new errorResponse(`Post not found with id of ${req.params.id}`, 404)
      );
    }

    return res.status(200).json({ success: true, data: post });
  }

  static async delete(req, res, next) {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return next(
        new errorResponse(`Post not found with id of ${req.params.id}`, 404)
      );
    }
    return res
      .status(200)
      .json({ success: true, msg: "successfully delete post" });
  }
}

export default Blog;
