describe('[components] RichTextComponent', function() {
    var view = null,
        controller = null,
        container,
        createRichText = function(cntrl, template) {
            cntrl = cntrl ? cntrl : createController();
            view = Ember.View.extend({
                template: Ember.Handlebars.compile(template ? template : '{{rich-text content=controller.postContent height=controller.height}}'),
                controller: cntrl,
                container: container,
                classNames: ['rich-note']
            }).create();

            controller = cntrl;

            Ember.run(function() {
                view.appendTo(App.rootElement);
            });

            return view;
        },
        createController = function(content) {
            controller = Ember.Controller.extend({
               postContent:postContent,
               height:height
            }).create();

            return controller;
        };
        postContent = "Enter Your Text Here";
        height = 300;

    beforeEach(function() {
        container = App.__container__;
        Ember.run(App, 'advanceReadiness');
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

    it("height and content should be checked", function() {
        createRichText();
        expect(300).to.equal(controller.get('height'));
    });
});
