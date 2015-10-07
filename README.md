# tinymce-matheditor
Insert math formulas to TinyMCE Editor.

###Configuration
```
<script type="text/javascript">
	tinymce.init({
		selector: 'textarea',
		content_css: ['../matheditor/html/css/math.css'],
		external_plugins: {
			'mathEditor': '../../../../matheditor/plugin.js',
		},
		plugins : 'mathEditor',
		toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | mathEditor'
	});
</script>	
```