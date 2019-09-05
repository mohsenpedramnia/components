import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 11ad1a90fb03fccddcd2d560f903445e1b2577177c44be9d3fdf769c50e0a27c"
  }
});
