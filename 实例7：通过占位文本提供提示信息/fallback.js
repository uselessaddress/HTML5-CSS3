var applyPlaceholders = function(){
    $('input').placeholder();
    Modernizr.load(
        {
            text:Modernizr.placeholder,
            nope:"jquery.placeholder.js",
            callback:function(url,result){
                if(!result){
                    applyPlaceholders();
                }
            }
        }
    );
}