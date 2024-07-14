import React from "react";
import Slider from "react-slick";
import { useEffect, useState } from "react";

function MealsSlider() {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast")
      .then((response) => response.json())
      .then((data) => setMeals(data.meals));
  }, []);
  console.log(meals);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      className={`slider-container container ${
        meals.length > 0 ? "max-w-max" : ""
      }  `}>
      {meals.length > 0 ? (
        <Slider {...settings} className="">
          {meals.map((meal) => (
            <div
              style={{ width: "30%" }}
              className="box basis-1/3  flex flex-col justify-start border-custom1 border-1 border-top rounded-3xl">
              <div className="image rounded-t-3xl">
                <img alt="meal-photo" src={meal.strMealThumb} />
              </div>
              <span className="title pt-7 pl-7 pb-3 font-bold text-xl text-custom1 truncate">
                {meal.strMeal}
              </span>
              <span className="description pl-7 pb-7 pr-7 text-sm leading-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled
              </span>
            </div>
          ))}
        </Slider>
      ) : (
        ""
      )}
    </div>
  );
}

export default MealsSlider;
