welcomeMessege ();

function welcomeMessege () {
    let name = prompt("please masukan nama kamu:")

    if (name != null) {

        document.getElementById("msg").innerHTML = "Hii " + name + ", Welcome To Rivaer Diecast!";
    }
   
}
 function validasiData() {
     event.preventDefault();
    const name = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    output.innerHTML = `
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Nama :</strong> ${name}</p>
        <p><strong>Pesan :</strong> ${message}</p>
    `;

  

};
