import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FormDialogComponent } from '../form-dialog/form-dialog.component';
import { FormularioService } from '../services/formulario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formForm!: FormGroup;

  constructor(private service: FormularioService, public dialog: MatDialog){ }

 

  submeterCadastro() {
    if(this.formForm.valid)
    {
      this.service.cadastrar(this.formForm.value).subscribe(() => {
        this.formForm.reset();
        this.abrirDialog();
      },
      (erro) => {
        console.log(erro);
      }
      )
    }
  }

  get nome() 
  {
    return this.formForm.get('nome')!;
  }

  
  get sobrenome() 
  {
    return this.formForm.get('sobrenome')!;
  }

  
  get email() 
  {
    return this.formForm.get('email')!;
  }


  get endereco() 
  {
    return this.formForm.get('endereco')!;
  }

  
  get data() 
  {
    return this.formForm.get('data')!;
  }

  
  get cep() 
  {
    return this.formForm.get('cep')!;
  }

  
  get telefone() 
  {
    return this.formForm.get('telefone')!;
  }

  
  get sexo() 
  {
    return this.formForm.get('trabalha')!;
  }

  
  get ensino() 
  {
    return this.formForm.get('ensino')!;
  }

  
  get curso() 
  {
    return this.formForm.get('curso')!;
  }

  ngOnInit(): void {
    this.formForm = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(4)]),
      sobrenome: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      data: new FormControl('', [Validators.required]),
      endereco: new FormControl('', [Validators.required, Validators.minLength(10)]),
      cep: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{8}")] ),
      telefone: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{11}")]),
      trabalha: new FormControl('', [Validators.required]),
      ensino: new FormControl('', [Validators.required]),
      curso: new FormControl('', [Validators.required])
    });
  }

  abrirDialog(): void 
  {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.formForm.reset();
    })
  }

}
