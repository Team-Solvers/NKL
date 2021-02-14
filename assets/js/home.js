document.querySelector('#sign-up-modal').addEventListener('click', function () {
    document.querySelector('.overlay').classList.add('d-block');
    document.querySelector('.modal-card').classList.add('d-block');
    console.log("Triggered");
});

document.getElementById('done-sign-up').addEventListener('click', function () {
    document.querySelector('.overlay').classList.remove('d-block');
    document.querySelector('.modal-card').classList.remove('d-block');
    console.log("clicked");
});
document.querySelector('.overlay').addEventListener('click', function () {
    document.querySelector('.overlay').classList.remove('d-block');
    document.querySelector('.modal-card').classList.remove('d-block');
    console.log("clicked");
});