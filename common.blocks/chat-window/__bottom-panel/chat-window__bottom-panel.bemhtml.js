block('chat-window').elem('bottom-panel')({
  content: function() {
    return [
      {
        block: 'search',
        mix: [
          {
            block: this.block,
            elem: 'search'
          }
        ]
      },

      {
        block: 'add-button',
        content: [
          {
            elem: 'icon',
            tag: 'img',
            attrs: { src: 'add-user-icon.png' }
          },
          {
            tag: 'span',
            content: ['Новый контакт']
          }
        ]
      },
      {
        block: 'add-button',
        content: [
          {
            elem: 'icon',
            tag: 'img',
            attrs: { src: 'add-chat-icon.png' }
          },
          {
            tag: 'span',
            content: ['Создать группу']
          }
        ]
      }
    ];
  }
});
