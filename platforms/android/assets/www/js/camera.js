function capturar_imagem() {
    navigator.camera.getPicture(cameraSuccess, cameraError, {
        quality: 75,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType : Camera.PictureSourceType.CAMERA,
        allowEdit : true,
        targetWidth: 500,
        targetHeight: 500,
        encodingType: Camera.EncodingType.JPEG,
        correctOrientation: true,
        cameraDirection: Camera.Direction.BACK
    }); 
}

function abrir_imagem() {
    navigator.camera.getPicture(cameraSuccess, cameraError, {
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType : Camera.PictureSourceType.SAVEDPHOTOALBUM,
        allowEdit : true,
        targetWidth: 500,
        targetHeight: 500,
        encodingType: Camera.EncodingType.JPEG
    }); 
}

function cameraSuccess(imageData) {
    var image = document.getElementById("foto");
    image.src = "data:image/jpeg;base64," + imageData;
}

function cameraError(message) {
    console.log("Camera falhou: "+message)
}

function onDeviceReady() {
    btn1 = document.querySelector("#capturar_imagem")
    btn1.addEventListener("touchstart", capturar_imagem)
    btn2 = document.querySelector("#abrir_imagem")
    btn2.addEventListener("touchstart", abrir_imagem)
}

document.addEventListener("deviceready", onDeviceReady, false);