App.ApplicationController = Ember.Controller.extend({

    postContent: '',        // initial text to be displayed in text area

    height :250,            // height of the text area

    actions:{

        display: function(){

            alert(this.get('postContent'));
        }
    }
});