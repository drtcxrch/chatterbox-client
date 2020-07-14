var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {

  },

  render: function() {

  },

  renderRoom: function(roomName) {
    var html = '';

    html += MessageView.render(roomName);

    this.$select.append(html);
  }

};
