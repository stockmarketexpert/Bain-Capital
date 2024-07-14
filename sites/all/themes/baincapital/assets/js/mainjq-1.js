jQuery(document).ready(function($){setTimeout(()=>{if($(".view-corporate-bios, .view-business-wise-people, .view-corp-business-bio-export-table").length){$("body").addClass("bios-table")}},100);removeRelAttrValue();if(content_type!='responsible business'){var mq=window.matchMedia("(min-width: 767px)");if(mq.matches){var desktop_title='<h1 style="color: '+banner_text_color+';"> '+banner_title+'</h1>';var desktop_secondary_title=JSON.parse(banner_secondary_title);$('#caption').find('.slider-caption').html(desktop_title);$('#caption').find('.slider-subtext').html(desktop_secondary_title);$('#captionMobile .slider-caption h1').remove();$("#captionMobile .slider-subtext").empty();}else{var mobile_title='<h1 style="color: '+banner_mbl_text_color+';"> '+banner_title+'</h1>';var mobile_secondary_title=JSON.parse(banner_secondary_title);$('#captionMobile').find('.slider-caption').html(mobile_title);$('#captionMobile').find('.slider-subtext').html(mobile_secondary_title);$('#caption .slider-caption h1').remove();$("#caption .slider-subtext").empty();}
$(window).resize(function(){if(mq.matches){var desktop_title='<h1 style="color: '+banner_text_color+';"> '+banner_title+'</h1>';var desktop_secondary_title=JSON.parse(banner_secondary_title);$('#caption').find('.slider-caption').html(desktop_title);$('#caption').find('.slider-subtext').html(desktop_secondary_title);$('#captionMobile .slider-caption h1').remove();$("#captionMobile .slider-subtext").empty();}else{var mobile_title='<h1 style="color: '+banner_mbl_text_color+';"> '+banner_title+'</h1>';var mobile_secondary_title=JSON.parse(banner_secondary_title);$('#captionMobile').find('.slider-caption').html(mobile_title);$('#captionMobile').find('.slider-subtext').html(mobile_secondary_title);$('#caption .slider-caption h1').remove();$("#caption .slider-subtext").empty();}});}
$(".location-dropdown .dropdown .dropdown-menu li a").click(function(){var selText=$(this).text();$(this).parents('.dropdown').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');});menuclick();if(isTouchDevice()===true){$(document).on('click touchstart',function(e){var navigationContainer=$("#navigation");if(!navigationContainer.is(e.target)&&navigationContainer.has(e.target).length===0){$('header .logoTop .navbar .navbar-nav li > a').removeClass('menu-first-click');}});menuclickDesktop();}
$('#myButton').on('click',function(){var $btn=$(this).button('loading')
$btn.button('reset')})
new WOW().init();$(window).scroll(function(e){parallax();});$('.locationWrap .nav-tabs div a').click(function(e){$('.locationWrap .nav-tabs').find('a').removeClass('active');$(this).closest('a').addClass('active');});$('body').click(function(e){if($(e.target).closest('.locationToggle').length===0){$('.locationWrap .collapse').collapse('hide');}});$('.locationWrap .nav-tabs .locationToggle a').on('click',function(){$('.locationWrap .collapse').collapse('hide');});$('.TabWrap .nav-tabs div a').click(function(e){$('.TabWrap .nav-tabs').find('a').removeClass('active');$(this).closest('a').addClass('active');});$('body').click(function(e){if($(e.target).closest('.TabToggle').length===0){$('.TabWrap .collapse').collapse('hide');}});$('.TabWrap .nav-tabs .TabToggle a').on('click',function(){$('.collapse').collapse('hide');});function parallax(){var scrolled=$(window).scrollTop();$('.captionFixed').css('top',-(scrolled*0.30)+'px');}
$(window).scroll(function(){var commBody=$('body').hasClass('community_partner');if(commBody==true){if($(window).scrollTop()>100&&$(window).width()>1026)
{$('header .logoTop').addClass('scrolllogo fadeIn');}
else if($(window).scrollTop()>30&&($(window).width()>767&&$(window).width()<1025))
{$('header .logoTop').addClass('scrolllogo fadeIn');}
else if($(window).scrollTop()>20&&($(window).width()>319&&$(window).width()<767))
{$('header .logoTop').addClass('scrolllogo fadeIn');}
else{$('header .logoTop').removeClass('scrolllogo fadeOut');}}
else{if($(window).scrollTop()>300&&$(window).width()>1026)
{$('header .logoTop').addClass('scrolllogo fadeIn');}
else if($(window).scrollTop()>200&&($(window).width()>767&&$(window).width()<1025))
{$('header .logoTop').addClass('scrolllogo fadeIn');}
else if($(window).scrollTop()>20&&($(window).width()>319&&$(window).width()<767))
{$('header .logoTop').addClass('scrolllogo fadeIn');}
else{$('header .logoTop').removeClass('scrolllogo fadeOut');}}});$(window).scroll(function(){var st=$(this).scrollTop();if($(window).scrollTop()>450&&$(window).width()>1400)
{$(".captionFixed,.fixtxt").hide();$(".slider-content").css("opacity","0");}
else if($(window).scrollTop()>320&&($(window).width()>1199&&$(window).width()<1399))
{$(".captionFixed,.fixtxt").hide();$(".slider-content").css("opacity","0");}
else if($(window).scrollTop()>390&&($(window).width()>1025&&$(window).width()<1199))
{$(".captionFixed,.fixtxt").hide();$(".slider-content").css("opacity","0");}
else if($(window).scrollTop()>370&&($(window).width()>991&&$(window).width()<1025))
{$(".captionFixed,.fixtxt").hide();$(".slider-content").css("opacity","0");}
else if($(window).scrollTop()>190&&($(window).width()>767&&$(window).width()<991))
{$(".captionFixed,.fixtxt").hide();$(".slider-content").css("opacity","0");}
else if($(window).scrollTop()>300&&($(window).width()>479&&$(window).width()<600))
{$(".captionFixed,.fixtxt").hide();$(".slider-content").css("opacity","0");}
else if($(window).scrollTop()>250&&($(window).width()>319&&$(window).width()<478))
{$(".captionFixed,.fixtxt").hide();$(".slider-content").css("opacity","0");}
else{$(".captionFixed,.fixtxt").show(0);$(".slider-content").css("opacity","1");}});$('#toggle').click(function(){$(this).toggleClass('active');$('#overlay').toggleClass('open');});$('html').bind('click touchstart',function(event){});var scrolltotop={setting:{startline:100,scrollto:0,scrollduration:1000,fadeduration:[500,100]},controlHTML:'',controlattrs:{offsetx:0,offsety:20},anchorkeyword:'#top',state:{isvisible:false,shouldvisible:false},scrollup:function(){if(!this.cssfixedsupport)
this.$control.css({opacity:0})
var dest=isNaN(this.setting.scrollto)?this.setting.scrollto:parseInt(this.setting.scrollto)
if(typeof dest=="string"&&jQuery('#'+dest).length==1)
dest=jQuery('#'+dest).offset().top
else
dest=0
this.$body.animate({scrollTop:dest},this.setting.scrollduration);},keepfixed:function(){var $window=jQuery(window)
var controlx=$window.scrollLeft()+$window.width()-this.$control.width()-this.controlattrs.offsetx
var controly=$window.scrollTop()+$window.height()-this.$control.height()-this.controlattrs.offsety
this.$control.css({left:controlx+'px',top:controly+'px'})},togglecontrol:function(){var scrolltop=jQuery(window).scrollTop()
if(!this.cssfixedsupport)
this.keepfixed()
this.state.shouldvisible=(scrolltop>=this.setting.startline)?true:false
if(this.state.shouldvisible&&!this.state.isvisible){this.$control.stop().animate({opacity:1},this.setting.fadeduration[0])
this.state.isvisible=true}
else if(this.state.shouldvisible==false&&this.state.isvisible){this.$control.stop().animate({opacity:0},this.setting.fadeduration[1])
this.state.isvisible=false}},init:function(){jQuery(document).ready(function($){var mainobj=scrolltotop
var iebrws=document.all
mainobj.cssfixedsupport=!iebrws||iebrws&&document.compatMode=="CSS1Compat"&&window.XMLHttpRequest
mainobj.$body=(window.opera)?(document.compatMode=="CSS1Compat"?$('html'):$('body')):$('html,body')
mainobj.$control=$('<div id="topcontrol">'+mainobj.controlHTML+'</div>').css({position:mainobj.cssfixedsupport?'fixed':'absolute',bottom:mainobj.controlattrs.offsety,right:mainobj.controlattrs.offsetx,opacity:0,cursor:'pointer'}).attr({title:'Scroll Back to Top'}).click(function(){mainobj.scrollup();return false}).appendTo('body')
if(document.all&&!window.XMLHttpRequest&&mainobj.$control.text()!='')
mainobj.$control.css({width:mainobj.$control.width()})
mainobj.togglecontrol()
$('a[href="'+mainobj.anchorkeyword+'"]').click(function(){mainobj.scrollup()
return false})
$(window).bind('scroll resize',function(e){mainobj.togglecontrol()})})}}
scrolltotop.init()
$('[data-toggle="tooltip"]').tooltip()
equalheight=function(container){var currentTallest=0,currentRowStart=0,rowDivs=new Array(),$el,topPosition=0;$(container).each(function(){$el=$(this);$($el).height('auto')
topPostion=$el.position().top;if(currentRowStart!=topPostion){for(currentDiv=0;currentDiv<rowDivs.length;currentDiv++){rowDivs[currentDiv].height(currentTallest);}
rowDivs.length=0;currentRowStart=topPostion;currentTallest=$el.height();rowDivs.push($el);}else{rowDivs.push($el);currentTallest=(currentTallest<$el.height())?($el.height()):(currentTallest);}
for(currentDiv=0;currentDiv<rowDivs.length;currentDiv++){rowDivs[currentDiv].height(currentTallest);}});}
$(window).load(function(){equalheight('.eqheight');removeRelAttrValue();});$(window).resize(function(){equalheight('.eqheight');});$('.eqheightCalc').matchHeight();$(window).on('load resize',function(){var maxHeight=0;$(".grid .team_desc .__location").each(function(){if($(this).height()>maxHeight){maxHeight=$(this).outerHeight();}});$("#__team_isotop .__team_bg .team_desc").css('padding-bottom',maxHeight+'px');$('#__team_isotop .__team_bg').matchHeight();});$(window).on("load resize",function(){divMatchHeight();stickySidebar();$(".ic_container").capslide({caption_color:'white',border:'0 solid #aba6a3',showcaption:true});if($(window).width()<992)
{$(".sideStick").attr('id','valueCollapse');$(".sideStick").addClass('collapse');}
else{$(".sideStick").removeAttr('id');$(".sideStick").removeClass('collapse');}});$('.counter').counterUp({delay:10,time:1000});$('.sideStick').on('shown.bs.collapse',function(){$(".glyphicon").removeClass("glyphicon-triangle-bottom").addClass("glyphicon-triangle-top");});$('.sideStick').on('hidden.bs.collapse',function(){$(".glyphicon").removeClass("glyphicon-triangle-top").addClass("glyphicon-triangle-bottom");});var isIE=document.all&&document.addEventListener&&!window.atob;if(isIE){$('.search-ico .dropdown-menu').removeAttr('data-dropdown-out');}
sliderCount();$(window).resize(function(){sliderCount();if($(window).width()>=960){$('#investorPopup').modal('hide');}
menuclick();bannerTxtLengthCal();});$(document).click(function(event){var clickover=$(event.target);var _opened=$(".investorLoginWrap").hasClass("collapse in");if(_opened===true&&!clickover.hasClass("__inr-btn")&&clickover.parents('.investorLoginWrap').length==0){$(".__inr-btn").click();}});bannerTxtLengthCal();esgApproachSliderButtonHeight();$('.esg-approach-slider-buttons-wrap .nav-tabs > li > a').hover(function(){$(this).tab('show');});$('.esg-approach-slider-buttons-wrap .esg-approach-slider-buttons-title').hover(function(){$('.esg-approach-slider-buttons-wrap .nav-tabs > li:not(.firt-child) > a').tab('show');$($('.esg-approach-slider-buttons-wrap .nav-tabs > li:not(.firt-child) > a').attr('href')).removeClass('active');$('.esg-approach-slider-buttons-wrap .nav-tabs > li:not(.firt-child) > a').parent().removeClass('active');$('.esg-approach-slider-buttons-wrap .nav-tabs > li:not(.firt-child) > a').removeClass('active');$('.esg-approach-slider-buttons-wrap .nav-tabs > li:first-child > a').tab('show');});$('.banner-rf-section.esg-approach-section .row').not('.esg-approach-slider-buttons-wrap .nav-tabs > li:not(.firt-child) > a').on('mouseleave',function(){$('.esg-approach-slider-buttons-wrap .nav-tabs > li:not(.firt-child) > a').tab('show');$($('.esg-approach-slider-buttons-wrap .nav-tabs > li:not(.firt-child) > a').attr('href')).removeClass('active');$('.esg-approach-slider-buttons-wrap .nav-tabs > li:not(.firt-child) > a').parent().removeClass('active');$('.esg-approach-slider-buttons-wrap .nav-tabs > li:not(.firt-child) > a').removeClass('active');$('.esg-approach-slider-buttons-wrap .nav-tabs > li:first-child > a').tab('show');});checkBoxSwitchAnim();slidingpopupcookie();getallCookies();});window.onresize=function(event){esgApproachSliderButtonHeight();console.log("windows resize");};function bannerTxtLengthCal(){var $=jQuery;var countBannerTxtcommunity_partner=$('.slider-caption .dtitle h1').text();var bannerTxtLengthcommunity_partner=countBannerTxtcommunity_partner.length;if(bannerTxtLengthcommunity_partner>=80){$('.slider-caption .dtitle h1').addClass('smallTitleBannerCaption');}
var countBannerTxt=$('.captionFixed.hidden-xs .slider-caption h1').text();var bannerTxtLength=countBannerTxt.length;if(bannerTxtLength>=80){$('.captionFixed.hidden-xs .slider-caption h1').addClass('smallTitleBannerCaption');}
if((bannerTxtLength>=50)&&(bannerTxtLength<80)){$('.captionFixed.hidden-xs .slider-caption h1').addClass('smallTitleBannerCaptionNew');$('.captionFixed.hidden-xs .slider-caption h1').removeClass('smallTitleBannerCaption');}
var countCitizenBannerTxt=$('.citizenResponse h1').text();var countCitizenBannerTxtPara=$('.citizenResponse p').text();var bannerCitizenTxtLength=countCitizenBannerTxt.length;var bannerCitizenTxtLengthPara=countCitizenBannerTxtPara.length;var bannerCitizenTotalLength=bannerCitizenTxtLength+bannerCitizenTxtLengthPara;if((($(window).width())>=992)&&(($(window).width())<=1199)){if(bannerCitizenTotalLength>=400){$('.citizenResponse').addClass('smallTextCitizenCaption');}else{$('.citizenResponse').removeClass('smallTextCitizenCaption');}}
if(bannerCitizenTotalLength>=700){$('.citizenResponse').addClass('smallTextCitizenCaption1');}else{$('.citizenResponse').removeClass('smallTextCitizenCaption1');}}
function sliderCount(){var $=jQuery;var sliderImg=$('#top-image img').height();$('#top-image').css('height',sliderImg);}
setTimeout(function(){if(window.location.hash){var hash=smoothScroll.escapeCharacters(window.location.hash);var toggle=document.querySelector('a[href*="'+hash+'"]');var options={};smoothScroll.animateScroll(hash,toggle,options);}},1000);function stickySidebar(){var $=jQuery;if($('body').find('.matchWrap').length){$(".sideStick").stick_in_parent({parent:'.matchWrap',offset_top:115});}
else{$(".sideStick").stick_in_parent({parent:'.allContent',offset_top:115});}}
function divMatchHeight(){var $=jQuery;if($(window).width()>767){var findTop=$('.matchWrap').css('top');$('.matchContent').css({marginBottom:findTop,float:'left',width:'100%'});}
else{$('.matchContent').css({marginBottom:'0',float:'none',width:'100%'});}}
function menuclick(){$('.overlay-hugeinc nav ul li a .menuIconsPlus').click(function(event){event.preventDefault();});}
function menuclickDesktop(){var $=jQuery;if($('header .logoTop .navbar .navbar-nav').find("li:not(:has(ul))")){$('header .logoTop .navbar .navbar-nav').find("li:not(:has(ul))").find('a').addClass('menu-first-click');$('header .logoTop .navbar .navbar-nav').find("li:has(ul)").addClass('menu-has-child');}
$('header .logoTop .navbar .navbar-nav li:has(ul)').click(function(event){event.preventDefault();$('header .logoTop .navbar .navbar-nav li a').removeClass('menu-first-click');$(this).find('a').addClass('menu-first-click');if($('header .logoTop .navbar .navbar-nav').find("li:has(ul)").find('a').hasClass()!='menu-first-click'){$(this).find('.submenuCitizen').first().stop(true,true).delay(100).slideDown();$(this).find('a').first().addClass('menu-first-click');}});$('header .logoTop .navbar .navbar-nav li > a').click(function(){if($(this).hasClass('menu-first-click'))
{location.href=$(this).attr('href');}});}
function isTouchDevice(){return true==("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch);}
function focusonelement()
{setTimeout(function(){document.getElementById("keys").focus();document.getElementById("mobile_keys").focus();},200);}
function removeRelAttrValue(){}
function esgApproachSliderButtonHeight(){var $=jQuery;setTimeout(function(){if(window.matchMedia("(min-width: 768px)").matches){var n=$('.esg-approach-slider-button').length-1;var totalHeight=$('.banner-section-wrapper .esg-approach-slider-buttons-wrap').outerHeight()-$('.esg-approach-slider-buttons-title').outerHeight();$('.esg-approach-slider-buttons').css('height',totalHeight);var height=totalHeight/n;$('.esg-approach-slider-button').css('height',height);}},500);if(window.matchMedia("(max-width: 767px)").matches){if($(".esg-approach-section").length){var tab_selector,tablist,current_active,list_lenth;tab_selector=".esg-approach-section";tablist=$('.esg-approach-section .nav-tabs > li > a[data-toggle="tab"]');list_lenth=tablist.length;$(tablist).click(function(e){$.fn.fullpage.reBuild();});const $tabsToDropdown=$(".tabs-to-dropdown");function generateDropdownMarkup(container){const $navWrapper=container.find(".esg-approach-slider-buttons-wrap");const $navPills=container.find(".nav-tabs");const firstTextLink=$navPills.find("li:first-child a").text();const $items=$navPills.find("li");const markup=`
			  <div class="dropdown d-md-none">
				<button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				  ${firstTextLink}
				</button>
				<div class="dropdown-menu" aria-labelledby="dropdownMenuButton"> 
				  ${generateDropdownLinksMarkup($items)}
				</div>
			  </div>
			`;$navWrapper.prepend(markup);}
function generateDropdownLinksMarkup(items){let markup="";items.each(function(){const textLink=$(this).find("a").text();markup+=`<a class="dropdown-item" href="#">${textLink}</a>`;});return markup;}
function showDropdownHandler(e){const $this=$(e.target);const $dropdownToggle=$this.find(".dropdown-toggle");const dropdownToggleText=$dropdownToggle.text().trim();const $dropdownMenuLinks=$this.find(".dropdown-menu a");const dNoneClass="d-none";$dropdownMenuLinks.each(function(){const $this=$(this);if($this.text()==dropdownToggleText){$this.addClass(dNoneClass);}else{$this.removeClass(dNoneClass);}});}
function clickHandler(e){e.preventDefault();const $this=$(this);const index=$this.index();const text=$this.text();$this.closest(".dropdown").find(".dropdown-toggle").text(`${text}`);$this.closest($tabsToDropdown).find(`.nav-tabs li:eq(${index}) a`).tab("show");setTimeout(function(){$.fn.fullpage.reBuild();},500);}
function shownTabsHandler(e){const $this=$(e.target);const index=$this.parent().index();const $parent=$this.closest($tabsToDropdown);const $targetDropdownLink=$parent.find(".dropdown-menu a").eq(index);const targetDropdownLinkText=$targetDropdownLink.text();$parent.find(".dropdown-toggle").text(targetDropdownLinkText);}
$tabsToDropdown.each(function(){const $this=$(this);const $pills=$this.find('a[data-toggle="pill"]');generateDropdownMarkup($this);const $dropdown=$this.find(".dropdown");const $dropdownLinks=$this.find(".dropdown-menu a");$dropdown.on("show.bs.dropdown",showDropdownHandler);$dropdownLinks.on("click",clickHandler);$pills.on("shown.bs.tab",shownTabsHandler);});}}}
jQuery(document).ready(function(){var euCategory=Drupal.eu_cookie_compliance.getAcceptedCategories();console.log(euCategory);if(!jQuery.inArray("analytics",euCategory)!==-1){console.log("accepted");window['ga-disable']=true;}
if(!Drupal.eu_cookie_compliance.hasAgreed()){window['ga-disable']=true;}})
function slidingpopupcookie(){var $=jQuery;setTimeout(function(){if($(".sliding-popup-bottom").length>1){$("#sliding-popup").remove();}
var cookiediv=$("#sliding-popup");if(cookiediv.length>0){if(cookiediv.find("#popup-buttons .setting-button").length==0){cookiediv.find("#popup-buttons").append('<button type="button" class="setting-button eu-cookie-compliance-default-button" onclick="cookiedisplaycategory()">Settings</button>');}}},500);}
function cookiedisplaycategory(){jQuery('.eu-cookie-compliance-categories').show();jQuery('#popup-buttons').hide();}
function getallCookies(){var $=jQuery;var cookies=document.cookie.split(';');for(var i=0;i<cookies.length;i++){var cookie=cookies[i].split('=')[0].trim();console.log(cookie);}}
function checkBoxSwitchAnim(){setTimeout(()=>{var $=jQuery;if($(".eu-cookie-compliance-category").length){console.log("checkBoxSwitchAnim")
$(".eu-cookie-compliance-category > div").addClass("checkbox-switch-wrap");$('.eu-cookie-compliance-category input').wrap('<div class="swith-wrap"></div>');$(".checkbox-switch-wrap .swith-wrap").append('<span class="slider"></span>');$(".eu-cookie-compliance-category input:disabled").closest(".checkbox-switch-wrap").addClass("disabled")}},500);}