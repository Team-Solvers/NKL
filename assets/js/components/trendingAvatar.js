export function trendingAvatar(name) {

    const trendingCard = `
    <div class="story-avatar h-100">        
        <div class="${name} top"></div>
        <img src="https://images.unsplash.com/photo-1614558097757-bf9aa8fb830e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="" class="${name} feed-profile story-avatar-img go-profile">
        <p class="name text-center">${name}</p>
    </div>
    `
    return trendingCard;
}