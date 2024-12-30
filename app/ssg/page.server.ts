"use server";
import axios from "axios";
type postType = {
  createdAt: string;
  name: string;
  avatar: string;
  id: string;
};

export const getPosts = async (): Promise<postType[]> => {
  try {
    const result = await axios.get<postType[]>("https://677265b3ee76b92dd49226c3.mockapi.io/api/v1/posts/my-posts");
    return result?.data;
  } catch (error) {
    throw error;
  }
};
