modules.define('chat-container', ['i-bem-dom', 'user-image'], function(provide, bemDom, userImage) {
  provide(bemDom.declBlock(this.name, {
        onSetMod: {
          js: {
            inited: function() {
              this._userImages = this.findChildBlocks(userImage);
              this.startLive();
            }
          }
        },

        startLive: function() {
          this._intervaler = setInterval(
            function() {
              this.refreshStatuses();
            }.bind(this),
            400
          );
        },
        
        refreshStatuses: function() {
          this.getRandomElem().setOnline(Boolean(Math.random() > 0.5));
          this.getRandomElem().setTyping(Boolean(Math.random() > 0.5));
          this.getRandomElem().addUnread(Math.round(Math.random()));
        },

        getRandomElem: function() {
          return this._userImages.get(Math.floor(Math.random() * this._userImages.size()))
        }
      },
      {
        lazyInit: false
      }
    )
  );
});
