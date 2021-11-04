jQuery(function () {
    jQuery(window).scroll(function () {
        filterMv();
    });
});
window.setInterval("filterMv()", 1000);

function filterMv() {
    var items = jQuery("div[role=list] .Card");
    jQuery.each(items, function (index, item) {
        var jqObj = jQuery(item);
        if (isNeedFilter(jqObj)) {
            jqObj.hide();
        }
    });
};

function isNeedFilter(jqObj){
	return jqObj.find("iframe").length > 0 || jqObj.hasClass("TopstoryItem--advertCard");
}