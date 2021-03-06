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

function getPostCard(imgUrl, postTitle, name, postdate, postContent, likeCount, postID, isLiked, isInFavs) {    
    if (isLiked === true) {
        isLiked = 'post_liked';
    }

    if (isInFavs == true) {
        isInFavs = 'post_favourited';
    }

    let newCard = `
    <div class="mt-5 p-3 content-card w-100">
    <div class="top-section  p-3 w-100 d-flex justify-content-between">
        <div class="avatar_post d-flex ">
            <img class = "${name} go-profile" src="https://images.unsplash.com/photo-1614558097757-bf9aa8fb830e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                alt="" class="feed-profile d-inline-block">
            <p class="content_avatar_name my-auto ml-3 ">${name}</p>
        </div>
        <span class="add-tofav-section d-inline-block align-items center card-favorites">
            <i class="fas fa-star ${postID} ${isInFavs} star-i" ></i>
        </span>
    </div>
    <div class="p-3 post-content-section">
        <div class="content-title">
            <p>${postTitle}</p>
        </div>
        <div class="content_body mt-3">
            <p>${postContent}</p>
        </div>
    </div>
    <div class="content-bottom-section p-3 mb-2">
        <div class="like-count-section p-3">
            <i class="fas fa-heart ${postID} ${isLiked}"></i> <span class="ml-2 like-count">${likeCount}</span>
        </div>
    </div>
</div>`
    // const   var div = document.createElement('div');
    let div = document.createElement('div');
    div.innerHTML = newCard.trim();

    // Change this to div.childNodes to support multiple top-level nodes
    return div.firstChild
}

