var rawData = JSON.stringify(msg.payload);
var hash = 0;
for (var i = 0; i < rawData.length; i++) {
    hash = ((hash << 5) - hash) + rawData.charCodeAt(i);
    hash |= 0;
}
msg.payload = {
    data: msg.payload,
    signature: hash.toString()
};
return msg;
