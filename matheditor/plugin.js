(function(tiny){
    tiny.PluginManager.add('mathEditor', function(editor,url){
        var icon = '../matheditor/icon/square_root.png';    
        editor.addButton('mathEditor',{
            title : 'Math Editor',
            image: icon,
            onClick(){
                editor.windowManager.open({
                    url: url + '/html/plugin.html',
                    title: 'Math Editor',
                    width: 640,
                    height: 420
                });           
            } 
        });
    });        
}(tinymce));

 
