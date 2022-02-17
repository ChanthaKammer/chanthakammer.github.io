/*----------------------------------------------------------------------------------------------------------------
--
#Original Author:   Chantha Kammer #
#Date Created:      2/11/2022      #
#Version:           0.1            #
#Date Last Modified:2/11/2022      #
#Modified by:       Chantha Kammer #
#Modification log:                 
    Version 0.1 - 2/11/2022 - Created options for boxslider plugin
------------------------------------------------------------------------------------------------------------------*/

$(document).ready(function(){
    $('.slider').bxSlider({
        mode: 'fade',
        captions: true,
        infiniteLoop: true,
        adaptiveHeight: true,
        preloadImages: true
    });
  });