var Friends = {

  toggleStatus: function() {
    $('#chats').on('click', '.username', function() {
      var $name = $(this).text();
      var message = $('.chat').children();
      $('#chats').children()
        .each(function () {
          var element = $(this)
            .prop('outerHTML');

          if (element.indexOf(`<div class="username">${$name}`) !== -1) {
            $(this).toggleClass('friend');
          }

        });
    });
  }
};
