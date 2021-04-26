import React, { useState, useEffect, useCallback } from "react";
import SearchBar from "../Searchbar/Searchbar";
import s from "../App/App.module.css";
import Button from "../Button/Button";
import ImageGallery from "../ImageGallery/ImageGallery";

import Loader from "../Loader/Loader";
import * as API from "../../services/apiImg";
//==================================

// import apiImg from '../../services/apiImg';
// import shortid from 'shortid';

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [seachQuery, setSeachQuery] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (seachQuery === "") {
      return;
    }

    fetchImg(seachQuery, page);
  }, [seachQuery, page]);

  const fetchImg = (seachQuery, page) => {
    setIsLoading(true);

    API.getImages(seachQuery, page)
      .then((responseData) => {
        // console.log(responseData);
        setImages((prevImg) => [...prevImg, ...responseData.data.hits]);
        setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      })
      .catch((error) => setError(true))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const incrementPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const onChangeQuery = useCallback((seachQuery) => {
    setSeachQuery(seachQuery);
    setIsLoading(true);
    setPage(1);
    setImages([]);
    setError(null);
  }, []);
  const shouldRenderLoadMoreButton = images.length > 11 && !isLoading;

  return (
    <div className={s.container}>
      <SearchBar onSubmit={onChangeQuery} />
      {error && <h1>No image found</h1>} {isLoading && <Loader />}
      {!isLoading && <ImageGallery images={images} />}
      {shouldRenderLoadMoreButton && <Button onClick={incrementPage} />}{" "}
    </div>
  );
}
//===========================================
// class App extends Component {
//   state = {
//     images: [],
//     isLoading: false,
//     error: null,
//     currentPage: 1,
//     seachQuery: "",
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const { seachQuery, currentPage } = this.state;
//     if (prevState.searchQuery !== this.state.searchQuery) {
//       this.fetchImg(seachQuery, currentPage);
//     }
//   }

//   onChangeQuery = (seachQuery) => {
//     this.setState({ seachQuery, isLoading: true });
//     API.getImages(seachQuery)
//       .then((responseData) => {
//         // console.log('prevState', prevState);
//         this.setState({ images: responseData.data.hits });
//       })
//       .catch((error) => this.setState({ error: true }))
//       .finally(() => this.setState({ isLoading: false }));
//   };
//   fetchImg = () => {
//     const { seachQuery, currentPage } = this.state;
//     // const options = { seachQuery, currentPage };
//     API.getImages(seachQuery, currentPage + 1)
//       .then((responseData) => {
//         //console.log(prevState);
//         this.setState((prevState) => ({
//           images: [...prevState.images, ...responseData.data.hits],

//           currentPage: prevState.currentPage + 1,
//         }));
//       })
//       .catch((error) => this.setState({ error: true }))
//       .finally(() => this.setState({ isLoading: false }));
//   };

//   render() {
//     const { images, isLoading, error } = this.state;
//     const shouldRenderLoadMoreButton = images.length > 11 && !isLoading;
//     return (
//       <div className={s.container}>
//         <SearchBar onSubmit={this.onChangeQuery} />
//         {error && <h1>No image found</h1>}
//         {/* {isLoading ? <Loader /> : <ImageGallery images={images} />}
//         {shouldRenderLoadMoreButton && <Button onClick={this.fetchImg} />} */}
//         {isLoading && <Loader />}
//         {!isLoading && <ImageGallery images={images} />}
//         {shouldRenderLoadMoreButton && <Button onClick={this.fetchImg} />}
//       </div>
//     );
//   }
// }
// export default App;
