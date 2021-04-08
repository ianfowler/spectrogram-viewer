files = [];

deleteCell = () => {
  alert("Delete that thing!");
};

addFile = (file, target) => {
  var d1 = document.getElementById("add-song");
  d1.insertAdjacentHTML(
    "beforebegin",
    `
    <article>
        <h2>${file.name}</h2>
        <button id="delete-button" type="button" onclick="deleteCell();">
            Delete
        </button>
        <div id="vis" class="spectrogram"></div>
    </article>
    `
  );

  files.push(file.name);
  console.log(files);

  //   var audio = document.getElementById("myAudio");
  var reader = new FileReader();
  if (target.files && file) {
    var reader = new FileReader();
    reader.onload = function (e) {
      //   audio.setAttribute("src", e.target.result);
      //   audio.play();

      var sample = new Spectrogram(e.target.result, "#vis", {
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
      });
    };
    reader.readAsDataURL(file);
  }
};

loadFiles = (target) => {
  let fileList = target.files;
  for (var i = 0; i < fileList.length; i++) {
    let file = fileList.item(i);
    addFile(file, target);
  }
};

window.onload = () => {
  fileSelector = document.getElementById("file-selector");
  fileSelector.addEventListener("change", (event) => {
    loadFiles(event.target);
  });
};
