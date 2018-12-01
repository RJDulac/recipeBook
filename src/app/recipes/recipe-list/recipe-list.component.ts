import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] =[
    new Recipe('Test Recipe', 'This is just a test', 'https://www.seriouseats.com/recipes/images/2015/04/20150421-asparagus-three-ways-2.jpg'),
    new Recipe('Test Recipe 2', 'This is just a test 2', 'https://www.dinneratthezoo.com/wp-content/uploads/2016/06/cajun-jambalaya-pasta-4-683x1024.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
