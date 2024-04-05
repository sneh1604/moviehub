const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: "8cf148366d2bdd704114756cf9afe545",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
