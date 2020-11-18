var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    //I believe that we call $.getJSON on this. Or we may call Parse.readAll.
    // MessagesView.$chats.on(MessagesView.render);
    // MessagesView.render(data);
    // console.log(data);
  },

  render: function(data) {
    //I'm guessing that the intiialize function here should be similar to the one for FormView, but instead it will call MessagesView.render. I'm thinking that rather than 'submit' in the case of FormView, we will want messages to render as their created, so we'll have to figure out how to do that. Looks like we're going to call MessageView.render on data in a loop, concatinate it all to a variable and then append it to #chats.
    // append each message to the chats div


    var html = '';
    for (var i = 0; i < data.results.length; i++) {
      var user = data.results[i];
      console.log(user);
      html += MessageView.render(user);
    }
    console.log(html);
    $('#chats').append(html);


  }

};