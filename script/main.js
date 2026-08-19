const promoPanels = document.querySelectorAll('.promo-panel');

promoPanels.forEach((panel) => {
  panel.addEventListener('click', (event) => {
    event.preventDefault();

    promoPanels.forEach((item) => {
      item.classList.remove('is-active');
    });

    panel.classList.add('is-active');
  });
});


      $(".gnb").on('mouseenter', function(){
         $(".mega").stop().slideDown(300);
      });

      $("header").on('mouseleave', function(){

         $(".mega").stop().slideUp(300);
      });

      $(".gnb li").on('mouseenter', function(){
    let idx = $(this).index();

    $(this).addClass("on").siblings().removeClass("on");
    $(".mega_group").removeClass("on").eq(idx).addClass("on");
}); 

      $(".cate li").on('mouseenter', function(){

         let idx = $(this).index();


         $(this).addClass("on").siblings().removeClass("on");

         let $mega = $(this).closest(".mega");
         $mega.find(".panel").removeClass("on");
         $mega.find(".panel").eq(idx).addClass("on");
      }); 
