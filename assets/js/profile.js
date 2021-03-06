const sidebar = document.querySelector('.sidebar')
let _sidebarEnlarged = true
const sidebarLink = document.querySelectorAll('.sidebar-links')
const sidebarLinks = Array.from(sidebarLink)
const arrowCollapse = document.querySelector(".arrow-collapse")
const arrowCollapseSuggestion = document.querySelector(".arrow-collapse-suggestion")
const pageWrapper = document.querySelector(".page-wrapper")
const post = document.querySelector(".post")
const sidebarAvatarName = document.querySelector(".sidebar-avatar-name")
const sideBarAvatar = document.querySelector(".sidebar-avatar")
const topNavigation = document.querySelector(".top-navigation")
const contentCad = document.querySelector('.add-post')
// const rightSidebar = document.querySelector(".right-sidebar")
const mainContent = document.querySelector(".main-content")
const StoryAvatars = document.querySelectorAll('.story-avatar-img')
const addStoryGradient = document.querySelectorAll(".top")
const storyName = document.querySelectorAll(".name")

const suggestionImage = document.querySelector(".suggestion-img")
const followButtons = document.querySelectorAll(".btn-follow")
const suggestionHeader = document.querySelector(".suggestion-header")
let Right_sidebarEnlarged = true
const suggestionArrowCollapse = document.querySelector(".arrow-collapse-suggestion")


$(function(){
    $(".suggestion-name").each(function () {
        len=$(this).text().length;
        str= $(this).text().substr(0,10);
        lastIndexOf = str.lastIndexOf(" "); 
        if(len>10) {
            $(this).text(str.substr(0, lastIndexOf) + '…');
        }
    });
    });


arrowCollapse.addEventListener("click", () => {
    if (!_sidebarEnlarged) {
        sidebar.style['width'] = "57px"
        sidebar.style['overflow'] = "hidden"
        topNavigation.style["transition"]= ".2s all"
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