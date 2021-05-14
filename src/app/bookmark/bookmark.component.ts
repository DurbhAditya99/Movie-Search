import { Component, OnInit } from '@angular/core';
import { NbRowDefDirective } from '@nebular/theme';

@Component({
  selector: 'bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {
  BML :Array<any> ;
  constructor() {
    this.BML = JSON.parse(localStorage.getItem('BookMarkList') || '{}');
   }
   DeleteBM(name: string){
      let l: Array<any>= JSON.parse(localStorage.getItem('BookMarkList') || '{}');
      var filtered = l.filter(function(value, index, arr){ 
        return value.Title!=name;
      
    });
    localStorage.setItem('BookMarkList',JSON.stringify(filtered))
    location.reload()
  }
  
  ngOnInit(): void {
  }

}
