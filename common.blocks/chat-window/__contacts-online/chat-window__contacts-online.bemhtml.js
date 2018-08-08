block('chat-window').elem('contacts-online')({
  content: function() {
    return [this.ctx.online + ' Контактов онлайн', applyNext()];
  }
});
