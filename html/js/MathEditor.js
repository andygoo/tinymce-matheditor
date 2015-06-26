$(document).ready(function () {
    MathEditor.initialize();
});

var MathEditor = {
    insert: function (Latex) {
        $('#editable-math').mathquill('write', Latex).focus();
    },

    initialize: function () {
        MathEditor.initializeMath();
    },

    initializeMath: function () {
        $('#editable-math').focus();

        $('#editable-math').bind('keydown keypress', function () {
            MathEditor.EditableMathChange();
        }).keydown().focus();
    },

    EditableMathChange: function () {
        setTimeout(function () {
            var latex = $('#editable-math').mathquill('latex');
            $('#latex-source').val(latex);
        });
    },

    close: function () {
        tinyMCEPopup.close();
    },

    insertEditor: function () {
        var inst = tinyMCEPopup.editor;
        tinyMCEPopup.restoreSelection();
        var span = '&nbsp;<span class="math-editor mathquill-rendered-math">' + $('#editable-math').mathquill('html') + '</span>&nbsp;';
        //span.append($('#editable-math').mathquill('html'));

        //tinyMCEPopup.execCommand('mceInsertRawHTML', false, span); //use this for normal tinymce spacing "double space"
        tinyMCEPopup.execCommand('mceInsertContent', false, span); //use this for single space as default!!

        inst.execCommand('mceEndUndoLevel', false, {}, { skip_undo: true });
        MathEditor.close();
    },

    insertMatrix: function () {
        var rows = parseInt($('#ssRows').val());
        var cols = parseInt($('#ssColumns').val());
        var strMatrix = '\\begin{array}{' + this.repeat("c",cols) + '} ';
        var tempCols = new Array();
        while (tempCols.length + 1 <= cols) tempCols.push('\\mathrm{}');
        tempCols = tempCols.join('&');

        var tempRows = new Array();
        while (tempRows.length + 1 <= rows) tempRows.push(tempCols);
        tempRows = tempRows.join(' \\\\ ');
        this.insert(strMatrix + tempRows + ' \\end{array}');
        this.closeMatrixWindow();
    },
    
    openMatrixWindow: function () {
        $('#wnMatrix').window({
            width: 182,
            height: 150,
            modal: true,
            title: 'Insert Matrix',
            collapsible: false,
            minimizable: false,
            maximizable: false,
            resizable: false
        });
    },

    closeMatrixWindow: function () {
        $('#wnMatrix').window('close')
    },

    repeat: function (str, times) {
        return (new Array(times + 1)).join(str);
    }
};
