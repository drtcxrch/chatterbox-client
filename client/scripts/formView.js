var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('click.submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var message = {};
    message.username = App.username;
    message.createdAt = event.timeStamp;
    message.text = document.getElementById('message').value;
    console.log(event);
    console.log('click!');
    Parse.create(message, () => {console.log('success')})
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};