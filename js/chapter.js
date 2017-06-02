  $("#chapter-content h1, #chapter-content h2").each(function() {
    $(".toc-list").append("<li class='"+$(this).get(0).nodeName+"'><a href='#"+$(this).attr("id")+"'>"+$(this).text()+"</a></li>");
  });
  $("table").addClass("table");
  $("#chapter-content img").addClass("center-block");
  $("#chapter-content img").each(function() {
    $(this).parent().append("<p class='image-caption'>" + $(this).attr("alt") + "</p>")
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() > 163){  
        $('.table-of-contents').addClass("fixed-to-top");
        $('#chapter-content').addClass("col-md-offset-4");
    }
    else{
        $('.table-of-contents').removeClass("fixed-to-top");
        $('#chapter-content').removeClass("col-md-offset-4");
    }
  });
  