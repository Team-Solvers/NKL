export function getFollowComponent(userIFollow){
    let component = `<div class="avatar_post d-flex mt-4">
    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        alt="" class="feed-profile d-inline-block">
    <p class="content_avatar_name my-auto ml-3 ">${userIFollow}</p>
    <button type="button" class="${userIFollow} unfollow-btn btn btn-primary">Unfollow</button>
</div>`
    // let div = document.createElement('div');
    // div.innerHTML = component.trim();

    // // Change this to div.childNodes to support multiple top-level nodes
    // return div.firstChild
    return component;
}