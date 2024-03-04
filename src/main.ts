import "./style.css";
import { getVideo, drawVideo } from "./camera";

(async function run() {
  const video = await getVideo();
  let canvas = document.querySelector("canvas");
  const button = document.getElementById("camera");

  button?.addEventListener("click", () => {
    if (!canvas) {
      const newCanvas = document.createElement("canvas");
      document.body.appendChild(newCanvas);
      canvas = newCanvas;
    }

    drawVideo(video, canvas);
  });

  await video.play();
})();
