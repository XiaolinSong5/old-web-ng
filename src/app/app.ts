import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Product} from './model/product';
import {form, Field, submit} from '@angular/forms/signals'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Field],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('old-web-ng');
    productModel = signal<Product>({
      name: '',
      qty: '',
      price: 0.0
    });
    productForm = form(this.productModel);
  onSubmit(event: Event) {
    event.preventDefault()
    submit(this.productForm, async (form) => {
      const a = this.productModel;

      console.log('form data name: ', a().name );
    })
  }
}
