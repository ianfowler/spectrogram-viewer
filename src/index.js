let count = 0;

deleteCell = (id) => {
  var myobj = document.getElementById(id);
  console.log(id);
  if (myobj) myobj.remove();
};

addSpectrogram = (target, file, id) => {
  var reader = new FileReader();
  if (target.files && file) {
    var reader = new FileReader();
    reader.onload = function (e) {
      new Spectrogram(e.target.result, "#" + id, {
        width: 720,
        height: 200,
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

addFile = async (file, target) => {
  let sectionID = `sec${count}`;
  let deleteButtonID = `id${count}`;
  let spectrogramID = `vis${count}`;
  var d1 = document.getElementById("add-song");
  await d1.insertAdjacentHTML(
    "beforebegin",
    `
    <section id="${sectionID}">
      <span id="title-del">
        <h2>${file.name}</h2>
        <button class="outline-button" type="button" id="${deleteButtonID}">
            Delete
        </button>
      </span>
      <div id="${spectrogramID}" class="spectrogram"></div>
    </section>
    `
  );
  document
    .getElementById(deleteButtonID)
    .addEventListener("click", () => deleteCell(sectionID));
  addSpectrogram(target, file, spectrogramID);
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
