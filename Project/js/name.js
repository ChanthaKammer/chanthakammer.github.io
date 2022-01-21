/*----------------------------------------------------------------------------------------------------------------
--
#Original Author:   Chantha Kammer #
#Date Created:      1/21/2022      #
#Version:           0.1            #
#Date Last Modified:1/21/2022      #
#Modified by:       Chantha Kammer #
#Modification log:                 
    Version 0.1 - 1/21/2022 - Created basic name.js file.
------------------------------------------------------------------------------------------------------------------*/

"use strict";

// Prompt for Name // "name" was taken/depreciated so I had to use username
const username = prompt("Please enter your name.");
/* I looked at setting the ID to this H1 element online, it seems 
too advanced for the javascript that we have learned so far.
I don't want to do it incorrectly so a plain H1 element will
have to do for now. */
const html = "<h1> Welcome, " + username + ".</h1>"; 
document.write(html);
