/* show-psd-schedule/script.js
(C) 2018 Ryan Zhang. All Rights Reserved. 
*/

let gb_lurl = 'https://svue.psdschools.org/PXP2_Login_Student.aspx?regenerateSessionId=True&Logout=1#ctl00_MainContent_LoginMessage';
let gb_url = 'https://svue.psdschools.org/PXP2_Gradebook.aspx?AGU=0&studentGU=2E5A6429-NOTA-REAL-GUID-D0D8B4625006#ctl00_ctl00_MainContent_PXPMainContent_repSchoolClasses_ctl00_ctl00_SchoolClassesPanel';

let is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

function ls(){
  jQuery.ajax({
     type: 'GET',
     url: gb_url,
     success: function() {
        ifr.src = gb_url;
        if(is_safari){
          $('#ifr').attr('src', $('#ifr').attr('src'));
        }
     }
  });
}

function rs(){
  jQuery.ajax({
     type: 'GET',
     url: gb_lurl,
     success: function() {
        ifr.src = gb_lurl;
     }
  });
}

$(document).ready(function() {
  if(is_safari){
    $('#safari-is-bad').show();
  }
  $('#btn_o1').click(() => {
    $('#ifr').addClass('ifr-fs');
    $('#ifrfs-ft').show();
  });
  $('#btn_f1').click(() => {
    $('#ifr').removeClass('ifr-fs');
    $('#ifrfs-ft').hide();
  });
});
