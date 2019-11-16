# Homework2-Portfolio
Repository for the files needed to deliver homework
======================================================

The new code will deliver the same functionality as we did for Homework 1.

However, instead of pure html/CSS, we will use bootstrap, some css and Java for some functionality.

There are 3 html files:

1)  index.html:  Contains the "About me".  The picture gets a border and gets a bigger width whenever it is hovered with the mouse.
2)  portolio.html:  Contains 6 different pictures with text/descriptions.  On hovering over it with the mouse, pictures get rounded and framed.
3)  contact_me.html:  Contains a form with information and text message.  User needs to enter 10 character or more in the message for it to be valid.  

There is 1 css file.  That file is in assets/css.  It customizes the picture in the "About me" section, the portfolio pictures in the portfolio area, and positions the text over the picture in the portfolios.

There is 1 js file  That file is in assets/js.  It evaluates the width on resizing and eliminates borders from the menu.  it also provides
messages if the user clicks on the portfolio images (it warns pages are under construction).
It also manages the submit buttom event, and evaluates the message.  If shorter than 10 characters, it tells it is too short, otherwise tell user we will be in touch shortly.

