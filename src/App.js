import React, { Component } from "react";

import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import fetchImages from "./services/imageApi";
import Spinner from "./components/Loader/Loader";
import toast, { Toaster } from "react-hot-toast";

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

    if (!query.trim()) {
      this.setState({
        page: 1,
        status: "IDLE",
      });
      return toast.error("Enter query");
    }

    if (this.state.query === query) {
      return;
    }

    this.setState({
      query: query,
      page: 1,
      images: [],
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ status: "LOADING" });
        const images = await fetchImages(query, page);
        if (!images.length) {
          throw new Error();
        }

        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          status: "RESOLVED",
        }));
      } catch (err) {
        toast.error("wrong query");
        this.setState({ status: "ERROR" });
        return;
      }
    }

    this.state.page > 1 &&
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
  }

  handleButtonClick = () => {
    return this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  onSelectImg = (src, alt) => {
    this.setState({ selectedImg: { src, alt } });
    console.log(src);
  };

  onModalClose = () => {
    this.setState({ selectedImg: null });
  };

  render() {
    const { images, status } = this.state;
    return (
      <div className={App}>
        <Searchbar handleSubmit={this.handleSubmit} />
        {(status === "IDLE" || status === "ERROR") && (
          <Toaster position="top-right" />
        )}
        {(status === "LOADING" || status === "RESOLVED") && (
          <ImageGallery images={images} onSelectImg={this.onSelectImg} />
        )}
        {status === "LOADING" && <Spinner />}
        {status === "RESOLVED" && (
          <div className="App">
            <Button onClick={this.handleButtonClick} />
            {this.state.selectedImg && (
              <Modal
                image={this.state.selectedImg}
                onClose={this.onModalClose}
              />
            )}
          </div>
        )}
      </div>
    );
  }
}
