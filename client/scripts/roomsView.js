var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.renderRoom('Lobby');
  },

  renderAll: function() {
    Parse.renderAll();
  },

  renderRoom: function(arg) {
    var lobbyExists = false;
    var userRoomName = arg || prompt('Enter room name here: ', '');
    userRoomName = MessagesView.encode(userRoomName);
    userRoomNameStrung = JSON.stringify(userRoomName);

    if (arg !== 'Lobby' || (arg === 'Lobby' && lobbyExists === false)) {
      var o = new Option(userRoomName, 'id');
      $(o).html(`<option id=${userRoomNameStrung}>${userRoomName}</option>`);
      RoomsView.$select.append(o);
    }

    if (arg === 'Lobby') {
      lobbyExists = true;
    }
  },

  roomFilter: function(roomName) {
    var $rooms;
    $('#chats').children()
      .each(function () {
        var element = $(this)
          .prop('outerHTML');
        $rooms = $(this);
        $(this).hide();
        if (element.indexOf(`<div class=${roomName}>`) !== -1) {
          $rooms.show();
        }
      });
  }
};


