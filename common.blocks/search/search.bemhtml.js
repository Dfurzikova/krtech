block('search')({
  content: function() {
    return [
      {
        block: 'search-contacts'
      },
      {
        block: 'search-input',
        tag: 'input',
        attrs: { placeholder: 'Поле поиска...' }
      }
    ];
  }
});
