var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form

    event.preventDefault();
    // console.log(FormView.$form);
    // // console.log('click!');
    // console.log($('input'));
    // console.log(this);
    var username = document.getElementById('username').value;
    var message = document.getElementById('message').value;
    console.log(username);
    Parse.create(message);
    var message = {
      username: 'shawndrost',
      text: 'trololo',
      roomname: '4chan'
    };
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('enabled', status);
  }

};