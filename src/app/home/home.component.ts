import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../utils.service';
import { Product } from 'src/app/models/Product';
import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { leadingComment } from '@angular/compiler';
import {ActivatedRoute, Router} from '@angular/router'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  textToSearch: string = ''
  response: any
  listProduct: Product[] = []
  
  constructor(private utils: UtilsService, 
              private router: Router, 
              private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.listProduct = JSON.parse(sessionStorage.getItem('listproduct') || '{}')
  }

  buttonClicked() {
    console.log('Buscando ' + this.textToSearch + '...')
    this.utils.mlSearch(this.textToSearch).subscribe(
      data => {
        this.listProduct = []
        let item : any
        for(item in data.results){
          let product = new Product(data.results[item].id,
                                    data.results[item].price,
                                    data.results[item].title,
                                    data.results[item].thumbnail,
                                    data.results[item].address.state_name); 
          this.listProduct.push(product);
        }
      },
      error => {
        console.log(error)
      }
    )
  }

  itemClick (id:string){
    this.router.navigate(['/item/'+id])    
  }
}
