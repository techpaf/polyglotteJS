var Polyglotte = function(options){
	this.$dom = options.$dom;
	this.defaultLanguage = options.default || "gb";
	this.currentLanguage = options.current || this.defaultLanguage;
	this.translatableElementsClass = options.class || "poly";
	this.translations = options.translations || null;

	this.translate();
}

Polyglotte.prototype.setLanguage = function(langKey){
	this.currentLanguage = langKey;
	localStorage["plgLocal"] = langKey;
	this.translate();
}

Polyglotte.prototype.translate = function(){
	var self = this;

	$('.' + this.translatableElementsClass).each(function(){
		var nodeName = $(this)[0]['nodeName'];
		if(nodeName == "INPUT"){
			$(this).attr('placeholder', self.translations[self.currentLanguage][$(this).attr('data-key')]);
		}
		if(nodeName == "OPTION"){
			$(this).attr('value', self.translations[self.currentLanguage][$(this).attr('data-key')]);
			$(this).text(self.translations[self.currentLanguage][$(this).attr('data-key')]);
		}
		else{
			$(this).html( self.translations[self.currentLanguage][$(this).attr('data-key')]);	
		}		
	});
}
