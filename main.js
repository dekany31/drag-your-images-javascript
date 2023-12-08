function _load() {

  let dropRegion = document.getElementById("drop-region");
  let submitButton = document.getElementById("upload-button");
  let imagePreviewRegion = document.getElementById("image-preview");
  let droppedFiles = [];

  dropRegion.addEventListener('dragover', (event) => {//elem feletti huzas
    event.preventDefault();//ne végezze el az alapértelmezett eseményt, ne nyissa meg a böngészőt
  }, false);


  function _drop(event) {
    event.preventDefault();
    let data = event.dataTransfer;//a húzás- és ejtési műveletek során adatok tárolására és visszanyerésére szolgál
    //egyszerre több képet berakhat
    for (let i = 0; i < data.files.length; i++) {// húzás és ejtés során kiválasztott vagy hozzáadott fájlok számát adja meg
      if (data.items[i].type.match('^image/'))//csak képeket rak be

        droppedFiles.push(data.files[i]);//berakja a tömbbe
      console.log("droppedFiles" + droppedFiles[i].name);
      //létrehozza a képeket a div-ben
      imagePreviewRegion.insertAdjacentHTML("beforeend", '<img src="' + URL.createObjectURL(data.files[i]) + '" alt="Picture">');
      //URL.revokeObjectURL(imageUrl);
    }
  }
  dropRegion.addEventListener("drop", _drop);



  function uploadFiles(event) {
    const fileInput = document.getElementById('profile_pic');
    const files = fileInput.files;
    // Itt lehet a fájlokat feltölteni a szerverre vagy más tevékenységeket végezni velük
    // Például: fetch('/upload', { method: 'POST', body: files });
    // Most csak egyszerűen logoljuk a kiválasztott fájlok nevét
    for (let i = 0; i < files.length; i++) {//kiválasztott fájlok
      console.log('Feltöltött fájl1:', files[i].name);
    }
    for (let i = 0; i < droppedFiles.length; i++) {//bedobott fájlok
      console.log('Feltöltött fájl2:', droppedFiles[i].name);
    }
  }
  submitButton.addEventListener("click", uploadFiles);
}

window.addEventListener("load", _load);

