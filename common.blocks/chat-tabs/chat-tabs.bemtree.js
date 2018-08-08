block('chat-tabs')({
  content: function(node) {
    var result = node.data.users.slice(0, 5).map(function(user) {
      return {
        elem: 'item',
        elemMods: {
          color: user.isWarning ? 'warning' : 'bg'
        },
        userIcon: {
          type: 'user',
          online: user.isOnline,
          unread: {
            count: user.isUnread.count
          },
          typing: user.isTyping,
          close: user.isClose
        }
      };
    });

    result.push({
      elem: 'item',
      elemMods: {
        color: 'message'
      },
      userIcon: {
        type: 'chat',
        unread: {
          position: 'tr',
          count: 3
        }
      }
    });

    return result;
  }
});
