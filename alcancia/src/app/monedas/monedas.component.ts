import { Component, OnInit } from '@angular/core';
import { Monedas } from './monedas';
import { MonedasService } from './monedas.service';

@Component({
  selector: 'app-monedas',
  templateUrl: './monedas.component.html',
  styleUrls: ['./monedas.component.css']
})
export class MonedasComponent implements OnInit {
  titulo:string = "ALCANCIA ZABUD";
  monedas!:Monedas[];
  moneda:Monedas = new Monedas();
  constructor(private monedasService:MonedasService) { }

  ngOnInit(): void {
    this.monedasService.getAll().subscribe(
      m => this.monedas=m
    );
  }
  onUpdate1(): void {
    this.moneda.id=1
    this.moneda.nombre="Moneda de 50"
    this.moneda.cantidad=this.monedas[0].cantidad+1;
    this.monedasService.update(this.moneda).subscribe(
      res => this.moneda=res
    )
  }
  onUpdate2(): void {
    this.moneda.id=2
    this.moneda.nombre="Moneda de 100"
    this.moneda.cantidad=this.monedas[1].cantidad+1;
    this.monedasService.update(this.moneda).subscribe(
      res => this.moneda=res
    )
  }
  onUpdate3(): void {
    this.moneda.id=3
    this.moneda.nombre="Moneda de 200"
    this.moneda.cantidad=this.monedas[2].cantidad+1;
    this.monedasService.update(this.moneda).subscribe(
      res => this.moneda=res
    )
  }
  onUpdate4(): void {
    this.moneda.id=4
    this.moneda.nombre="Moneda de 500"
    this.moneda.cantidad=this.monedas[3].cantidad+1;
    this.monedasService.update(this.moneda).subscribe(
      res => this.moneda=res
    )
  }
  onUpdate5(): void {
    this.moneda.id=5
    this.moneda.nombre="Moneda de 1000"
    this.moneda.cantidad=this.monedas[4].cantidad+1;
    this.monedasService.update(this.moneda).subscribe(
      res => this.moneda=res
    )
  }

}
