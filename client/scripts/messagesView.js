var MessagesView = {
  // this is grabbing id for chats
  $chats: $('#chats'),


  initialize: function() {

    MessagesView.renderAll();
    MessagesView.$chats.on('click', Friends.toggleStatus);

  },

  

  renderAll: function() {
    Parse.readAll(function (data) {
      //create a var that holds the results array
      var result = data.results;
      console.log(result);
      //iterate over the array
      for (var i = 0; i < result.length; i++) {
        //insert current iteration's properties into the rendering machine
        MessagesView.renderMessage(result[i]);
      }
    });
  },

  renderMessage: function (msg) {
    var msgNode = $(`<div class='chat'><div class='username'>${msg.username}</div><div class='message'>${msg.text}</div></div>`);
    if (msg.username && msg.text && msg.roomname) {
      if (msg.username.includes('<') ||  msg.text.includes('<') ||
      msg.roomname.includes('<') || msg.username.includes('$') ||
      msg.text.includes('$') ||
      msg.roomname.includes('$')) {
        return;
      }
    }
    MessagesView.$chats.append(msgNode);
  },

  handleFriend: function(event) {
    event.preventDefault();
    //onclick method
    //set username to a variable
    var $username = $(this).attr('.username');
    //invoke togglestatus and pass through the username
    console.log($username);
    Friends.toggleStatus($username);
  },
};