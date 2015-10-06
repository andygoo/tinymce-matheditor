/*(function (tinymce) {
    var Icon = tinymce.baseURL + 'matheditor/icon/square_root.png';
    
    tinymce.create('tinymce.plugins.mathEditor', {
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
})(tinymce);*/

tinymce.PluginManager.add('mathEditor', function(editor,url){
    var icon = tinymce.baseURL + 'matheditor/icon/square_root.png';    
    editor.addMenuItem('mathEditor',{
        text : 'Math Editor',
        context: 'tools',
        onClick: function(){
                editor.windowManager.open({
                    url: url + '/html/plugin.html',
                    width: 640,
                    height: 420
                });           
        } 
    });
}); 
