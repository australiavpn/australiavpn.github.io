(function(_w) {

    var w = _w;

    //main namespace
    G = {};
    G.page_code = 'index';
    G.Config = {

    };


    G.Fun = {
        init: function(page_code) {
            $('.js_openeyes').css({cursor: 'pointer'}).click(function(){
                var that = $(this);
                that.parent('td').find('span').text(that.data('text'));
                that.hide();
            })
        }
    };

    $(function() {
        var page_code = $('body').attr('data-page');
        G.Fun.init(page_code);
    });
})();