jQuery(function () {
    jQuery(window).scroll(function () {
        filterMv();
    });
});
window.setInterval("filterMv()", 1000);

function filterMv() {
    //debugger;
    var items = jQuery("div[role=list] .Card");
    jQuery.each(items, function (index, item) {
        var jqObj = jQuery(item);
        if (jqObj.find("iframe").length > 0) {
            jqObj.remove();
        }
    });
};