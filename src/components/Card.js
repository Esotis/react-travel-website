import React from "react";
import "../css/Card.css";
import CardItem from "./CardItem";

function Card() {
  return (
    <>
      <div className="cards">
        <h1>Check out these Popular Destinations!</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="/images/img-3.jpg"
                text={
                  <span>
                    Lets go to the mysterious ocean <br /> Brace yourself alone!
                  </span>
                }
                label="Mystery"
                path="/services"
              />
              <CardItem
                src="/images/img-5.jpg"
                text="Visit many places by going with luxurious car"
                label="Paris"
                path="/services"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src="/images/img-9.jpg"
                text="Explore the hidden waterfall deep inside the Amazon Jungle"
                label="Adventure"
                path="/services"
              />
              <CardItem
                src="/images/img-2.jpg"
                text="Fullfill your holiday by going to this beautiful island"
                label="Island"
                path="/services"
              />
              <CardItem
                src="/images/img-8.jpg"
                text="See the ancient relics and buildings"
                label="Adventure"
                path="/services"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
