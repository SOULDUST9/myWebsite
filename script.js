const SendMessage = document.getElementById("send-message");
const inputedName = document.getElementById("name");
const inputedMessage = document.getElementById("message");

SendMessage.addEventListener("click", () => {
    const subject = encodeURIComponent("Reaching out to connect");
    window.location.href = `mailto:sjane089@uottawa.ca?subject=${subject}&body=Hello, My name is ${inputedName.value} and I was just contacting you regarding ${inputedMessage.value}`;
});