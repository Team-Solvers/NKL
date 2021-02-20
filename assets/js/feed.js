const sidebar = document.querySelector('.sidebar')
let _sidebarEnlarged = true
const sidebarLink = document.querySelectorAll('.sidebar-links')
const sidebarLinks = Array.from(sidebarLink)
const arrowCollapse = document.querySelector(".arrow-collapse")
const arrowCollapseSuggestion = document.querySelector(".arrow-collapse-suggestion")
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
const btnGroup = document.querySelector(".btn-group")
var PostType = "default"
let currentSelected = 0
btnGroup.addEventListener("click", (e) => {
    let arr = Array.from(e.target.parentElement.children)
    const unique = arr.filter((value, index) => {
        return arr.indexOf(value) === index;
    });
    const selected = unique.filter((e) => e.classList.contains("bg-selected"))

    if (e.target.id == "cat-1") {
        PostType = "cat1"
        selected[0].classList.remove("bg-selected")
        selected[0].classList.add("bg-secondary")
        selected[0].classList.add("text-white")
        e.target.classList.remove("bg-secondary")
        e.target.classList.add("bg-selected")
        e.target.classList.remove("text-white")

    }
    else if (e.target.id == "cat-2") {
        PostType = "cat2"
        selected[0].classList.remove("bg-selected")
        selected[0].classList.add("bg-secondary")
        selected[0].classList.add("text-white")
        e.target.classList.remove("bg-secondary")
        e.target.classList.add("bg-selected")
        e.target.classList.remove("text-white")
        
    }
    else {
        PostType = "cat3"
        selected[0].classList.remove("bg-selected")
        selected[0].classList.add("bg-secondary")
        selected[0].classList.add("text-white")
        e.target.classList.remove("bg-secondary")
        e.target.classList.add("bg-selected")
        e.target.classList.remove("text-white")
    }
})


$(function () {
    $(".suggestion-name").each(function () {
        len = $(this).text().length;
        str = $(this).text().substr(0, 10);
        lastIndexOf = str.lastIndexOf(" ");
        if (len > 10) {
            $(this).text(str.substr(0, lastIndexOf) + '…');
        }
    });
});



arrowCollapseSuggestion.addEventListener("click", function (e) {
    // Right_sidebarEnlarged = !(rightSidebar.clientWidth < "calc(30vh)")
    if (Right_sidebarEnlarged) {
        if (window.innerWidth <= 1490) {
            rightSidebar.style.width = "4.2rem"
            rightSidebar.style.overflow = "hidden"
            // Right_sidebarEnlarged = false


            topNavigation.style["transition"] = ".2s all"
            arrowCollapseSuggestion.style["transform"] = "rotate(0deg)"
            arrowCollapseSuggestion.style["transition"] = ".5s all"
            Right_sidebarEnlarged = false
            suggestionHeader.style.fontSize = "0"
            suggestionHeader.style.transition = ".2s all"
        }
        else {

            rightSidebar.style.width = "4.2rem"
            rightSidebar.style.overflow = "hidden"
            if (sidebar.style["width"] == "230px") {
                topNavigation.style.marginLeft = "230px"
                topNavigation.style.width = "calc(100% - 230px - 4.2rem)"
                topNavigation.style["transition"] = ".2s all"
            }
            else {
                topNavigation.style.width = "calc(100% - 4.2rem)"
                topNavigation.style["transition"] = ".2s all"
            }
            mainContent.style.marginLeft = "7%"
            mainContent.style["transition"] = ".2s all"
            topNavigation.style["transition"] = ".2s all"
            arrowCollapseSuggestion.style["transform"] = "rotate(0)"
            arrowCollapseSuggestion.style["transition"] = ".2s all"
            Right_sidebarEnlarged = false
            suggestionHeader.style.fontSize = "0"
            suggestionHeader.style.transition = ".2s all"
        }


    }
    else {
        if (window.innerWidth <= 1490) {
            suggestionHeader.style.fontSize = "1.3rem"
            mainContent.style.marginLeft = "0"
            mainContent.style["transition"] = ".2s all"
            if (sidebar.style["width"] == "230px") {
                topNavigation.style.marginLeft = "230px"
                topNavigation.style.width = "calc(100% - 30vh - 230px)"
                topNavigation.style["transition"] = ".2s all"
            }
            else {
                topNavigation.style.width = "calc(100% - 4.2rem - 57px)"
                topNavigation.style["transition"] = ".2s all"
            }
            rightSidebar.style.width = "30vh"
            arrowCollapseSuggestion.style["transform"] = "rotate(180deg)"
            arrowCollapseSuggestion.style["transition"] = ".2s all"
            rightSidebar.style.overflow = "hidden"
            Right_sidebarEnlarged = true
        } else {
            suggestionHeader.style.fontSize = "1.3rem"
            mainContent.style.marginLeft = "0"
            mainContent.style["transition"] = ".2s all"
            if (sidebar.style["width"] == "230px") {
                topNavigation.style.marginLeft = "230px"
                topNavigation.style.width = "calc(100% - 30vh - 230px)"
                topNavigation.style["transition"] = ".2s all"
            }
            else {
                topNavigation.style.width = "calc(100% - 30vh - 57px)"
                topNavigation.style["transition"] = ".2s all"
            }
            rightSidebar.style.width = "30vh"
            arrowCollapseSuggestion.style["transform"] = "rotate(180deg)"
            arrowCollapseSuggestion.style["transition"] = ".2s all"
            rightSidebar.style.overflow = "hidden"
            Right_sidebarEnlarged = true
        }
    }
})

// post.addEventListener("focus", function (e) {

//     contentCad.style.marginBottom = "25rem"
//     contentCad.style.transition = ".2s all"
// })

// post.addEventListener("focusout", (e) => {
//     contentCad.style.marginBottom = "5rem"

// })
// function we() {
//     postsWrapper.style.marginTop = "0"
//     postsWrapper.style.transition = ".2s all"
// }
arrowCollapse.addEventListener("click", () => {
    if (!_sidebarEnlarged) {
        sidebar.style['width'] = "57px"
        sidebar.style['overflow'] = "hidden"
        topNavigation.style["transition"] = ".2s all"
        if (rightSidebar.style["width"] == "30vh") {
            topNavigation.style.marginLeft = "57px"
            topNavigation.style.width = "calc(100% - 30vh - 57px)"
            console.log("right side bat clicked")
        }
        else {
            topNavigation.style.marginLeft = "57px"
            topNavigation.style.width = "calc(100% - 4.2rem - 57px)"
        }
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
            sidebar.style["transition"] = ".2s all"
            pageWrapper.style.marginLeft = "200px"
            pageWrapper.style["transition"] = ".2s all ease"
            sidebar.style['z-index'] = "1"
            arrowCollapse.style["transform"] = "rotate(0deg)"
            arrowCollapse.style["transtion"] = ".2s all ease"

            $(".sidebar-links").show();
            sidebarLinks.forEach(e => e.style.transition = ".2s")
            topNavigation.style.transition = ".2s all"
            _sidebarEnlarged = false
            if (rightSidebar.style["width"] = "30vh") {
                topNavigation.style.marginLeft = "230px"
                topNavigation.style.width = "calc(100% - 30vh - 230px)"
                topNavigation.style["transition"] = ".2s all"

            }
            else {
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