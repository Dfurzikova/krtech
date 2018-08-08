block('chat-tabs').elem('item')({
  content: function() {
    var user = this.ctx.userIcon || {};

    if (this.elemMods.color === 'warning') {
      user = {
        type: 'user',
        warning: true
      };
    }

    user.block = 'user-image';

    return [user];
  }
});
