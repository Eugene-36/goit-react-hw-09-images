import React, { Component } from "react";
import SearchBar from "../Searchbar/Searchbar";
import s from "../App/App.module.css";
import Button from "../Button/Button";
import ImageGallery from "../ImageGallery/ImageGallery";

import Loader from "../Loader/Loader";
import * as API from "../../services/apiImg";
// import apiImg from '../../services/apiImg';
// import shortid from 'shortid';

class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    currentPage: 1,
    seachQuery: "",
  };

  componentDidUpdate(prevProps, prevState) {
    const { seachQuery, currentPage } = this.state;
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImg(seachQuery, currentPage);
    }
  }

  onChangeQuery = (seachQuery) => {
    this.setState({ seachQuery, isLoading: true });
    API.getImages(seachQuery)
      .then((responseData) => {
        // console.log('prevState', prevState);
        this.setState({ images: responseData.data.hits });
      })
      .catch((error) => this.setState({ error: true }))
      .finally(() => this.setState({ isLoading: false }));
  };
  fetchImg = () => {
    const { seachQuery, currentPage } = this.state;
    // const options = { seachQuery, currentPage };
    API.getImages(seachQuery, currentPage + 1)
      .then((responseData) => {
        //console.log(prevState);
        this.setState((prevState) => ({
          images: [...prevState.images, ...responseData.data.hits],

          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch((error) => this.setState({ error: true }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { images, isLoading, error } = this.state;
    const shouldRenderLoadMoreButton = images.length > 11 && !isLoading;
    return (
      <div className={s.container}>
        <SearchBar onSubmit={this.onChangeQuery} />
        {error && <h1>No image found</h1>}
        {/* {isLoading ? <Loader /> : <ImageGallery images={images} />}
        {shouldRenderLoadMoreButton && <Button onClick={this.fetchImg} />} */}
        {isLoading && <Loader />}
        {!isLoading && <ImageGallery images={images} />}
        {shouldRenderLoadMoreButton && <Button onClick={this.fetchImg} />}
      </div>
    );
  }
}
export default App;
