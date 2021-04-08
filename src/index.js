deleteCell = () => {
  alert("Delete that thing!");
};

const fileSelector = document.getElementById("file-selector");
fileSelector.addEventListener("change", (event) => {
  const fileList = event.target.files;
  console.log(fileList);
});

var sample = new Spectrogram(
  "./dependencies/spectrogramJS/data/bird.mp3",
  "#vis",
  {
    width: 600,
    height: 300,
    colorScheme: [
      "#440154",
      "#472877",
      "#3e4a89",
      "#31688d",
      "#26838e",
      "#1f9e89",
      "#36b778",
      "#6dcd59",
      "#b4dd2c",
      "#fde725",
    ],
  }
);
