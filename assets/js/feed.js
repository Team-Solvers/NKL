// AOS.init();
const sidebar = document.querySelector('.sidebar')
let _sidebarEnlarged = true
const sidebarLink = document.querySelectorAll('.sidebar-links')
const sidebarLinks = Array.from(sidebarLink)
const arrowCollapse = document.querySelector(".arrow-collapse")
// const rightSidebar = document.querySelector(".right-sidebar")
const pageWrapper = document.querySelector(".page-wrapper")
const post = document.querySelector(".post")
const postsWrapper = document.querySelector(".posts-wrapper")
const sidebarAvatarName = document.querySelector(".sidebar-avatar-name")
const sideBarAvatar = document.querySelector(".feed-avatar")
post.addEventListener("focus", function (e) {

    postsWrapper.style.marginTop = "300px"
    postsWrapper.style.transition = ".2s all"
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
    } else {
        sidebar.style['width'] = "230px"
        pageWrapper.style.marginLeft = "230px"
        pageWrapper.style["transition"] = ".3 all ease"
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

    }
})