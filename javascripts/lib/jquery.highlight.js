/*
 * jQuery Highlight plugin
 *
 * Based on highlight v3 by Johann Burkard
 * http://johannburkard.de/blog/programming/javascript/highlight-javascript-text-higlighting-jquery-plugin.html
 *
 * Code a little bit refactored and cleaned (in my humble opinion).
 * Most important changes:
 *  - has an option to highlight only entire words (wordsOnly - false by default),
 *  - has an option to be case sensitive (caseSensitive - false by default)
 *  - highlight element tag and class names can be specified in options
 *
 * Usage:
 *   // wrap every occurrance of text 'lorem' in content
 *   // with <span class='highlight'> (default options)
 *   $('#content').highlight('lorem');
 *
 *   // search for and highlight more terms at once
 *   // so you can save some time on traversing DOM
 *   $('#content').highlight(['lorem', 'ipsum']);
 *   $('#content').highlight('lorem ipsum');
 *
 *   // search only for entire word 'lorem'
 *   $('#content').highlight('lorem', { wordsOnly: true });
 *
 *   // don't ignore case during search of term 'lorem'
 *   $('#content').highlight('lorem', { caseSensitive: true });
 *
 *   // wrap every occurrance of term 'ipsum' in content
 *   // with <em class='important'>
 *   $('#content').highlight('ipsum', { element: 'em', className: 'important' });
 *
 *   // remove default highlight
 *   $('#content').unhighlight();
 *
 *   // remove custom highlight
 *   $('#content').unhighlight({ element: 'em', className: 'important' });
 *
 *
 * Copyright (c) 2009 Bartek Szopka
 *
 * Licensed under MIT license.
 *
 */
jQuery.extend({highlight:function(e,r,t,a){if(3===e.nodeType){var n=e.data.match(r);if(n){var i=document.createElement(t||"span");i.className=a||"highlight";var o=e.splitText(n.index);o.splitText(n[0].length);var d=o.cloneNode(!0);return i.appendChild(d),o.parentNode.replaceChild(i,o),1}}else if(1===e.nodeType&&e.childNodes&&!/(script|style)/i.test(e.tagName)&&(e.tagName!==t.toUpperCase()||e.className!==a))for(var c=0;c<e.childNodes.length;c++)c+=jQuery.highlight(e.childNodes[c],r,t,a);return 0}}),jQuery.fn.unhighlight=function(e){var r={className:"highlight",element:"span"};return jQuery.extend(r,e),this.find(r.element+"."+r.className).each(function(){var e=this.parentNode;e.replaceChild(this.firstChild,this),e.normalize()}).end()},jQuery.fn.highlight=function(e,r){var t={className:"highlight",element:"span",caseSensitive:!1,wordsOnly:!1};if(jQuery.extend(t,r),e.constructor===String&&(e=[e]),e=jQuery.grep(e,function(e){return""!=e}),e=jQuery.map(e,function(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}),0==e.length)return this;var a=t.caseSensitive?"":"i",n="("+e.join("|")+")";t.wordsOnly&&(n="\\b"+n+"\\b");var i=new RegExp(n,a);return this.each(function(){jQuery.highlight(this,i,t.element,t.className)})};