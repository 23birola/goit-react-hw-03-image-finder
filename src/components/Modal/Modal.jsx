import { Component } from "react";
import css from './Modal.module.css'



export default class Modal extends Component {

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    const { onClose } = this.props;

    if (e.code === "Escape") {
      onClose();
    }
  };

  handleOverlayClick = (e) => {
    const { onClose } = this.props;

    if (e.target !== e.currentTarget) {
      return;
    }
    onClose();
  };

    render() {
        const { image } = this.props;
        return (
            <div className={css.overlay} onClick={this.handleOverlayClick}>
                <div className={css.modal}>
                     <img src={image.src} alt={image.alt} width='800' height='600'/>
                 </div>
            </div>
        );
    }
}
