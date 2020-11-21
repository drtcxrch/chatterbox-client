var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    // setInterval(function() {
    //   App.fetch();
    // }, 5000);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      // console.log(data);
      //Here is where MessagesView.render is being called. One we have a working render function, this should automatically fill the chat feed upon loading.

      MessagesView.render(data);
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  },

  checkcount: function() {

  }
};

// var count = data.results.length;



// var count = data.results.length
// checkCount function compares count variable (which doesn't change as data is added) to data.results.length (which DOES change as data is added)
// If the count is the same, do nothing, check again in a few seconds or whatever
// if it's different:
// clear #chats
// rerun App.fetch (figure out how that's working to load most recent 100 tweets)
// var count = data.results.length to update that 'static' number