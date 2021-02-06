AOS.init();
const sidebar = document.querySelector('.sidebar')
let _sidebarEnlarged = true
const sidebarLink = document.querySelectorAll('.sidebar-links')
const sidebarLinks = Array.from(sidebarLink)
const arrowCollapse = document.querySelector(".arrow-collapse")
arrowCollapse.addEventListener("click", () => {
    if (!_sidebarEnlarged) {
        sidebar.style['width'] = "57px"
        sidebar.style['overflow'] = "hidden"
        // $(".sidebar-links").hide();
        arrowCollapse.style["transform"] = "rotate(180deg)"
        arrowCollapse.style["transtion"] = ".2s all ease"
        sidebarLinks.forEach(e => e.style.height = "1px")
        sidebarLinks.forEach(e => e.style.width = "100%")

        sidebar.style["transition"] = "all .3s"
        _sidebarEnlarged = true
    } else {
        sidebar.style['width'] = "230px"
        sidebar.style['z-index'] = "1"
        arrowCollapse.style["transform"] = "rotate(0deg)"
        arrowCollapse.style["transtion"] = ".2s all ease"
        $(".sidebar-links").show();
        sidebarLinks.forEach(e => e.style.transition = ".2s")

        _sidebarEnlarged = false

    }
})