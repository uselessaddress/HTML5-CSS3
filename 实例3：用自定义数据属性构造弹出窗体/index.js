$("a.popup").click(function(event){
    event.preventDefault();
    var link = this;
    var href = link.getAttribute("href");
    var height = link.getAttribute("data-height");
    var width = link.getAttribute("data-width");
    // window.open(URL,name,features,replace)
    window.open(href,"popup","height="+height+",width="+width+"");
})