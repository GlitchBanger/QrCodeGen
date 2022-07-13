const QRCode = require('qrcode');

document.getElementById("generate").onclick = () => {
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let roll = document.getElementById("roll").value;

    let obj = {
        name,
        address,
        roll
    };

    let str = JSON.stringify(obj);

    QRCode.toCanvas(document.getElementById("qr"), str, err => {
        if (err) alert("Something is not right!");
        console.log("Generated QR");
    });
};