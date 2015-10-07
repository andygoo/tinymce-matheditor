# tinymce-matheditor
Math Editor Plugin

TinyMCE Init Example

tinymce.init({
	selector: 'textarea',
	content_css: ['../matheditor/html/css/math.css'],
	external_plugins: {
		'mathEditor': '../../../../matheditor/plugin.js',
	},
	plugins : 'mathEditor',
	toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | mathEditor'
});