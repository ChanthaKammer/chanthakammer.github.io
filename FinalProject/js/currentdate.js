/*----------------------------------------------------------------------------------------------------------------
--
#Original Author:   Chantha Kammer #
#Date Created:      2/11/2022      #
#Version:           0.1            #
#Date Last Modified:2/11/2022      #
#Modified by:       Chantha Kammer #
#Modification log:                 
    Version 0.1 - 2/11/2022 - Created currentdates.js | I'm curious as to how I can flesh this out.
------------------------------------------------------------------------------------------------------------------*/

"use strict"

$(document).ready( () => {
    const today = new Date();
    const final = new Date("Feb 18, 2022 12:00:00");
 
    $("#currentDate").text(today.getMonth()+"/"+today.getDate()+"/"+today.getFullYear());
    $("#targetDate").text(final.getMonth()+"/"+final.getDate()+"/"+final.getFullYear()
    +" at " + final.getHours()+"P.M.");
});