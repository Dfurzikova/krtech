block('chat-window').elem('chat-container')({
  content: function(node) {
    var result = node.data.users.slice(5).map(function(user) {
      return {
        block: 'chat-item',
        title: user.title,
        message: user.message,
        date: user.date,
        timestamp: user.timestamp,
        
        userImage: {
          online: user.isOnline,
          unread: {
            count: user.isUnread.count
          },
          typing: user.isTyping,
          close: user.isClose
        }
      };
    });

    return result;
  }
  
});
