export function SuggestionCard(userInfo) {
    return `<div class="suggestion-card">
    <div class="d-flex ml-n1">
        <img src="https://images.unsplash.com/photo-1614558097757-bf9aa8fb830e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            class="d-block feed-profile" alt="">
        <div class="suggestion-name" style="margin-left: .4rem;">${userInfo}</div>
        </div>

        <a href="#" class="${userInfo} follow-btn btn-follow ml-1 d-inline-block">Follow</a>
    </div>`
}