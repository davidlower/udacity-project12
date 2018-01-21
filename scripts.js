$(document).ready(function() {



   $(".image-1").on("click", function() {
      $(".overlay-1").show();
      $(".close").show();
   });

   $(".image-2").on("click", function() {
      $(".overlay-2").show();
      $(".close").show();
   });

   $(".image-3").on("click", function() {
      $(".overlay-3").show();
      $(".close").show();
   });

   $(".image-4").on("click", function() {
      $(".overlay-4").show();
      $(".close").show();
   });

   $(".image-5").on("click", function() {
      $(".overlay-5").show();
      $(".close").show();
   });

   $(".image-6").on("click", function() {
      $(".overlay-6").show();
      $(".close").show();
   });


   // CLOSE THE OVERLAY

   $(".close").on("click", function() {
      $(".large-overlay").hide();
      $(this).hide();
   });

   $(".large-overlay").on("click", function() {
      $(this).hide();
      $(".close").hide();
   });



});