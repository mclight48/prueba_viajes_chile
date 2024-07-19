$(function () {
   var win = $(this)
   var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
   )
   var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
   })

   /*----------  Navbar ----------*/

   if (win.width() > 576) {
      $(".navbar").addClass("fixed-top")
   }

   $(window).on("resize", function () {
      if (win.width() > 576) {
         $(".navbar").addClass("fixed-top")
      } else {
         $(".navbar").removeClass("fixed-top")
      }
   })


   /*---------- Aviso Alerta  ----------*/

   $(".btn").click(function (event) {
      event.preventDefault()
      $(".alert").show("")
   })
})


