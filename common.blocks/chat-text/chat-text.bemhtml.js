block('chat-text')({
  content: function() {
    return [
      {
        elem: 'title',
        title: this.ctx.title
      },
      {
        elem: 'message',
        message: this.ctx.message
      },
      {
        elem: 'date',
        date: this.ctx.date
      },
      {
        elem: 'timestamp',
        timestamp: this.ctx.timestamp
      }
    ];
  }
});
