// LikeCheckBox.setAttribute("id", "like")

// /**
//  * 
//  * @param {image URl} imgUrl 
//  * @param {User's Name} name 
//  * @param {Date of Post} Postdate 
//  * @param {postTitle} postTitle 
//  * @param {postContent} postContent 
//  * @param {likeCount} likeCount 
//  */
function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

function getPostCard(imgUrl, name, postdate, postTitle, postContent, likeCount,postID) {
    let newCard = `<div class="feed-card">
    <div class="feed-avatar">
        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="" class="feed-profile">
    </div>
    <div class="feed-profile-info">        
        <p class="feed-profile-name">
            ${name}
        </p>
        <p class="feed-date">
            ${postdate}
        </p>
    </div>
    <div class="feed-content-container">
        <p class="feed-tittle">${postTitle}</p>        
        <p class="feed-content mt-3">${postContent}</p>

    </div>
    <div class="feed-card-bottom align-items-center mt-5">
        <div class="feed-bottom-left">
            <input type="checkbox"><label for="like"><svg
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="like-click-SVG ${postID}">
                    <path
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" class="like-click-PATH ${postID}"/>
                </svg></label>
        </div>
        <div class="feed-bottom-right">
            <p class="feed-date">
                ${likeCount}
            </p>
        </div>
    </div>

</div>`
    return newCard;
}

