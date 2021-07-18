import React, { Component } from "react";
// import axios from 'axios';

import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import fetchImages from "./services/imageApi";
import "./App.css";

export default class App extends Component {
  state = {
    images: [],
    page: 1,
    query: "",
    status: "IDLE",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.elements.query.value.toLowerCase();
    this.setState({ query: query });
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

  // axios
  //   .get(`https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page}&key=21757079-036beeeb18b1a04124bd9f213&image_type=photo&orientation=horizontal&per_page=12`)
  //   .then(response => this.setState((prevState) => ({
  //     images: [...prevState.images, ...response.data.hits],
  //     status: 'RESOLVED'
  //   })))
  // .catch(error => this.setState({ status: 'REJECTED' }))
  // .finally(() => this.setState({
  //   // status: 'resolved',
  //   // query: ''
  // }));

  // }
  // }

  handleButtonClick = () => {
    return (
      this.setState((prevState) => ({ page: prevState.page + 1 })),
      console.log(this.state.page)
    );
  };

  render() {
    const { images, status } = this.state;

    if (status === "IDLE") {
      return <Searchbar handleSubmit={this.handleSubmit} />;
    }

    if (status === "RESOLVED") {
      return (
        <div className="App">
          <Searchbar handleSubmit={this.handleSubmit} />
          <ImageGallery images={images} />
          <Button onClick={this.handleButtonClick} />
        </div>
      );
    }
  }
}
