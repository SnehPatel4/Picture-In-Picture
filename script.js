const videoElement = document.getElementById("video");
const button = document.getElementById("button");

//  Prompt to select media stream, pass to video element, then play.
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia(); // this allow user to select screen or window and assign to mediaStream variable.
    videoElement.srcObject = mediaStream; // then we passing mediaStream to video element as a source object.
    videoElement.onloadedmetadata = () => {
      // when videoElement loaded metadata it call play().
      videoElement.play();
    };
  } catch (error) {
    //catch error here.
  }
}

button.addEventListener("click", async () => {
  // Button disable
  button.disabled = true;
  // Start picture in picture
  await videoElement.requestPictureInPicture();
  // reset button
  button.disabled = false;
});

// On Load
selectMediaStream();
