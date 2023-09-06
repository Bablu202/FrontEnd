import React from "react";
import "./Header.css";
import SubHeading from "../../components/SubHeading/SubHeading";
import { images } from "../../constants";

export default function Header() {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="chase the new Flavour" />
        <h1 className="app__header-h1">The Key to fine Dining</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus{" "}
        </p>
        <button className="custom__button">Explore More..</button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.chef} alt="Here" style={{ width: "50%" }} />
      </div>
    </div>
  );
}
