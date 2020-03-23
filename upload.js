// Set the configuration for your app
// TODO: Replace with your app's config object
var firebaseConfig = {
  apiKey: 'AIzaSyCA9FmHUtNKzKMDqbke7FKhPaNE5rpI4AY',
  authDomain: 'ant-tool.firebaseapp.com',
  databaseURL: 'ant-tool.firebaseio.com',
  storageBucket: 'gs://ant-tool.appspot.com/'
};
firebase.initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

// Create a Storage Ref
var storageRef = storage.ref();


// everytime when a file is recorded, it got upload to the cloud storage.
// TODO: add the upload function in stopRecording()

// // Upload files
function uploadFileToCloud(file, fileName) {
  storageRef = storage.ref("log/"+fileName);
  storageRef.put(file).then(function(snapshot) {
    console.log("recording file uploaded!");
  });
  storageRef = storage.ref();
}
// storageRef.put(file).then(function(snapshot) {
//   console.log("recording file uploaded!");
// });

// everytime when a file is deleted, a message got upload to the cloud storage.
// TODO: add the upload function in deleteItem().

// // Upload delete message
// Upload delete message to Server
function uploadDeleteMsgToCloud(deleteMessage) {
  storageRef = storage.ref("log/"+deleteMessage);
  storageRef.putString(deleteMessage).then(function(){
    console.log(deleteMessage);
  });
  storageRef = storage.ref();
}
// function uploadDeleteMsgToCloud(userID, videoId, timestamp, time) {
//   var deleteMessage = "delete-"time+"-"+videoId+"-"+timestamp;
//   storageRef = storage.ref("log/"+deleteMessage);
//   storageRef.putString(deleteMessage).then(function(){
//     console.log(deleteMessage);
//   });
//   storageRef = storage.ref();
// }


// var deleteMessage = "File" + "{filename-here}" + "successfully deleted";
// storageRef.put(deleteMessage).then(function(){
//   console.log(deletemessage);
// });
