/*
Copyright 2008-2013 Concur Technologies, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may
not use this file except in compliance with the License. You may obtain
a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations
under the License.
*/
!function(e){function t(t){if(t&&""!==t){$(".lang-selector a").removeClass("active"),$(".lang-selector a[data-language-name='"+t+"']").addClass("active");for(var r=0;r<n.length;r++)$(".highlight."+n[r]).parent().hide();$(".highlight."+t).parent().show(),e.toc.calculateHeights(),$(window.location.hash).get(0)&&$(window.location.hash).get(0).scrollIntoView(!0)}}function r(e){if(history){var t=window.location.hash;t&&(t=t.replace(/^#+/,"")),history.pushState({},"","?"+e+"#"+t),localStorage.setItem("language",e)}}function a(e){var r=(e[0],localStorage.getItem("language"));n=e,""!==location.search.substr(1)&&-1!=jQuery.inArray(location.search.substr(1),n)?(t(location.search.substr(1)),localStorage.setItem("language",location.search.substr(1))):t(null!==r&&-1!=jQuery.inArray(r,n)?r:n[0])}var n=[];e.setupLanguages=a,e.activateLanguage=t,$(function(){$(".lang-selector a").on("click",function(){var e=$(this).data("language-name"),a=new CustomEvent("languagechange",{detail:e});return r(e),t(e),window.dispatchEvent(a),!1}),window.onpopstate=function(){t(window.location.search.substr(1))}})}(window);