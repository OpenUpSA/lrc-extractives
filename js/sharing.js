$(function() {
  $(".page-share.facebook").on("click", function(e) {
    e.preventDefault();
    window.open("https://www.facebook.com/sharer/sharer.php?u="+window.location.href,
      "share", "width=600, height=400, scrollbars=no");
  });

  $(".page-share.twitter").on("click", function(e) {
    e.preventDefault();
    window.open("https://twitter.com/intent/tweet?&url="+window.location.href,
      "share", "width=600, height=400, scrollbars=no");
  });

  $(".page-share.linkedin").on("click", function(e) {
    e.preventDefault();
    window.open("https://www.linkedin.com/shareArticle?mini=true&source=PMG&url="+window.location.href,
      "share", "width=600, height=400, scrollbars=no");
  });

  $(".page-share.email").on("click", function(e) {
    e.preventDefault();
    var url = window.location.href
    var emailTitle = encodeURIComponent(document.title).replace(/&/g, '%26');
    window.location = 'mailto:?subject=' + emailTitle + '&body=' + url;
  });
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})