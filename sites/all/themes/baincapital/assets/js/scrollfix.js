jQuery(document).on("scroll",onScroll);jQuery(document).ready(function(){var $=jQuery;if(window.location.hash)
{$('html, body').stop().animate({scrollTop:$(window.location.hash).offset().top-135},700);}
$('ul#sidebar li a').click(function(e){var id=$(this).attr('href');if(id.substring(0,7)=="http://"||id.substring(0,1)=="/")
return true;else
e.preventDefault();$(document).off("scroll");$('ul#sidebar li a').removeClass('active');$(this).addClass('active');if(navigator.userAgent.match(/(iPod|iPhone|Android)/))
{$('html, body').animate({scrollTop:$(id).offset().top-110},700,'swing',function(){$(document).on("scroll",onScroll);});}
else
{$('html, body').stop().animate({scrollTop:$(id).offset().top-135},700,'swing',function(){$(document).on("scroll",onScroll);});}});});function onScroll(event)
{var $=jQuery;if($(window).width()>=1349)
var scrollPosition=$(document).scrollTop()-450;else
var scrollPosition=$(document).scrollTop()-350;$('ul#sidebar li a').each(function()
{var currentLink=$(this);var refElement=$(currentLink.attr("href"));if(refElement.position().top==0)
return false;if(refElement.position().top<=scrollPosition&&refElement.position().top+refElement.height()>scrollPosition)
{$('ul#sidebar li a').removeClass('active');$(this).addClass('active');}
else
{currentLink.removeClass("active");}});}