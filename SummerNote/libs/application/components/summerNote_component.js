App.RichInputComponent = Ember.Component.extend({

    classNames: ['rich-note'],

    height: 200,

    getNoteElement: function() {
        return this.$(".richNote");
    }.property(),

    didInsertElement: function() {

        var noteElement=this.get('getNoteElement');
        var height = this.get('height');
        if(height <=40)
          height=200;

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
    },

    willDestroyElement: function() {
        this.get('getNoteElement').destroy();
    }
});
