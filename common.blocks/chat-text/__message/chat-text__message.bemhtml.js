block('chat-text').elem('message')({
  content: function() {
    return this.ctx.message;
  }
});
