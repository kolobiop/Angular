import { FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-form-productos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule ],
  templateUrl: './form-productos.component.html',
  styleUrl: './form-productos.component.css'
})
export class FormProductosComponent implements OnInit {
  registerProductos!: FormGroup;

  constructor(private FormBuilder:FormBuilder){
    this.registerProductos = this.FormBuilder.group({
      producto:[''],
      cantidad:[''],
      fecha:[''],
      proveedor:[''],
      precio:['']
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('Producto:', this.registerProductos.value.producto);
    console.log('Cantidad:', this.registerProductos.value.cantidad);
    console.log('Precio:', this.registerProductos.value.fecha);
    console.log('Marca:', this.registerProductos.value.proveedor);
    console.log('Modelo:', this.registerProductos.value.precio);
  }

}
