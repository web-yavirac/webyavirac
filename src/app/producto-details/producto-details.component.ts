import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-details',
  templateUrl: './producto-details.component.html',
  styleUrls: ['./producto-details.component.css']
})
export class ProductoDetailsComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentProducto: Producto = {
    nombre: '',
    pcompra: '',
    pventa: '',
    stock: '',
    detalle: '',
    imagen: '',
    estado: false
  };
  mensaje = '';
  constructor(
    private productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.mensaje = '';
      this.getProducto(this.route.snapshot.params["id"]);
    }
  }
  getProducto(id: string): void {
    this.productoService.get(id)
      .subscribe({
        next: (data) => {
          this.currentProducto = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  updateEstado(status: boolean): void {
    const data = {
      nombre: this.currentProducto.nombre,
      pcompra: this.currentProducto.pcompra,
      pventa: this.currentProducto.pventa,
      stock: this.currentProducto.stock,
      detalle: this.currentProducto.detalle,
      imagen: this.currentProducto.imagen,
      estado: status
    };
    this.mensaje = '';
    this.productoService.update(this.currentProducto.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.currentProducto.estado = status;
          this.mensaje = res.message ? res.message : '¡El estado se actualizó con éxito!';
        },
        error: (e) => console.error(e)
      });
  }
  updateProducto(): void {
    this.mensaje = '';
    this.productoService.update(this.currentProducto.id, this.currentProducto)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.mensaje = res.message ? res.message : '¡Este tutorial se actualizó con éxito!';
        },
        error: (e) => console.error(e)
      });
  }
  deleteProducto(): void {
    this.productoService.delete(this.currentProducto.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/producto']);
        },
        error: (e) => console.error(e)
      });
  }

}
