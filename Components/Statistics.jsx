"use client";
import { useSelector, useDispatch } from "react-redux";
import { incrementHeadingIndex } from "../Store/Slices/StatisticsSlice";
import { useEffect } from "react";
const Statistics = () => {
  const dispatch = useDispatch();
  const activeHeadingIndex = useSelector(
    (state) => state.statistics.activeHeadingIndex,
  );

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(incrementHeadingIndex());
    }, 2000);
    return () => clearInterval(interval);
  }, [dispatch]);

  const headingsFirst = [
    "Enhance your knowledge",
    "Achieve greater success",
    "Improve your health",
    "Develop better parenting skills",
    "Increase happiness",
    "Be the best version of yourself!",
  ];

  const headingsSecond = [
    "Expand your learning",
    "Accomplish your goals",
    "Strengthen your vitality",
    "Become a better caregiver",
    "Improve your mood",
    "Maximize your abilities",
  ];

  return (
    <div>
      <div className="statistics__wrapper">
        <div className="statistics__content--header">
          {headingsFirst.map((heading, index) => (
            <div
              key={index}
              className={`statistics__heading ${activeHeadingIndex === index ? "statistics__heading--active" : ""}`}
            >
              {" "}
              {heading}
            </div>
          ))}
        </div>

        <div className="statistics__content--details">
          <div className="statistics__data">
            <div className="statistics__data--number">93%</div>
            <div className="statistics__data--title">
              of Summarist members <b>significantly increase</b> reading
              frequency.
            </div>
          </div>
          <div className="statistics__data">
            <div className="statistics__data--number">96%</div>
            <div className="statistics__data--title">
              of Summarist members <b>establish better</b> habits.
            </div>
          </div>
          <div className="statistics__data">
            <div className="statistics__data--number">90%</div>
            <div className="statistics__data--title">
              have made <b>significant positive</b> change to their lives.
            </div>
          </div>
        </div>
      </div>
      <div className="statistics__wrapper">
        <div className="statistics__content--details statistics__content--details-second">
          <div className="statistics__data">
            <div className="statistics__data--number">91%</div>
            <div className="statistics__data--title">
              of Summarist members <b>report feeling more productive</b> after
              incorporating the service into their daily routine.
            </div>
          </div>
          <div className="statistics__data">
            <div className="statistics__data--number">94%</div>
            <div className="statistics__data--title">
              of Summarist members have <b>noticed an improvement</b> in their
              overall comprehension and retention of information.
            </div>
          </div>
          <div className="statistics__data">
            <div className="statistics__data--number">88%</div>
            <div className="statistics__data--title">
              of Summarist members <b>feel more informed</b> about current
              events and industry trends since using the platform.
            </div>
          </div>
        </div>
        <div className="statistics__content--header statistics__content--header-second">
          {headingsSecond.map((heading, index) => (
            <div
              key={index}
              className={`statistics__heading ${activeHeadingIndex === index ? "statistics__heading--active" : ""}`}
            >
              {" "}
              {heading}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
