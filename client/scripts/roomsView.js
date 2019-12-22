var RoomsView = {
  // look for click on submit with room selected
  $button: $('#rooms button'),
  $select: $('#rooms select'),

  // this calls the render function to generate all of the rooms and add them to the index.html
  initialize: function() {

    RoomsView.$button.on('click',
    RoomsView.handleAddRoom);

    RoomsView.$select.on('click', RoomsView.handleFilterRoom);
  },

  handleAddRoom: function () {
    var roomName = $('#room').val();
    console.log(roomName);
    //invoke renderRoom with the input
    RoomsView.renderRoom(roomName);
    Rooms.add(roomName);
  },

  handleFilterRoom: function (room) {
    var roomName = $('#room').val();
    if (Rooms.storage.includes(roomName)) {
      // fetch refreshed message list
      Parse.readAll(function (data) {
        var messages = data.results;
        // iterate over the message objects
      //   for (var i = 0; i < messages.length; i ++){
      // // check if the roomName matches each object
      // filtered.push(messages[i].roomname === roomName ? messages[i] );
      // // if yes: add the object to filtered array
      // // run each filtered object through renderMessage
      //   }
      }
      // create a filtered array
     // var filtered = [];

    };
  },

  // functionality to render the individual room objects that are in the rooms file
  renderRoom: function(room) {
    console.log(room);
    RoomsView.$select.append($(`<option value="${room}">${room}</option>`));
    console.log('click room');
    //   // go throught the room objects in the room file and filter them according to the room selected

  },

};
