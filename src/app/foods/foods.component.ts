import { stripSummaryForJitFileSuffix } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {
foodSearch: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe(map(food=>{ return 'the food you searched for was ' + food.search.toUpperCase()
  })).subscribe(stuff=>{
      this.foodSearch = stuff;

    })
  }

}
