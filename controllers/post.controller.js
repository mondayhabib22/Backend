import { Post } from "../models/post.model.js";

// Create a new post
const createPost = async (req, res) => {
  try {
    const { name, description, age } = req.body;
    if (!name || !description || !age) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const post = await Post.create({
      name,
      description,
      age,
    });

    res.status(201).json({
      message: "Post created successfully",
      post,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating post", error: error.message });
  }
};
//Read a post
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json({ posts });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
}

//Update a post
const updatePost = async (req, res) => {
  try {
    //Basic vallidation to check if the body is empty or not
    if (Object.keys(req.body ).length === 0) {
      return res.status(400).json({ message: "Request body is empty" });
    }

    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });

  } catch (error) {
    
  }
}

export { createPost, getPosts };
