import axios from "axios";

const publicClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 15_000,
});

/**
 * Example third-party / public API (no env base URL).
 * Replace with real endpoints wired to `apiClient` when your backend exists.
 */
export async function fetchExamplePosts(limit = 5) {
  const { data } = await publicClient.get("/posts", {
    params: { _limit: limit },
  });
  return data;
}
