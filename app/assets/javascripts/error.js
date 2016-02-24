
  function trigger(){
    var article = $("#tError").data('object');
    console.log(article)
    $(".title").attr("placeholder", "<%= sanitize @article.errors[:title].first %>");
    $(".title").attr("value", null);
  };

