// Write a function to download data froma URl
// write a function to save that downloads data in a file and return the filename.
// write a function to upload the filename writtten in previous step to a new url.

function fetchCustom(url, fn) {
    console.log("Start Downloading");
    setTimeout(function fetch() {
        console.log("Downloading completed");
        let response = "Data Downloaded";
        fn(response);
    }, 3000);
}
function writeData(response, writeFileName) {
    console.log("Writing Started");
    setTimeout(function write() {
        console.log("Writing completed");
        let fileName = "Output.txt"
        writeFileName(fileName);
    },4000);
}
function uploadData(fileName, newUrl, fn) {
    console.log("uploading started");
    setTimeout(function upload() {
        console.log("Upload completed");
        let newFile = "new.txt";
        fn(newFile);
    })
}





fetchCustom("www.google.com", function response(response) {
    console.log("Downloaded file is: ", response);
    writeData(response, function write(fileName) {
        console.log("new file is: ", fileName);
        uploadData(fileName, "www.drive.google.com", function upload(fileName){
            console.log("new file is uploaded: ", fileName)
        })

    })
})