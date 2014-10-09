describe('[components] RichTextComponent', function(){

        var view = null,
        controller = null,
        container,
        createRichText = function(cntrl, template) {
            cntrl = cntrl ? cntrl : createController();
            view = Ember.View.extend({
                template: Ember.Handlebars.compile(template ? template : '{{rich-text content=controller.postContent height=controller.height }}'),
                controller: cntrl,
                container: container,
                classNames: ['rich-note']
            }).create();

            Ember.Handlebars.helper("rich-text", App.RichTextComponent);
            controller = cntrl;

            Ember.run(function() {
                console.log(App.rootElement);
                view.appendTo(App.rootElement);
            });
            return view;
        },

        createController = function(content) {
            controller = Ember.Controller.extend({
               postContent:"Enter your text",
               height:220
            }).create();

            return controller;
        };

    beforeEach(function() {
        container = App.__container__;
    });

    afterEach(function() {
        Ember.run(function() {
                if (view) {
                    view.destroy();
                }
                if (controller) {
                   controller.destroy();
                }
        });
    });

    it("height value  should be checked", function() {
        createRichText();
        expect("height: 220px;").to.equal($(".note-editable").attr("style"));
    });

    it("Text area content  should be checked", function() {
        createRichText();
        expect(controller.get('postContent')).to.equal($(".note-editable").html());
    });
});
