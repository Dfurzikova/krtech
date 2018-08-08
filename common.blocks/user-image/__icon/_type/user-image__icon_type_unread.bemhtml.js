block('user-image').elem('icon').elemMod('type', 'unread')({
    content: function() {
        return this.ctx.count;
    }
});

