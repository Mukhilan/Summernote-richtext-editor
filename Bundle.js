ZE.Language = Ember.Object.extend({

	getRichTextLangBundle: function() {
		var lang = ZE.get('currentUser.language'),
			bundle = {};

		bundle[lang] = {
			font: {
				bold: Em.I18n.t('label.bold'),
				italic: Em.I18n.t('label.italic'),
				underline: Em.I18n.t('label.underline'),
				subscript: Em.I18n.t('label.subscript'),
				superscript: Em.I18n.t('label.superscript'),
				clear: Em.I18n.t('label.remove.font.style'),
				height: Em.I18n.t('label.line.height'),
				name: Em.I18n.t('label.font.family'),
				size: Em.I18n.t('label.font.size')
			},

			link: {
				link: Em.I18n.t('label.link'),
				insert: Em.I18n.t('label.insert.link'),
				unlink: Em.I18n.t('label.unlink'),
				edit: Em.I18n.t('label.edit'),
				textToDisplay: Em.I18n.t('label.text.to.display'),
				url: Em.I18n.t('message.url.link'),
				openInNewWindow: Em.I18n.t('message.open.new.window')
			},

			hr: {
				insert: Em.I18n.t('label.insert.horizontal.rule')
			},

			lists: {
				unordered: Em.I18n.t('label.unordered.list'),
				ordered: Em.I18n.t('label.ordered.list')
			},

			paragraph: {
				paragraph: Em.I18n.t('label.paragraph'),
				outdent: Em.I18n.t('label.outdent'),
				indent: Em.I18n.t('label.indent'),
				left: Em.I18n.t('label.align.left'),
				center: Em.I18n.t('label.align.center'),
				right: Em.I18n.t('label.align.right'),
				justify: Em.I18n.t('label.justify.full')
			},

			color: {
				recent: Em.I18n.t('label.recent.color'),
				more: Em.I18n.t('label.more.color'),
				background: Em.I18n.t('label.background.color'),
				foreground: Em.I18n.t('label.foreground.color'),
				transparent: Em.I18n.t('label.transparent'),
				setTransparent: Em.I18n.t('label.set.transparent'),
				reset: Em.I18n.t('label.reset'),
				resetToDefault: Em.I18n.t('label.reset.to.default')
			}
		};

		return bundle;
	}
});
