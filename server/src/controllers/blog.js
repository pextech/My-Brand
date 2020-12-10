import uploader from "../config/cloudinary";
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
}

export default Blog;
