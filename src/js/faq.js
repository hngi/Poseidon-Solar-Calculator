
$(".collapse").on("shown.bs.collapse", function() {
  $(this)
    .siblings(".fa-minus-circle")
    .toggleClass("d-none");
  $(this)
    .siblings(".fa-plus-circle")
    .toggleClass("d-none");
});
$(".collapse").on("hidden.bs.collapse", function() {
  $(this)
    .siblings(".fa-plus-circle")
    .toggleClass("d-none");
  $(this)
    .siblings(".fa-minus-circle")
    .toggleClass("d-none");
});


