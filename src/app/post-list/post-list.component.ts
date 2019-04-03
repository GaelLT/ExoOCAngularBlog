import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  CONTENT = 
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et "
  + "dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
  + " ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum "
  + "dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,"
  + " sunt in culpa qui officia deserunt mollit anim id est laborum.";

  

  posts = [ 
    {
    title : "Mon premier post",
    content : this.CONTENT,
    loveIts : 0,
    created_at : new Date
  },
  {
    title : "Mon deuxième post",
    content : this.CONTENT,
    loveIts : 0,
    created_at : new Date
  },

    {
    title : "Encore un post",
    content : this.CONTENT,
    loveIts : 0,
    created_at : new Date
  }
  ];

}
