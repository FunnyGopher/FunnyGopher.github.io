function registerElement(tagName, clone, callback) {
    var proto = Object.create(HTMLElement.prototype);
    proto.createdCallback = function() {
    	callback.call(this);
    	this.appendChild(clone);
    };
    var element = document.registerElement(tagName, {
        prototype: proto
    });
    return element;
}

function stampTemplate(theDocument) {
	var thisDoc = (theDocument._currentScript || theDocument.currentScript).ownerDocument;
    var template = thisDoc.querySelector('#template');
    var clone = theDocument.importNode(template.content, true);
    return clone;
}