block('chat-container')({
  content: function() {
    return [
      {
        block: 'chat-tabs',
        mix: [
          {
            block: this.block,
            elem: 'tabs'
          }
        ]
      },
      {
        block: 'chat-window',
        mix: [
          {
            block: this.block,
            elem: 'window-position'
          }
        ]
      }
    ];
  }
});
