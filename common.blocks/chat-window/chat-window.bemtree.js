block('chat-window')({
  content: function(node) {
    var online = node.data.users.filter(function(v) {
      return v.isOnline && !v.isWarning;
    }).length;

    return [
      {
        elem: 'contacts-online',
        online: online,
        content: [
          {
            elem: 'close-icon'
          }
        ]
      },
      {
        elem: 'chat-container'
      },
      {
        elem: 'bottom-panel'
      }
    ];
  }
});
