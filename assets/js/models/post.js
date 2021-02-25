export function Post(content,user_id,post_time,post_title,visible,category){
    this.post_title = post_title    
    this.content = content;
    this.user_id = user_id;
    this.post_time = post_time;    
    this.visible = visible;
    this.category = category;
}