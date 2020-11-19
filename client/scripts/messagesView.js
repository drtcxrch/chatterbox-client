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



    for (var user of data.results) {
      console.log(user);
      if (user.username === undefined) {
        user.username = 'anonymous';
      }

      if (user.text === undefined) {
        user.text = '';
      }

      for (var char of user.username) {
        if (char === '&') {
          char = '&amp';
        } else if (char === '<') {
          char = '&lt';
        } else if (char === '>') {
          char = '&gt';
        } else if (char === '"') {
          char = '&quot';
        } else if (char === "'") {
          char = '&#x27';
        }
      }

      for (var char of user.text) {
        if (char === '&') {
          char = '&amp';
        } else if (char === '<') {
          char = '&lt';
        } else if (char === '>') {
          char = '&gt';
        } else if (char === '"') {
          char = '&quot';
        } else if (char === "'") {
          char = '&#x27';
        }
      }

      var templated = MessageView.render(user);
      $('#chats').append(templated);
    }




  }

};