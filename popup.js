

// $(document).ready(function() {

// chrome.browserAction.onClicked.addListener(function(tab) {
//     chrome.tabs.executeScript({
//     code:  document.getElementById('mega-uh-wrapper').style.display = "none"
//   });
 
// });

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, {
    code: "document.getElementById('mega-uh-wrapper').style.display = 'none'"
  });
});
  


//  document.addEventListener('DOMContentLoaded', function () {
//   document.getElementById('christian-kyle').addEventListener('click', function() {
    // document.getElementById('mega-uh-wrapper').style.display = "none";
//   });
// });

// })

// document.getElementById('mega-uh-wrapper').style.display = "none";

$(document).ready(function() {

  //=========Yahoo==================
  // $('#mega-uh-wrapper').detach();
  // $('#mega-uh').detach();
  // $('#banner').detach();


  //===========Youtube===============
  $('#masthead-positioner').detach();
  $('#video-masthead').detach();
  
  //=========ESPN===============
  $('#header-wrapper').hide();
  $('#collapseClick-1').hide();

  //============CBS==================
  $('#globalHeaderContainer').hide();

  //============CNN==================
  $('#nav').hide();

  //============SITEPOINT==================
  $('.main-header').hide();
  $('#maestro-472').hide();

  //============BUZZFEED==================
  $('#mod-header-section-1').hide();

  //============QUORA***==================
  $('#__w2_FSuZwLG_header').hide();
  $('.LoggedInSiteHeader SiteHeader').hide();

})
