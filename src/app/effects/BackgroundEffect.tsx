import { useEffect } from "react";

const lightColor = "rgba(0, 0, 0, 0.03)";
const gradientSize = 200;

export default function BackgroundEffect() {
  useEffect(() => {
    const playpen = document.getElementById("root");
    if (!playpen) return;

    const originalBGplaypen = getComputedStyle(playpen).backgroundColor;
    //const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const handleMouseMovePlaypen = (e: MouseEvent) => {
      const x = e.pageX - playpen.offsetLeft;
      const y = e.pageY - playpen.offsetTop;
      const xy = `${x} ${y}`;

      const bgWebKit = `-webkit-gradient(radial, ${xy}, 0, ${xy}, ${gradientSize}, from(${lightColor}), to(rgba(255,255,255,0.0))), ${originalBGplaypen}`;

      const bgMoz = `-moz-radial-gradient(${x}px ${y}px 45deg, circle, ${lightColor} 0%, ${originalBGplaypen} ${gradientSize}px)`;

      playpen.style.background = bgWebKit;
      playpen.style.background = bgMoz;
    };

    const handleMouseLeavePlaypen = () => {
      playpen.style.background = originalBGplaypen;
    };

    

    playpen.addEventListener("mousemove", handleMouseMovePlaypen);
    playpen.addEventListener("mouseleave", handleMouseLeavePlaypen);
  }, []);
  return null;
}
