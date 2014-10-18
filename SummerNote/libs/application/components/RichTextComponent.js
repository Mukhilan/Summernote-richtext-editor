App.RichTextComponent = Ember.Component.extend({
    layoutName:'components/rich-text',

    classNames: ['rich-note'],

    height: 200,

    content:"Enter Text here",

    richTextElement: function() {
        return this.$(".richNote");
    }.property(),

    didInsertElement: function() {
            var richTextElement = this.get('richTextElement'),
                height = this.get('height')
            if (height <= 40 || height > 250) {
                height = 200;
            }
                richTextElement.summernote({
                    height: height,
                    airMode: false,
                    toolbar: [
                        ['style', ['bold', 'italic', 'underline']],
                        ['fontsize', ['fontsize']],
                        ['fontname', ['fontname']],
                        ['color', ['color']],
                        ['para', ['ul', 'ol', 'paragraph']],
                        ['height', ['height']],
                        ['insert', ['link']]
                    ],
                    fontNames: [
                        'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New',
                        'Helvetica Neue', 'Impact', 'Lucida Grande',
                        'Tahoma', 'Times New Roman', 'Verdana'
                    ],
                    styleWithSpan: true
                });
                richTextElement.code(this.get('content'));
    },
    willDestroyElement: function() {
        this.get('richTextElement').destroy();
    },

    keyUp: function() {
        var richTextElement = this.get('richTextElement');
        var content=richTextElement.code();
        this.set('content',content);
        console.log(this.get('content'));
    }
});
