export function goToPersonalPage(e){
    let source = e.target;
    let profileUsername = source.classList[0];
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    window.location.href = `./personal.html?username=${username}&profileuser=${profileUsername}`;
}