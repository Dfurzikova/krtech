modules.define('user-image', ['i-bem-dom'], function(provide, bemDom) {
    provide(bemDom.declBlock(this.name, {

        _onClick: function() {
            this.setUnread(0);
        },

        setOnline: function(val) {
            if (!this._canSetData()) {
                return;
            }

            this.findChildElem({ elem: 'icon', modName : 'type', modVal : 'online' }).setMod('hidden', !val);  
        },

        setTyping: function(val){
            if (!this._canSetData()) {
                return;
            }

            this.findChildElem({ elem: 'icon', modName : 'type', modVal : 'typing' }).setMod('hidden', !val);
        },

        addUnread: function(num) {
            this.params.count += num;

            this.setUnread();
        },

        setUnread: function(num){
            var elem;

            if (typeof num !== 'undefined') {
                this.params.count = num;
            }

            if (!this._canSetData()) {
                return;
            }

            elem = this.findChildElem({ elem: 'icon', modName : 'type', modVal : 'unread' });
            
            elem.setMod('hidden', !this.params.count);

            if (this.params.count) {
                elem.domElem.text(this.params.count);
            }
        },

        _canSetData: function() {
            return !this.findChildElem('item-chat') &&
                this.findChildElem({ elem: 'icon', modName : 'type', modVal : 'warning' }).hasMod('hidden', true);
        }
    }, 
    
    {
        lazyInit: false,

        onInit: function() {
            this._domEvents().on('click', this.prototype._onClick);
        }
    }));
    
});