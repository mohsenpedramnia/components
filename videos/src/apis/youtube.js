import axios from "axios";

const KEY = "AIzaSyBm8ZIJC1CDM8d3Z8xuU7RH7qIqE7xS0Cg";

export const baseParams = {
  part: "snippet",
  maxResults: 5,
  key: KEY
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});
