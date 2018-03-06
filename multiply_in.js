// local print function
function output(text) {
  document.getElementById("output_area").append(text.toString() + "\n\n");
}

mergeInto(LibraryManager.library, {
  multiply_in_js: function (x, y) {
    output("multiplying in js : " + x + " * " + y);
    return x * y;
  },
});
