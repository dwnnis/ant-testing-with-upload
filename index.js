// constants for Login
const enteredID = document.getElementById("IDInput"); // get element that contains userID
const displayID = document.getElementById("UserID");
const videoArea = document.getElementById("video-selection-area");
const loginArea = document.getElementById("login-area");

// constants for Video selection
var videoId = "";
var ytlink = "";

// check if UserID exists, if not, hide "video-selection" and display "login".
window.onload = function() {
  console.log("file loaded");
  if (localStorage.getItem("UserID") == null) {
    displayLogin();
    // console.log("null");
  } else {
    displayVideoSelection();
    // console.log("not null");
  }
}

//
// Login Functions
//
function basicLogin() {
  // TODO: add check null;
  if (enteredID.value != "") {
    localStorage.setItem("UserID", enteredID.value);
  } else {
    alert("Please Enter an ID.");
  }
}

function basicLogout() {
  localStorage.removeItem("UserID");
}

function displayVideoSelection() {
  displayID.innerHTML = localStorage.getItem("UserID");
  videoArea.style.display = "block";
  loginArea.style.display = "none";
}

function displayLogin() {
  videoArea.style.display = "none";
  loginArea.style.display = "block";
}

//
// Video Selection Functions
//
function start() {
  try {
    ytlink = document.getElementById("videoInput").value;
    videoId = ytlink.substring(ytlink.length - 11);
    // console.log(videoId);

    window.location.href = "./app.html?https://you.tube/" + videoId;
    videoId = "";
    ytlink = "";
  } catch(err) {
    console.log("error loading video. check link.");
  }
}
