App.RichTextComponent = Ember.Component.extend({

    classNames: ['rich-note'],

    height: 200,

    content:"Enter Text here",

    richTextElement: function() {
        return this.$(".richNote");
    }.property(),

    didInsertElement: function() {
        var noteElement=this.get('richTextElement'),
        height = this.get('height'),
        content = this.get('content');
        if(height <=40) {
            height = 200;
        }
        noteElement.summernote({
            height: height,
            toolbar: [
                ['style', ['bold', 'italic', 'underline']],
                ['fontsize', ['fontsize']],
                ['color', ['color']],
                ['para', ['ul', 'ol', 'paragraph']],
                ['height', ['height']],
                ['insert', ['link']]
            ]
        });
        noteElement.code(content);
    },
    willDestroyElement: function() {
        this.get('richTextElement').destroy();
    }
});
