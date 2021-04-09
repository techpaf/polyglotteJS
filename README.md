# Polyglotte
### A translation management tool

Polyglotte is a quick and easy way to implement a king of localisation in web tech based project.

## How it work

### I) The library
You must import the polyglotte.js file into your webpage

### II) The translations
Translation are based on two things :
* an html class on a tag to indicate that the text of this tag must be translated
* a translations object with a key for each language. Each of this keys are an object containing some keys too

### III) Instanciate the lib
Somewhere in your JS, like in a dom ready, instanciate polyglotte like this :

```javascript
// Instantiating polyglotte
p = new Polyglotte({
	"default": "fr",
	"current": localStorage["plgLocal"],
	"class": "tm",
	"translations": translations
});
```