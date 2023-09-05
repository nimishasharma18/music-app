import { gsap } from "gsap";

const animateCardContent = (timelineRef, animatedElements) => {
  let timeline = timelineRef?.current;
  timeline = { master: null };
  timeline.master = gsap.timeline({ paused: true });
  timeline.master.from(animatedElements.whiteCircleImage, {
    scale: 0,
    transformOrigin: "left bottom"
  });
  timeline.master.from(
    animatedElements.textBlockHeadline,
    {
      width: "0%",
      duration: 0.5
    },
    0
  );
  timeline.master.from(
    animatedElements.textBlockParagraph,
    {
      yPercent: -30,
      duration: 0.5,
      autoAlpha: 0
    },
    "<0.3"
  );

  animatedElements.tableBlockRows.forEach((element) => {
    // console.log("this is line element", element);
    timeline.master.from(
      element.querySelector(".table-block__row__line"),
      {
        autoAlpha: 0,
        xPercent: -20,
        duration: 0.5,
        transformOrigin: "left",
        ease: "power1.out"
      },
      "<0.03"
    );
    timeline.master.from(
      [
        element.querySelector(".table-block__row__ammount"),
        element.querySelector(".table-block__row__name")
      ],
      {
        xPercent: -20,
        autoAlpha: 0,
        duration: 0.5,
        ease: "power1.out"
      },
      "<0.03"
    );
  });
  return timeline.master;
};

export default animateCardContent;
