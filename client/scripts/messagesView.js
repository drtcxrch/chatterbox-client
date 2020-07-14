var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {


  },

  render: function() {
    for (let message of Messages) {
      MessagesView.renderMessage(message);
    }


  },

  renderMessage: function(message) {
    var html = '';
    //console.log(Messages)
    // for (let message of Messages) {
    message.createdAt = message.createdAt || '';
    message.text = message.text|| '';
    message.username = message.username|| '';
    var newText = '';
    var newUsername = '';
    for (let i = 0; i < message.text.length; i++) {

      if (message.text[i] === '&') {
       newText += '&amp';
      } else if (message.text[i] === '<') {
       newText += '&lt';
      } else if (message.text[i] === '>') {
       newText += '&gt';
      } else if (message.text[i] === '"') {
       newText += '&quot';
      } else if (message.text[i] === "'") {
       newText += '&$x27';
      } else if (message.text[i] === '/') {
       newText += '&#x2F';
      } else {
        newText += message.text[i];
      }

    }

    message.text = newText;

    for (let i = 0; i < message.username.length; i++) {
      if (message.username[i] === '&') {
        newUsername += '&amp';
      } else if (message.username[i] === '<') {
        newUsername += '&lt';
      } else if (message.username[i] === '>') {
        newUsername += '&gt';
      } else if (message.username[i] === '"') {
        newUsername += '&quot';
      } else if (message.username[i] === "'") {
        newUsername += '&$x27';
      } else if (message.username[i] === '/') {
        newUsername += '&#x2F';
      }
    }

    message.username = newUsername;
    // console.log(message)
    html += MessageView.render(message);
    // }
    this.$chats.append(html);


  }

};