var first_home_block_url='';var second_home_block_url='';(function($){$(document).ready(function(){var current_width=$(window).width();if(current_width<992){var first_OldSrc=$('#__strategicAlternatives .first img').attr('src');if(first_home_block_url=='')
first_home_block_url=first_OldSrc;else
first_OldSrc=first_home_block_url;var first_newp=first_OldSrc.replace('.','-responsive.');$('#__strategicAlternatives .first img').attr('src',first_newp);var second_OldSrc=$('#__strategicAlternatives .second img').attr('src');if(second_home_block_url=='')
second_home_block_url=second_OldSrc;else
second_OldSrc=second_home_block_url;var second_newp=second_OldSrc.replace('.','-responsive.');$('#__strategicAlternatives .second img').attr('src',second_newp);}});$(window).resize(function(){var current_width=$(window).width();if(current_width<992){var first_OldSrc=$('#__strategicAlternatives .first img').attr('src');if(first_home_block_url=='')
first_home_block_url=first_OldSrc;else
first_OldSrc=first_home_block_url;var first_newp=first_OldSrc.replace('.','-responsive.');$('#__strategicAlternatives .first img').attr('src',first_newp);var second_OldSrc=$('#__strategicAlternatives .second img').attr('src');if(second_home_block_url=='')
second_home_block_url=second_OldSrc;else
second_OldSrc=second_home_block_url;var second_newp=second_OldSrc.replace('.','-responsive.');$('#__strategicAlternatives .second img').attr('src',second_newp);}else{var first_OldSrc=$('#__strategicAlternatives .first img').attr('src');if(first_home_block_url=='')
first_home_block_url=first_OldSrc;else
first_OldSrc=first_home_block_url;var first_newp=first_OldSrc.replace('-responsive.','.');$('#__strategicAlternatives .first img').attr('src',first_newp);var second_OldSrc=$('#__strategicAlternatives .second img').attr('src');if(second_home_block_url=='')
second_home_block_url=second_OldSrc;else
second_OldSrc=second_home_block_url;var second_newp=second_OldSrc.replace('-responsive.','.');$('#__strategicAlternatives .second img').attr('src',second_newp);}});})(jQuery);