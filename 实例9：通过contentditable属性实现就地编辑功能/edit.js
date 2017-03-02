var hasContentEditableSupport = function(){
    return (document.getElementById("edit_profile_link").contentEditable != null )
};

if(hasContentEditableSupport()){
    $('#edit_profile_link').hide();
    var status = $('#status');
    // 当元素失去焦点时发生 blur 事件
    $("span[contenteditable]").blur(function(){
        var field = $(this).attr("id");
        var value = $(this).text(); 
        var resourceURL = $(this).closest("ul").attr("data-url");
        // closest() 方法获得匹配选择器的第一个祖先元素，从当前元素开始沿 DOM 树向上
        //直到找到已应用选择器的一个匹配为止。
        $.ajax({
            url:resourceURL,
            dataType:"json",
            method:"PUT",
            data:field + "=" + value,
            success:function(data){
                status.html("The record was saved.");
            },
            error:function(data){
                status.html("The record failed to save.");
            }
        });
    });
}