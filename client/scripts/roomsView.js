var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.renderRoom('Lobby');
  },

  render: function() {
  },

  renderRoom: function(arg) {
    var userRoomName = arg || prompt('Enter room name here: ', '');
    userRoomName = MessagesView.encode(userRoomName);
    userRoomNameStrung = JSON.stringify(userRoomName);
    // var roomName = document.getElementById(userRoomNameStrung);
    // if (roomName === undefined) {

    var o = new Option(userRoomName, 'value');
    $(o).html(`<option value=${userRoomNameStrung}>${userRoomName}</option>`);
    RoomsView.$select.append(o);
    // roomNames.push(userRoomNameStrung);
    // }
  },


  roomFilter: function(textbox) {
  }

};

