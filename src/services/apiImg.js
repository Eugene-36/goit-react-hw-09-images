// import axios from 'axios';
// const apiKey = '19817444-e2944238b0133b6bab479e2af';
// const fetchImg = ({ searchQuery = '', currentPage = 1 }) => {
//   return axios
//     .get(
//       `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`,
//     )
//     .then(response => response.data.images);
// };

// export default fetchImg;

import axios from 'axios';

const key = '19817444-e2944238b0133b6bab479e2af';

export const getImages = (seachQuery = '', currentPage = 1) => {
  const path = `https://pixabay.com/api/?q=${seachQuery}&page=${currentPage}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;
  return axios.get(path);
};

export const someFetch = () => {};
