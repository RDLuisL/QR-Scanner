function generateQRCode() {
  var text = document.getElementById('text').value;
  var qrCodeContainer = document.getElementById('qrcode');
  qrCodeContainer.innerHTML = '';
  if (text.trim() !== '') {
      var qr = qrcode(0, 'L');
      qr.addData(text);
      qr.make();
      var imgTag = qr.createImgTag(4);  // El segundo parámetro define el tamaño del código QR
      var imgElement = document.createElement('img');
      imgElement.src = imgTag.match(/src="([^"]*)"/)[1];
      imgElement.style.width = '200px';
      imgElement.style.height = '200px';
      qrCodeContainer.appendChild(imgElement);
  } else {
      alert('Por favor, ingrese un texto o URL válido.');
  }
}
