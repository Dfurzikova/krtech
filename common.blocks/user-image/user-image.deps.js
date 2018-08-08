({
  shouldDeps: [
    {
      block: 'fa',
      mods: {
        icon: ['pencil', 'close', 'exclamation']
      }
    },
    {
      elem: 'item-user'
    },
    {
      elem: 'item-chat'
    },
    {
      elem: 'icon',
      mods: {
        type: ['online', 'unread', 'close', 'warning', 'typing'],
        position: ['tr', 'tl', 'br', 'center'],
        hidden: true
      }
    }
  ]
});
