export function trendingAvatar(name) {

    const trendingCard = `
    <div class="story-avatar h-100">        
        <div class="${name} go-profile top"></div>
        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="" class="feed-profile story-avatar-img">
        <p class="name text-center">${name}</p>
    </div>
    `
    return trendingCard;
}