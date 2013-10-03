 $(document).ready(function()
      {
        $.get('./livro/book.xml', function(d){
        $('.ajax').append('<h1>Livros Recomendados </h1>');
        $('.ajax').append('<dl>');

        $(d).find('book').each(function(){

            var $book = $(this); 
            var title = $book.attr("title");
            var description = $book.find('description').text();
            var imageurl = $book.attr('imageurl');

            var html = '<dt> <img class="bookImage" alt="" src="' + imageurl + '" /> </dt>';
            html += '<dd> <span class="loadingPic" alt="Loading" />';
            html += '<p class="title">' + title + '</p>';
            html += '<p> ' + description + '</p>' ;
            html += '</dd>';

            $('dl').append($(html));
            
            $('.loadingPic').fadeOut(1400);
        });
    });
});
