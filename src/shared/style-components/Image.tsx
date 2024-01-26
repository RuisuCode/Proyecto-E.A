import { Component } from "react";
import IMG from "../assets/banner-sinfondo.png";
class Image extends Component {
  render() {
    return (
      <img
        width={"240px"}
        height={"auto"}
        style={{ marginBottom: 0 }}
        src={IMG}
      />
    );
  }
}

export default Image;
