import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0, // track the index of the currently active image
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"], // Default image when no images are provided
  };

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state; // destructure active from state
    const { images } = this.props; // destructure images from props
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              onClick={this.handleIndexClick}
              data-index={index}
              key={photo}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
