var Polyglotte = function(options){
	this.$dom = options.$dom;
	this.defaultLanguage = options.default || "gb";
	this.currentLanguage = options.current || this.defaultLanguage;
	this.translatableElementsClass = options.class || "poly";

	this.translate();
}

Polyglotte.prototype.setLanguage = function(langKey){
	this.currentLanguage = langKey;
	this.translate();
}

Polyglotte.prototype.translate = function(){
	var self = this;

	$('.' + this.translatableElementsClass).each(function(){
		$(this).text( translations[self.currentLanguage][$(this).attr('data-key')]);
	});
}