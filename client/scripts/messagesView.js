var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {


  },

  renderMessage: function() {
    var html = '';
    // console.log(Messages)
    for (let message of Messages) {
      message.text = message.text || '';
      message.username = message.username || '';
      html += MessageView.render(message);
    }
    this.$chats.append(html);


  }

};