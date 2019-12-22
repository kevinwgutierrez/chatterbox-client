var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    //maybe use parse.create to save to server?
    console.log('click!');
    // grab text from message form (#id = message)
    var currentText = $('#message').val();
    // if any room is selected/available:
    //grab room name
    var dropDown = document.getElementById('dropdown');
    var currentRoom = dropDown.options[dropDown.selectedIndex].value;
    // grab username

    // call generate MEssage with values
    generateMessage(currentText, currentRoom, App.username);
  },

  generateMessage: function (text, roomName, username) {
    //create a var that stores the return value of messageSendTemplate;
    var currentMessage = Messages.messageSendTemplate(text, roomName, username);


    //Parse create with the object
    Parse.create(currentMessage);
    // refresh messages
    
  },



  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  },
};