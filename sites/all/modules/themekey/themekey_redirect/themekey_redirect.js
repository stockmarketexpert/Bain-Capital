jQuery(document).ready(function($){var state=$.cookie('themekey_redirect_state');if(state===null){state=0;}
if(state==0){$.ajax({url:Drupal.settings.basePath.replace(/\/$/,"")+'/index.php?q=themekey/redirect_callback'+window.location.pathname+window.location.search.replace(/^\?/,"&"),dataType:'json',type:'GET',success:function(target){if(target){if(Drupal.settings.ThemeKeyRedirect.redirectOnce){$.cookie('themekey_redirect_state',2,{path:'/'});}
window.location.href=target;}}});if(Drupal.settings.ThemeKeyRedirect.checkOnce){$.cookie('themekey_redirect_state',2,{path:'/'});}}
else if(state==1){$('#block-themekey-redirect-domain-selector').show();$.cookie('themekey_redirect_state',2,{path:'/'});}});