const captchBox = document.querySelector(".captch-box input"),
captchInput = document.querySelector(".captch-input input"),
loader = document.querySelector(".bx-loader-alt"),
message = document.querySelector(".message"),
button = document.querySelector("button");

function randomCaptcha(){
    let random = Math.random().toString(16).substring(2, 7).split("").join(" ");
    captchBox.value = random;
    console.log(random)
}
randomCaptcha();

button.addEventListener("click", () => {
    let inputValue = captchInput.value.split("").join(" ");
    message.classList.add("active");
    if(inputValue == captchBox.value){
        console.log("match")
        message.innerHTML = "match"
    }else{
        console.log("fuk")
        message.innerHTML = "don't match"
    }
    console.log(inputValue)
});

captchInput.addEventListener("input", () => {
    button.classList.toggle("disabled", !captchInput.value)
})