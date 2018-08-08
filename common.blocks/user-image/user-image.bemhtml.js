block('user-image')({
  js: function() {
    this.ctx.unread = this.ctx.unread || {};
    
    return {
      count: this.ctx.unread.count
    };
  },
  content: function() {
    var ctx = this.ctx;
    var validate = ['online', 'unread', 'close'];

    validate.forEach(function(v) {
      if (!ctx[v]) {
        ctx[v] = false;
      }
    });

    return [
      ctx.type === 'user'
        ? {
            elem: 'item-user',
            content: [
              {
                tag: 'img',
                attrs: { src: 'user-icon.png' }
              }
            ]
          }
        : '',
      ctx.type === 'chat'
        ? {
            elem: 'item-chat',
            content: [
              {
                tag: 'img',
                attrs: { src: 'chat-icon.png' }
              }
            ]
          }
        : '',
      {
        elem: 'icon',
        elemMods: {
          hidden: !ctx.online,
          type: 'online',
          position: ctx.online.position || 'br'
        }
      },
      {
        elem: 'icon',
        elemMods: {
          hidden: !ctx.unread.count,
          type: 'unread',
          position: ctx.unread.position
        },
        count: ctx.unread.count
      },

      {
        elem: 'icon',
        elemMods: {
          hidden: !ctx.close,
          type: 'close',
          position: ctx.close.position || 'tr'
        }
      },
      {
        elem: 'icon',
        elemMods: {
          hidden: !ctx.warning,
          type: 'warning',
          position: 'center'
        }
      },
      {
        elem: 'icon',
        elemMods: {
          hidden: !ctx.typing,
          type: 'typing',
          position: 'br'
        }
      }
    ];
  }
});
