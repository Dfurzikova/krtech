block('chat-item')({
  content: function() {
    var userImage = this.ctx.userImage;

    userImage.block = 'user-image';
    userImage.type = 'user';
    userImage.mix = {
      block: this.block,
      elem: 'item'
    };

    return [
      userImage,
      {
        block: 'chat-text',
        title: this.ctx.title,
        message: this.ctx.message,
        date: this.ctx.date,
        timestamp: this.ctx.timestamp
      }
    ];
  }
});
