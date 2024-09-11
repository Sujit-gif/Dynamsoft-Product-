DWObject.SelectSource(function(){
    DWObject.OpenSource();
    DWObject.AcquireImage({
        IfShowUI: document.getElementById('showUI').checked,
        IfFeederEnabled: document.getElementById('autoFeeder').checked,
        PixelType: parseInt(document.querySelector('input[name="pixelType"]:checked').value),
        Resolution: parseInt(document.getElementById('resolution').value),
        OnSuccess: function(){
            console.log("Image scanned successfully");
        },
        OnFailure: function(errorCode, errorString){
            console.error(errorCode + ": " + errorString);
        }
    });
});
DWObject.RemoveAllBlankImages({
    OnSuccess: function() {
        console.log("Blank images removed successfully");
    },
    OnFailure: function(errorCode, errorString) {
        console.error(errorCode + ": " + errorString);
    }
});
