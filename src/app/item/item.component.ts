import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../utils.service';
import {ActivatedRoute, Router} from '@angular/router'
import { Product } from 'src/app/models/Product';
import { Item } from 'src/app/models/Item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  item:Item = new Item() 
  constructor(private utils: UtilsService, 
              private router: Router, 
              private activatedRouter: ActivatedRoute) { 
   
  }
  textToSearch: string = ''
  response: any
  listProduct: Product[] = []
  buttonClicked() {
    console.log('Buscando ' + this.textToSearch + '...')
    this.utils.mlSearch(this.textToSearch).subscribe(
      data => {
        this.listProduct = []
        let iteration : any
        for(iteration in data.results){
          let product = new Product(data.results[iteration].id,
                                    data.results[iteration].price,
                                    data.results[iteration].title,
                                    data.results[iteration].thumbnail,
                                    data.results[iteration].address.state_name); 
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
  ngOnInit(): void {
    
    console.log(this.activatedRouter.snapshot.params.id);
    this.utils.mlSearchItem(this.activatedRouter.snapshot.params.id).subscribe(
      data => {       
        this.item.id = data.id
        this.item.price = data.price
        this.item.title = data.title
        this.item.image = data.thumbnail
        this.item.warranty = data.warranty                             
      },
      error => {
        console.log(error)
      }
    )
    this.utils.mlSearchItemDescription(this.activatedRouter.snapshot.params.id).subscribe(
      data => {
        this.item.description = data.plain_text         
      },
      error => {
        console.log(error)
      }
    )
  }

}
