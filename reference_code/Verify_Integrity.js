var incoming = msg.payload;
var rawData = JSON.stringify(incoming.data);
var checkHash = 0;
for (var i = 0; i < rawData.length; i++) {
    checkHash = ((checkHash << 5) - checkHash) + rawData.charCodeAt(i);
    checkHash |= 0;
}
if (checkHash.toString() === incoming.signature) {
    msg.payload = "VERIFIED: " + rawData;
    return [msg, null];
} else {
    msg.payload = "INTEGRITY ALERT: Tampering detected!";
    return [null, msg];
}
