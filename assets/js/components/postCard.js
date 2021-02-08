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
function getPostCard(imgUrl, name, Postdate, postTitle, postContent, likeCount){
    const FeedCard = document.createElement("div")
    const FeedAvatar = document.createElement("div")
    const FeedProfileInfo = document.createElement("div")
    const FeedProfileName = document.createElement("p")
    const FeedProfileDate = document.createElement("p")
    const FeedContentContainer = document.createElement("div")
    const FeedTittle = document.createElement("p")
    const FeedContent = document.createElement("p")
    const FeedCardBottom = document.createElement("div")
    const FeedBottomLeft = document.createElement("div")
    const FeedDate = document.createElement("p")
    const FeedLikeLabel = document.createElement("label")
    const FeedAvatarImage = document.createElement("img")
    const FeedBottomRight = document.createElement("div")
    const feedLikeCount = document.createElement("p")
    const LikeCheckBox = document.createElement("input")
    LikeCheckBox.setAttribute("type", "Checkbox")

    const userName = document.createTextNode(name)
    const date = document.createTextNode(Postdate)
    const title = document.createTextNode(postTitle)
    const content = document.createTextNode(postContent)
    const like = document.createTextNode(likeCount)


    FeedAvatarImage.src = imgUrl
    FeedProfileName.appendChild(userName)
    FeedDate.appendChild(date)
    FeedTittle.appendChild(title)
    FeedProfileInfo.appendChild(FeedProfileName)
    FeedProfileInfo.appendChild(FeedDate)
    FeedContent.appendChild(content)
    feedLikeCount.appendChild(like)
    feedLikeCount.classList.add("feed-date")
    FeedLikeLabel.innerHTML = `<svg
    xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">
    <path
        d=\"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z\" />
    </svg>`
    FeedBottomLeft.appendChild(LikeCheckBox)
    FeedBottomLeft.appendChild(FeedLikeLabel)
    FeedBottomRight.appendChild(feedLikeCount)
    FeedProfileInfo.appendChild(FeedProfileName)
    FeedProfileInfo.appendChild(FeedDate)
    FeedAvatar.appendChild(FeedAvatarImage)
    FeedContentContainer.appendChild(FeedTittle)
    FeedContentContainer.appendChild(FeedContent)
    FeedCardBottom.appendChild(FeedBottomLeft)
    FeedCardBottom.appendChild(FeedBottomRight)

    FeedCard.appendChild(FeedAvatar)
    FeedCard.appendChild(FeedProfileInfo)
    FeedCard.appendChild(FeedContentContainer)
    FeedCard.appendChild(FeedCardBottom)
    //  class add
    FeedCard.classList.add("feed-card")
    FeedAvatar.classList.add('feed-avatar')
    FeedAvatarImage.classList.add("feed-profile")
    FeedProfileInfo.classList.add("feed-profile-info")
    FeedProfileName.classList.add("feed-profile-name")
    FeedDate.classList.add("feed-date")
    FeedContentContainer.classList.add("feed-content-container")
    FeedTittle.classList.add("feed-tittle")
    FeedContent.classList.add("feed-content")
    FeedContent.classList.add("mt-3")
    FeedCardBottom.classList.add("feed-card-bottom")
    FeedCardBottom.classList.add("align-items-center")
    FeedCardBottom.classList.add("mt-5")
    FeedBottomLeft.classList.add("feed-bottom-left")
    LikeCheckBox.setAttribute("id", "like")
    FeedBottomRight.classList.add("feed-bottom-right")


    console.log(FeedCard);

    return FeedCard
}