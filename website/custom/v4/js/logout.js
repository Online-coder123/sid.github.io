// Set timeout variables.
var timeoutWarning = 14*60*1000; // Display warning in 29 Mins. 
var timeoutNow = 15*60*1000; // Timeout in 30 mins. 

var logoutUrl = 'https://atriumconnect.atriumcampus.com/logout.php'; // URL to logout page.

var warningTimer;
var timeoutTimer;

// Start timers.
function StartTimers() {
    warningTimer = setTimeout("IdleWarning()", timeoutWarning);
    timeoutTimer = setTimeout("IdleTimeout()", timeoutNow);
}

// Reset timers.
function ResetTimers() {
    clearTimeout(warningTimer);
    clearTimeout(timeoutTimer);
    StartTimers();
    if ($('#jsa_timeout').hasClass('ui-dialog-content')) {
        $("#jsa_timeout").dialog('close');
    }
}

// Show idle timeout warning dialog.
function IdleWarning() {
    $("#jsa_timeout").html("<p id=\"jsa_timeout_content\" "+
                       "style=\"font-family:Open Sans, Helvetica, sans-serif; "+
                       "font-size:18px; text-align:center; position:fixed; "+
                       "top:22%; left:40%; background-color:white; "+
                       "padding-top:120px; padding-left:30px; padding-right:30px;\">"+
                       "<strong>Session timeout</strong><br>You will be automatically "+
                           "logged out<br>in 60 seconds.<br><br><br><br><br>"+
                       "<button id='focus-stay-active' tabindex=0 href='#' style=\"padding:10px\" onclick=\"ResetTimers();\">Stay active</button>"+
                       "<br><br><br></p>");

    $("#jsa_timeout").dialog({
      resizable: false,
      height: 0,
      width: 0,
      modal: true 
    });

    $("#focus-stay-active").focus();
    
    $(".ui-dialog-titlebar").css("display","none");
    $(".ui-dialog-titlebar-close").css("display","none");
    
}

// Set timers in SL
function SetTimers(newTimeoutWarning, newTimeoutNow, newLogoutUrl)
{
    var timeoutWarning = newTimeoutWarning;
    console.log(timeoutWarning);
    var timeoutNow = newTimeoutNow;
    console.log(timeoutNow);
    var logoutUrl = newLogoutUrl;
    ResetTimers();
}

// Logout the user.
function IdleTimeout() {
    window.location = logoutUrl;
}
StartTimers();

$(document).ready(function() {
    $("#close_logout").click(function(){
        ResetTimers();
    }); 
});
