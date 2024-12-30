"use server";
/* "use server";
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
 */

type PostType = {
  createdAt: string;
  name: string;
  avatar: string;
  id: string;
};

export const getPosts = async (): Promise<PostType[]> => {
  try {
    const response = await fetch("https://677265b3ee76b92dd49226c3.mockapi.io/api/v1/posts/my-posts");

    if (!response.ok) {
      throw new Error(`Failed to fetch posts. Status: ${response.status}`);
    }

    const data: PostType[] = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching posts:", error.message);
      throw new Error(error.message);
    }
    console.error("Unexpected error:", error);
    throw new Error("An unexpected error occurred.");
  }
};
