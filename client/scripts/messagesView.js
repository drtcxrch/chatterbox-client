var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    //I believe that we call $.getJSON on this. Or we may call Parse.readAll.
    // MessagesView.$chats.on(MessagesView.render);
    // MessagesView.render(data);
    // console.log(data);
  },

  encode: function(property) {
    // console.log('property before = ' + property)
    property = property.replace('&', '&amp');
    property = property.replace('<', '&lt');
    property = property.replace('>', '&gt');
    property = property.replace('"', '&quot');
    property = property.replace('\'', '&#x27');
    // console.log('property after = ' + property)
    return property;
  },

  render: function(data) {
    //I'm guessing that the intiialize function here should be similar to the one for FormView, but instead it will call MessagesView.render. I'm thinking that rather than 'submit' in the case of FormView, we will want messages to render as their created, so we'll have to figure out how to do that. Looks like we're going to call MessageView.render on data in a loop, concatinate it all to a variable and then append it to #chats.
    // append each message to the chats div

    for (var user of data.results) {

      // console.log(user);
      if (user.username === undefined) {
        user.username = 'anonymous';
      }
      if (user.text === undefined) {
        user.text = '';
      }
      if (user.roomname === undefined || user.roomname === null) {
        user.roomname = 'lobby';
      }
      user.username = MessagesView.encode(user.username);
      user.text = MessagesView.encode(user.text);
      user.roomname = MessagesView.encode(user.roomname);
      var templated = MessageView.render(user);
      $('#chats').append(templated);
    }
  },

  renderMessage: function(message) {
    if (message.username === undefined || message.username === null) {
      message.username = 'anonymous';
    }
    if (message.text === undefined || message.text === null) {
      message.text = '';
    }
    if (message.roomname === undefined || message.roomname === null) {
      message.roomname = 'Lobby';
    }
    message.username = MessagesView.encode(message.username);
    message.text = MessagesView.encode(message.text);
    message.roomname = MessagesView.encode(message.roomname);
    var templated = MessageView.render(message);
    $('#chats').prepend(templated);
  },

  refreshFeed: function(data) {
    $('#chats').html('');
    App.initialize();
  },


};
