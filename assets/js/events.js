//*********************************************************************/
// This function will change some attributes based on screen width.   */
// We don't use screen height to evaluate collapsed status.           */
// For reference of the developer, the following breaking points      */
// are followed.                                                      */
// xlg - > 1200 pixels                                                */
// lg - 992 to 1199 pixels                                            */
// md - 768 to 991 pixels                                             */
// sm - 576 to 767 pixels                                             */
// xsm - less than 576 pixels                                         */
//*********************************************************************/

//get screen width.  Togglepoint at screens smaller thatn 992 pixels

var width = $(window).width();
console.log("First evaluation when it runs, width:  "+width) 

//*********************************************************************/
// Originally created with menu borders, we need to take them out in case
// the browse is open originally with a device with less than 992 pixesl
//*********************************************************************/

if (width<992) $("#menuoption1,#menuoption2").attr("class","nav-link text-white");

//*********************************************************************/
// Refresh on resizing of the screen.  This function will be called
// dynamically everytime the screen is resized.  Logging to the 
// consol for debugging purposes.
//*********************************************************************/

$(window).resize(function() {
    var width = $(window).width();
    console.log("This is a resize event, width:  "+width) 
    
    if   (width<992) $("#menuoption1,#menuoption2").attr("class","nav-link text-white");
    else $("#menuoption1,#menuoption2").attr("class","nav-link text-white border-right")
    
});

//****************************************************************************/
// This function will provide an alert when a portfolio picture is selected */
//****************************************************************************/

$(".img-responsive.portfolio-pic").click(function(){
    alert("This site is in construction")
});

//****************************************************************************/
// This function will provide an alert when the user submits message         */
//****************************************************************************/

$("#sbmt-msg").click(function(){

    if (document.getElementById("contact-message").value.length<10) {
        alert("Your message is too short to be sent.");
    }
    else {alert("Thank you for contacting us.  We will be in touch shortly")}
});
