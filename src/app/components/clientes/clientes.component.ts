import { Component, OnInit } from '@angular/core';
import {ClienteService} from "../../services/cliente.service";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  constructor(private clienteService:ClienteService) { }

  clientes: any[] = [];

  ngOnInit(): void {
    this.findAll();
  }

  findAll (){
    this.clienteService.findAll().subscribe((res:any) =>{
      console.log(res);
      this.clientes = res;
    })
  }

}
