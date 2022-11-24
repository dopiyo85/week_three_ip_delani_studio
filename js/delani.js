
  /*Hovering title on portfolio*/
  $(document).ready(function(){
    $(".portfolio-img").hover(function(e){
      const target = e.target;
      if (target.matches("img")){
        const titlename = target.alt.toUpperCase();
        $(target).prop("title", titlename)
      }
    })
  })