// AOS.init();
const sidebar = document.querySelector('.sidebar')
let _sidebarEnlarged = true
const sidebarLink = document.querySelectorAll('.sidebar-links')
const sidebarLinks = Array.from(sidebarLink)
const arrowCollapse = document.querySelector(".arrow-collapse")
const arrowCollapseSuggestion = document.querySelector(".arrow-collapse-suggestion")
// const rightSidebar = document.querySelector(".right-sidebar")
const pageWrapper = document.querySelector(".page-wrapper")
const post = document.querySelector(".post")
const postsWrapper = document.querySelector(".posts-wrapper")
const sidebarAvatarName = document.querySelector(".sidebar-avatar-name")
const sideBarAvatar = document.querySelector(".sidebar-avatar")
const topNavigation = document.querySelector(".top-navigation")
const contentCad = document.querySelector('.add-post')
const rightSidebar = document.querySelector(".right-sidebar")
const mainContent = document.querySelector(".main-content")
const StoryAvatars = document.querySelectorAll('.story-avatar-img')
const addStoryGradient = document.querySelectorAll(".top")
const storyName = document.querySelectorAll(".name")

const suggestionImage = document.querySelector(".suggestion-img")
const followButtons = document.querySelectorAll(".btn-follow")
const suggestionHeader = document.querySelector(".suggestion-header")
let Right_sidebarEnlarged = true


const suggestionArrowCollapse = document.querySelector(".arrow-collapse-suggestion")

arrowCollapseSuggestion.addEventListener("click", function (e) {
    if(Right_sidebarEnlarged) {
        rightSidebar.style.width = "4.2rem"
        rightSidebar.style.overflow = "hidden"
        if(sidebar.style["width"] == "230px"){
            topNavigation.style.marginLeft = "230px"
            topNavigation.style.width = "calc(100% - 230px - 4.2rem)"
            topNavigation.style["transition"]= ".2s all"
        }
        else{
            topNavigation.style.width = "calc(100% - 4.2rem)"
            topNavigation.style["transition"]= ".2s all"
        }
        // topNavigation.style.marginLeft = "10%"
        mainContent.style.marginLeft = "7%"
        mainContent.style["transition"]= ".2s all"
        topNavigation.style["transition"]= ".2s all"
        arrowCollapseSuggestion.style["transform"] = "rotate(0)"
        arrowCollapseSuggestion.style["transition"] = ".2s all"
        // suggestionImage.style.width = "2rem"
        // suggestionImage.style.height = "2rem"
        
        Right_sidebarEnlarged = false
        suggestionHeader.style.fontSize = "0"
        suggestionHeader.style.transition = ".2s all"
        
        
    }
    else  {
        suggestionHeader.style.fontSize = "1.3rem"
        mainContent.style.marginLeft = "0"
        mainContent.style["transition"]= ".2s all"
        if(sidebar.style["width"] == "230px"){
            topNavigation.style.marginLeft = "230px"
            topNavigation.style.width = "calc(100% - 30vh - 230px)"
            topNavigation.style["transition"]= ".2s all"
        }
        else{
            topNavigation.style.width = "calc(100% - 30vh - 57px)"
            topNavigation.style["transition"]= ".2s all"
        }
        rightSidebar.style.width = "30vh"
        arrowCollapseSuggestion.style["transform"] = "rotate(180deg)"
        arrowCollapseSuggestion.style["transition"] = ".2s all"
        rightSidebar.style.overflow = "hidden"
        Right_sidebarEnlarged = true
    }
})
// window.onresize = (e) => {
//     // console.log("window.innerWidth");
//     if (window.innerWidth <= 1575) {
//         // console.log("yearherlhjljdhajl fpl;dsahf ");
//         rightSidebar.style.display = "none"
//         topNavigation.style.marginRight = "0"
//         topNavigation.style.width = "calc(100% - 27px)"
//         mainContent.style.marginRight = "0"
//         mainContent.style.marginLeft = "27px"
//     }

//     if(window.innerWidth <= 1000) {
//         StoryAvatars.forEach((e,i) => {
//             e.style.width = "2rem"
//             e.style.height = "2rem"
//             addStoryGradient[i].style.width = "2rem"
//             addStoryGradient[i].style.height = "2rem"
//             storyName[i].style.fontSize = ".7rem"
//         })
//     }
// }

// window.addEventListener("DOMContentLoaded", (e) => {
//     console.log("loaded");
//     if (window.innerWidth <= 1561) {
//         rightSidebar.style.display = "none"
//         mainContent.style.marginRight = "0"
//         mainContent.style.marginLeft = "27px"

