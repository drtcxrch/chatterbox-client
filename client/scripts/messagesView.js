var MessagesView = {

  $chats: $('#chats'),

  encode: function(property) {
    property = property.replace('&', '&amp');
    property = property.replace('<', '&lt');
    property = property.replace('>', '&gt');
    property = property.replace('"', '&quot');
    property = property.replace('\'', '&#x27');
    return property;
  },

  render: function(data) {

    for (var user of data.results) {

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
