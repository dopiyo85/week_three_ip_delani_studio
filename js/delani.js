
  /*Hovering title on portfolio*/
  $(document).ready(function(){
    $(".portfolio-img").hover(function(e){
      const target = e.target;
      if (target.matches("img")){
        const titlename = target.alt.toUpperCase();
        $(target).prop("title", titlename)
      }
    })
  });
  
  $(document).ready(function() {
    $("#design-image").click(function(){
      $("#design").toggle();
      $(".hide-design-image").toggle();
    })
  
    $("#development-image").click(function(){
      $("#development").toggle();
      $(".hide-development-image").toggle();
    })
  
    $("#product-image").click(function(){
      $("#product").toggle();
      $(".hide-product-image").toggle();
    })
  })

  $('.btn').click(function () {
    var Name = $('#your-name').val();
    var Email = $('#email').val();
    var Message = $('#comment');
    var key ='https://formspree.io/f/myyvvqqj';
    if (Name == '' || Email == '' || Message == '') {
        alert('Please make sure you have filled in the form correctly!');
    } else {
        alert(' Hi ' + Name + ' We have received your message. Thank you for reaching out to us.');
    }
});

