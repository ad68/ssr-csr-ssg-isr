"use server";

import axios from "axios";

type PostType = {
  createdAt: string;
  name: string;
  avatar: string;
  id: string;
};

export const getPosts = async (): Promise<PostType[]> => {
  try {
    const response = await axios.get<PostType[]>("https://677265b3ee76b92dd49226c3.mockapi.io/api/v1/posts/my-posts");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
      throw new Error(`Failed to fetch posts. Status: ${error.response?.status || "unknown"}`);
    }
    console.error("Unexpected error:", error);
    throw new Error("An unexpected error occurred while fetching posts.");
  }
};
