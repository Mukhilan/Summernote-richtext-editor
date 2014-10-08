App.RichTextComponent = Ember.Component.extend({

    classNames: ['rich-note'],

    height: 200,

    content:"Enter Text here",

    richTextElement: function() {
        return this.$(".richNote");
    }.property(),

    didInsertElement: function() {
        var richTextElement=this.get('richTextElement'),
        height = this.get('height');
        if(height <=40 && height>250) {
            height = 200;
        }
        richTextElement.summernote({
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
        richTextElement.code(this.get('content'));
    },
    willDestroyElement: function() {
        this.get('richTextElement').destroy();
    }
});
