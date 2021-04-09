# Polyglotte
### A translation management tool

Polyglotte is a quick and easy way to implement a kind of localisation in web tech based project.

## How it work

### I) Import polyglotte
You must import the polyglotte.js file into your webpage with a script tag
```html
<script src="path-to-libs/polyglotte.js"></script>
```


### II) The translations
Translations are based on 2 things. A file with translated key, and a class on the tag of the HTML element to translate

First of all, you must have somewhere a variable which contains each translations for each languages. This object must be passed to polyglotte when instantiating the library. We will cover that on step IV.

Here is a small exemple of a basic translation object
```javascript
var translations = {
    "gb" : {
    	"hello": "Hello !",
    	"how-are-you": "How are you ?"
    },
    "fr" : {
    	"hello": "Salut !",
    	"how-are-you": "Comment ça va ?"
    },
    "es" : {
    	"hello": "Hola !",
    	"how-are-you": "Como esta ?"
    }
}
```

Data organisations :
* An object with a key for each language.
* Language key must be an [ISO 3166-1-alpha-2 code of a country](https://www.iso.org/obp/ui/#search).
* Each languages keys are a JS object containing a key for the text part to translate (like "hello" is present in gb, fr and es language keys). If a key doen't exists in a language, the value of the default language will be applyed

### III) The HTML part
Now that we have our translations, we have to make a part in our DOM translatable.
It's easy, just add a paragraphe like that :
```html
<p class="plg" data-key="hello"></p>
```

Three things to notice there :
* The p tag doesn't have any content
* The p tag have a class "plg" here (for polyglotte but use the one you wants...)
* The p tag have a data-key attr with the value that match a translated key from the translations, here "hello" 

### IV) Instanciate the lib
Now that we have the lib, the translations, and an HTML element that must be translated, lets instanciate polyglotte.

Somewhere, like in a DOM Ready, instanciate polyglotte as so :
```javascript
    p = new Polyglotte({
    "default": "fr",
    "current": localStorage["plgLocal"],
    "class": "plg",
    "translations": translations
});
```