$('nav ul li.btn span').click(function(){
    $('nav ul div.items').toggleClass("show");
    $('nav ul li.btn span').toggleClass("show");
  });

  function footerToggle(footerBtn) {
    $(footerBtn).toggleClass("btnActive");
    $(footerBtn).next().toggleClass("active");
}
