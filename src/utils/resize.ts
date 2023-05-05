export function base64Resize(sourceBase64:any, scale:any , callBack:any) {

  const _scale = scale;
  var img = document.createElement('img');
  img.setAttribute("src", sourceBase64);

  img.onload = () => {
      var canvas = document.createElement('canvas');
      canvas.width = img.width * _scale;
      canvas.height = img.height * _scale;

      var ctx = canvas.getContext("2d");
      var cw = canvas.width;
      var ch = canvas.height;
      var maxW = img.width * _scale;
      var maxH = img.height * _scale;

      var iw = img.width;
      var ih = img.height;
      var scl = Math.min((maxW / iw), (maxH / ih));
      var iwScaled = iw * scl;
      var ihScaled = ih * scl;
      canvas.width = iwScaled;
      canvas.height = ihScaled;
      ctx!.drawImage(img, 0, 0, iwScaled, ihScaled);
      const newBase64 = canvas.toDataURL("image/jpeg", scl);

      callBack(newBase64);
  }
}