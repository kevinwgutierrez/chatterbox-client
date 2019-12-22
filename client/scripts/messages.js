
var Messages = {
  // create an object template to post data to the server
  // get data for template object from message input
  messageSendTemplate: function (text, roomName, username) {
    // create var messageObject and set all info in it
    var msg = {
      text: text,
      roomname: roomName,
      username: username
    };
    return msg;
  }
};
//model
//stores all messages
//get all chatroom messages from server
//