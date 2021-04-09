let count = 0;

deleteCell = () => {
  alert("Delete that thing!");
};

addFile = async (file, target) => {
  let newId = `vis${count}`;
  var d1 = document.getElementById("add-song");
  await d1.insertAdjacentHTML(
    "beforebegin",
    `
    <section>
        <h2>${file.name}</h2>
        <button class="outline-button" type="button" onclick="deleteCell();">
            Delete
        </button>

        <div id="${newId}" class="spectrogram"></div>
    </section>
    `
  );

  var reader = new FileReader();
  if (target.files && file) {
    var reader = new FileReader();
    reader.onload = function (e) {
      var sample = new Spectrogram(e.target.result, "#" + newId, {
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
  count += 1;
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