//         topNavigation.style.marginRight = "0"
//         topNavigation.style.width = "calc(100% - 27px)"
//         sidebar.style.zIndex = "23"
//     }
// })
post.addEventListener("focus", function (e) {

    // postsWrapper.style.marginTop = "300px"
    // postsWrapper.style.transition = ".2s all"
    contentCad.style.marginBottom = "25rem"
    contentCad.style.transition = ".2s all"
})

post.addEventListener("focusout", (e) => {
    contentCad.style.marginBottom = "5rem"

})
function we() {
    postsWrapper.style.marginTop = "0"
    postsWrapper.style.transition = ".2s all"
}
arrowCollapse.addEventListener("click", () => {
    if (!_sidebarEnlarged) {
        sidebar.style['width'] = "57px"
        sidebar.style['overflow'] = "hidden"
        // $(".sidebar-links").hide();
        topNavigation.style["transition"]= ".2s all"
        if(rightSidebar.style["width"] == "30vh"){
            topNavigation.style.marginLeft = "57px"
            topNavigation.style.width = "calc(100% - 30vh - 57px)"
            console.log("right side bat clicked")
        }
        else{
            topNavigation.style.marginLeft = "57px"
            topNavigation.style.width = "calc(100% - 4.2rem - 57px)"
        }
        // topNavigation.style.width = "calc(100%  - 20px)"
        sideBarAvatar.style.height = "1.8rem"
        sidebarAvatarName.style.fontSize = "0"
        sidebarAvatarName.style.marginTop = "0"
        sidebarAvatarName.style.transition = ".2s all"
        sideBarAvatar.style.overflow = "none"
        sideBarAvatar.style.width = "1.8rem"
        sideBarAvatar.style.transition = "all .2s "
        pageWrapper.style.marginLeft = "57px"
        pageWrapper.style["transition"] = ".3 all ease"
        arrowCollapse.style["transform"] = "rotate(180deg)"
        arrowCollapse.style["transtion"] = ".2s all ease"
        sidebarLinks.forEach(e => e.style.height = "1px")
        sidebarLinks.forEach(e => e.style.width = "100%")

        sidebar.style["transition"] = "all .3s"
        _sidebarEnlarged = true

        // if (window.innerWidth < 1400) {
        //     topNavigation.style.marginLeft = "57px"
        //     topNavigation.style.width = "calc(100%  - 27px)"
        // } else {
        //     topNavigation.style.marginLeft = "5%"
        //     topNavigation.style.width = "calc(100%  - 30vh - 57px)"
        // }
        topNavigation.style.transition = ".2s all"
    } else {
        if (window.innerWidth <= 1400) {

            sidebar.style['width'] = "230px"
            sidebar.style['z-index'] = "1"
            arrowCollapse.style["transform"] = "rotate(0deg)"
            arrowCollapse.style["transtion"] = ".2s all ease"
            $(".sidebar-links").show();
            sidebarLinks.forEach(e => e.style.transition = ".2s")
            _sidebarEnlarged = false
            sidebarAvatarName.style.fontSize = "1.5rem"
            sidebarAvatarName.style.marginTop = "1rem"
            sidebarAvatarName.style.transition = ".2s all"
            sideBarAvatar.style.overflow = "none"
            sideBarAvatar.style.height = "4rem"
            sideBarAvatar.style.width = "4rem"
            sideBarAvatar.style.transition = "all .2s "
        } else {
            sidebar.style['width'] = "230px"
            sidebar.style["transition"]= ".2s all"
            pageWrapper.style.marginLeft = "200px"
            pageWrapper.style["transition"] = ".2s all ease"
            sidebar.style['z-index'] = "1"
            arrowCollapse.style["transform"] = "rotate(0deg)"
            arrowCollapse.style["transtion"] = ".2s all ease"
            
            $(".sidebar-links").show();
            sidebarLinks.forEach(e => e.style.transition = ".2s")
            topNavigation.style.transition = ".2s all"
            _sidebarEnlarged = false
            if(rightSidebar.style["width"] = "30vh"){
                topNavigation.style.marginLeft = "230px"
                topNavigation.style.width = "calc(100% - 30vh - 230px)"
                topNavigation.style["transition"]= ".2s all"

            }
            else{
                topNavigation.style.width = "calc(100% - 4.2rem - 230px)"
            }
            sidebarAvatarName.style.fontSize = "1.5rem"
            sidebarAvatarName.style.marginTop = "1rem"
            sidebarAvatarName.style.transition = ".2s all"
            sideBarAvatar.style.overflow = "none"
            sideBarAvatar.style.height = "4rem"
            sideBarAvatar.style.width = "4rem"
            sideBarAvatar.style.transition = "all .2s "
        }

    }
})