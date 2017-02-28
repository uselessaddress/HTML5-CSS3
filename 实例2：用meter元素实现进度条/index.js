/*
检测浏览器是否支持meter：
创建一个meter标签，并检测max属性，如果检测不出这个属性，就说明浏览器不支持meter
*/
var noMeterSupport = function(){
    return(document.createElement('meter').max === undefined);
}

/*如果不支持，则获取到meter的值，自己定义外框(fakeMeter)和内框(fill)*/

if(noMeterSupport()){
    var fakeMeter,fill,label,labelText,max,meter,value;
    meter = $("#page_goal");
    value = meter.attr("value");
    max = meter.attr("max");
    labelText = "$" + meter.val();
    fakeMeter = $("<div></div>");
    fakeMeter.addClass("meter");
    label = $("<span>"+labelText+"</span>");
    label.addClass("label");
    
    fill = $("<div></div>");
    fill.addClass("fill");
    fill.css("width",(value/max*100)+"%");
    fill.append("<div style = 'clear:both;'><br></div>");
    fakeMeter.append(fill);
    fakeMeter.append(label);
    meter.replaceWith(fakeMeter);
}