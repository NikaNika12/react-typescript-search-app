export default class PostService {
  static async getCommentsByPostId(id: number) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    return await response.json();
  }

  static async getAll(limit = "10", page = "1") {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?" +
        new URLSearchParams({
          _limit: limit,
          _page: page,
        })
    );
    return response.json();
  }

  static async getById(id: number) {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/" + id
    );
    return await response.json();
  }
}
