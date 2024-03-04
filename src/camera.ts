export async function getVideo() {
  const avStream = await navigator.mediaDevices.getUserMedia({
    video: true,
  });

  const video = document.createElement("video");
  try {
    video.srcObject = avStream;
  } catch (error) {
    console.error(error);
    // const blobUrl = window.URL.createObjectURL(avStream);
    // video.src = blobUrl;
  }

  await video.play();
  return video;
}

export function drawVideo(video: HTMLVideoElement, canvas: HTMLCanvasElement) {
  const context = canvas?.getContext("2d");
  if (!context) {
    return;
  }
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
}
