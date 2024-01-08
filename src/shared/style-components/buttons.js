/* "use strict";
document.querySelectorAll("button").forEach((button) => {
  const div = document.createElement("div");
  const span = button.querySelector("span");
  let colorWhite = true;
  gsap.to(button, {
    "--alternative-gradient-opacity": 0.25,
    yoyo: true,
    repeat: -1,
    duration: 5,
    repeatDelay: 10,
  });
  const animateSVG = () => {
    const svg = createSvg(colorWhite ? "white" : "black");
    colorWhite = !colorWhite;
    div.appendChild(svg);
    gsap.to(svg, {
      opacity: gsap.utils.random(0.5, 0.65),
    });
    gsap.set(svg, {
      left: gsap.utils.random("25%", "100%"),
      top: gsap.utils.random("25%", "100%"),
    });
    gsap.to(svg, {
      x: "-200%",
      y: "-200%",
      duration: gsap.utils.random(14, 20),
      onComplete: () => {
        svg.remove();
      },
    });
  };
  window.setInterval(() => {
    animateSVG();
  }, 1000);
  button.appendChild(div);
  button.addEventListener("click", () => {
    gsap.to(span, {
      "--button-glow-1-scale": "1.2",
      "--button-glow-1-blur": "12px",
      duration: 0.6,
      clearProps: true,
    });
    gsap.to(span, {
      keyframes: [
        {
          "--button-glow-1-opacity": ".8",
          duration: 0.15,
        },
        {
          "--button-glow-1-opacity": "0",
          duration: 0.15,
          delay: 0.3,
        },
      ],
    });
    gsap.to(span, {
      "--button-glow-2-scale": "1.2",
      "--button-glow-2-blur": "10px",
      duration: 0.6,
      delay: 0.1,
      clearProps: true,
    });
    gsap.to(span, {
      keyframes: [
        {
          "--button-glow-2-opacity": ".8",
          duration: 0.15,
          delay: 0.1,
        },
        {
          "--button-glow-2-opacity": "0",
          duration: 0.15,
          delay: 0.3,
        },
      ],
    });
  });
});
 */
