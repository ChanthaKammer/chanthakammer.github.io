/*----------------------------------------------------------------------------------------------------------------
--
#Original Author:   Chantha Kammer #
#Date Created:      1/21/2022      #
#Version:           0.1            #
#Date Last Modified:1/21/2022      #
#Modified by:       Chantha Kammer #
#Modification log:                 
    Version 0.1 - 1/21/2022 - Created basic startdates.js
------------------------------------------------------------------------------------------------------------------*/

"use strict";

let days = 14;


for (let i = 1; i <= days; i++) {
    document.write("<p>May " + i + " Start Time: 1:00PM");
}
/*Attention to detail here, the numbered dates should have 'st,'th, and 'nd
added to them. There should be a way for me to figure this out. 
In theory this can be done with if and else statements. My first attempt at this didn't work.*/
/*Once I learn more javascript I intend to sort these days into columns
this is much easier to do because I have materialize doing the work
for the columns. I just need to understand how to add classes to it.*/
/* Plans are to make this sleep and print these out slowly
Reference: https://www.tutorialspoint.com/javascript-sleep-function*/