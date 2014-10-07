App.RichInputComponent = Ember.Component.extend({

    classNames: ['rich-note'],

    height: 200,

    getElement: function() {
        return this.$(".richNote");
    }.property(),

    didInsertElement: function() {

        var element=this.get('getElement');
        var height = this.get('height');
        if(height <=40)
          height=200;

        element.summernote({

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
        this.get('getElement').destroy();
    }

});
