(function (tinymce) {
    var Icon = tinymce.baseURL + '/plugins3x/matheditor/icon/square_root.png';

    tinymce.create('tinymce.plugins.matheditor', {
        init: function (ed, url) {
            // Register commands
            ed.addCommand('mceMathEditor', function () {
                ed.windowManager.open({
                    file: url + '/html/plugin.html',
                    width: 640,
                    height: 420,
                    inline: true
                }, {
                    plugin_url: url
                });
            });

            ed.addButton('matheditor', { cmd: 'mceMathEditor', image: Icon, title: 'Math Editor', tooltip: 'Math Editor' });
        },
    });

    tinymce.PluginManager.add('matheditor', tinymce.plugins.matheditor);
})(tinymce);