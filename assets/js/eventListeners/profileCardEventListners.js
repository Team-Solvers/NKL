export function goToPersonalPage(e){    
    let source = e.target;
    let profileUsername = source.classList[0];
    const urlParams = new URLSearchParams(window.location.search);
    const username = Cookies.get('_poet');
    window.location.href = `./personal.html?profileuser=${profileUsername}`;
}