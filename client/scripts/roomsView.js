var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', '.addRoom', function(event) {
      event.preventDefault();

    })
  },

  render: function() {
    var obj ={};
    for (let room of Messages) {
      room.roomname = room.roomname || 'lobby';
      if (obj[room.roomname] === undefined) {
        RoomsView.renderRoom(room);
      }
      obj[room.roomname] = room.roomname;
    }
  },

  renderRoom: function(roomName) {
    var html = '';

    roomName.createdAt = roomName.createdAt || '';
    roomName.text = roomName.text || '';
    roomName.username = roomName.username || '';
    roomName.roomname = roomName.roomname || 'lobby';

    var newText = '';
    var newUsername = '';
    html += RoomsView.renderTemplate(roomName);
    this.$select.append(html);
  },

  renderTemplate: _.template(`
     <option value="<%= roomname %>">
      <%= roomname %>
    </option>
  `),

  // onclick: function(event) {
  //   var newRoom = prompt("Enter new roomname");
  //   if (newRoom) {

  //   }
  // }

  // addRoom: function(newRoom, cb) {

  // }

};

$('button').on('click', '#addRoom', function (event) {
  event.preventDefault();
  var room = $(this).data('room');
  $('#rooms').remove();
  var $room = $('<h1 class=room>' + room + '</h1>');
  $room.prependTo($body);
  // $('.newTweets').hide();
  // $('#username').hide();
  // $('.home').show();
  // $('.tweet').not("div:contains('" + user + "')").hide();
  // $("div:contains('" + user + "')").show();

});