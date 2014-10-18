describe('[components] RichTextComponent', function() {

	var view = null,
		controller = null,
		model = null,
		container,
		description,

		createRichText = function(cntrl, template) {
			cntrl = cntrl ? cntrl : createController(getModel());
			view = Ember.View.extend({
				template: Ember.Handlebars.compile(template ? template : '{{rich-text height=controller.height }}'),
				controller: cntrl,
				container: container,
				classNames: ['rich-note']
			}).create();

			Ember.Handlebars.helper("rich-text", ZE.RichTextComponent);
			controller = cntrl;

			Ember.run(function() {
				view.appendTo(ZE.rootElement);
			});

			return view;
		},

		createController = function(model) {
			controller = Ember.Controller.extend({
				height: 250,
				model: model
			}).create();
			return controller;
		},

		getModel = function() {
			Ember.run(function() {
				model = TestUtil.getStore().find('venue', 1);
			});
			return model;
		};

	beforeEach(function() {
		container = ZE.__container__;
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
		expect("height: 250px;").to.equal($(".note-editable").attr("style"));
	});

	it("placeHolder Value should be checked", function() {
		createRichText();
		expect('Enter Text').to.equal($(".note-editable").attr('placeholder'));
	});

	it("placeHolder Value should be checked", function() {
		createRichText();
		var getVal = function(field) {
			return controller.model.get(field);
		};
		alert("venue name:.." + getVal('address'));
		expect('Enter Text').to.equal($(".note-editable").attr('placeholder'));
	});
});
