import { Post } from '../Post';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post : Post;

  
  
  constructor() { }

  ngOnInit() {
  }

  ajouterLoveIt(){
    this.post.loveIts = (this.post.loveIts + 1);
    console.log("You like it !")
    console.log("LoveIts : "+this.post.loveIts)
  }

  ajouterDontLoveIt(){
    this.post.loveIts = (this.post.loveIts-1);
    console.log("You don't like it")
    console.log("LoveIts : "+this.post.loveIts)
  }

  getClassItem(){
    if(this.post.loveIts > 0){
      return "success";
    } else if (this.post.loveIts < 0){
      return "danger";
    }    
  }

}
