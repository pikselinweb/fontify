$("#submit-all").hide();

Dropzone.options.uploadDropzone = {
  autoProcessQueue: false,
  init: function() {
    var submitButton = document.querySelector("#submit-all")
        myDropzone = this;
    submitButton.addEventListener("click", function() {
      myDropzone.processQueue();
    });

    this.on("addedfile", function() { 
      $("#submit-all").show();
    });

    this.on("success", function(file, response) {
      console.log(response);
      window.location="/finish?key=" + response.key + "&font-name=" + response.font_name;
    });
  },
  paramName: "file", // The name that will be used to transfer the file
  maxFilesize: 20, // MB
  maxFiles: 1,
  acceptedFiles: ".png, .jpg, .jpeg",
  dictDefaultMessage: "Drop image here<br>or click to upload"
};