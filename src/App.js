import React, { Component } from "react";
// import axios from 'axios';

import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import fetchImages from "./services/imageApi";
import Spinner from "./components/Loader/Loader";

import "./App.css";

export default class App extends Component {
  state = {
    images: [],
    page: 1,
    query: "",
    selectedImg: null,
    status: "IDLE",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.query.value.toLowerCase();
    this.setState({
      query: query,
      status: "LOADING",
    });
    // e.target.elements.query.value = '';
  };

  async componentDidUpdate(prevProps, prevState) {
    try {
      const { query, page } = this.state;
      if (
        prevState.query !== this.state.query ||
        prevState.page !== this.state.page
      ) {
        const images = await fetchImages(query, page);
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          status: "RESOLVED",
        }));
      }
      this.state.page > 1 &&
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
    } catch (err) {}
  }

  handleButtonClick = () => {
    return (
      this.setState((prevState) => ({
        page: prevState.page + 1,
        status: "LOADING",
      })),
      console.log(this.state.page)
    );
  };

  onSelectImg = (src, alt) => {
    this.setState({ selectedImg: { src, alt } });
    console.log(src);
  };

  onModalClose = () => {
    this.setState({ selectedImg: null });
    // document.body.classList.remove("modal-open");
  };

  render() {
    const { images, status } = this.state;

    if (status === "IDLE") {
      return <Searchbar handleSubmit={this.handleSubmit} />;
    }

    if (status === "LOADING") {
      return (
        <>
          <Searchbar handleSubmit={this.handleSubmit} />
          <Spinner />
        </>
      );
    }

    if (status === "RESOLVED") {
      return (
        <div className="App">
          <Searchbar handleSubmit={this.handleSubmit} />
          <ImageGallery images={images} onSelectImg={this.onSelectImg} />
          <Button onClick={this.handleButtonClick} />
          {this.state.selectedImg && (
            <Modal image={this.state.selectedImg} onClose={this.onModalClose} />
          )}
        </div>
      );
    }
  }
}
