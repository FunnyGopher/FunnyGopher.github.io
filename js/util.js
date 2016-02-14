function load(htmlPath) {
	var link = document.querySelector('link[rel="import"]');
    var content = link.import;
    var el = content.querySelector('.partial');
    document.body.appendChild(el.cloneNode(true));
}

$(document).ready(function() {
	$('.partial-script').each(function(i, obj) {
		document.body.removeChild(obj);
	});
	$('.partial').each(function(i, obj) {
		$(this).removeClass("partial");

		var classList = obj.className.split(/\s+/);
		if(classList[0] == "") {
			$(this).removeAttr("class");
		} 
	});
});