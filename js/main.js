var btn = document.getElementById("btn");
var menu = document.getElementById("menu");

btn.addEventListener("click", function () {
   btn.classList.toggle("active");
   menu.classList.toggle("activeMenu");
});





jQuery(function ($) {
   $(document).mouseup(function (e) { // событие клика по веб-документу 
      if (btn.classList.contains('active')) {
         var div = $("#ul"); // тут указываем ID элемента 
         if (!div.is(e.target) // если клик был не по нашему блоку 
            &&
            div.has(e.target).length === 0) { // и не по его дочерним элементам 
            // div.hide(); // скрываем его 
            btn.classList.toggle("active");
            menu.classList.toggle("activeMenu");
         }

      }
   });
});
