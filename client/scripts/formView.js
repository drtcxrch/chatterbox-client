var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    var username = App.username;

    event.preventDefault();

    var message = document.getElementById('message').value;

    var $room = $('#roomList option:selected').text();
    $input = ($('input'));
    var messObj = {
      username: username,
      text: message,
      roomname: $room,
    };

    Parse.create(messObj, (data) => {
      _.extend(message, data);
      MessagesView.renderMessage(messObj);

    });

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};

