using ApiForm.Data;
using ApiForm.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiForm.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FormularioController : ControllerBase
    {

        [HttpPost("cadastrarFormulario")]

        public IActionResult Cadastrar([FromBody] Formulario cadastroReq)
        {
            using (var contexto = new FormularioContext())
            {
                var cadastro = new Formulario()
                {
                    Nome = cadastroReq.Nome,
                    Sobrenome = cadastroReq.Sobrenome,
                    Email = cadastroReq.Email,
                    Data = cadastroReq.Data,
                    Endereco = cadastroReq.Endereco,
                    CEP = cadastroReq.CEP,
                    Telefone = cadastroReq.Telefone,
                    Trabalha = cadastroReq.Trabalha,
                    Ensino = cadastroReq.Ensino,
                    Curso = cadastroReq.Curso

                };

                contexto.Formularios.Add(cadastro);
                contexto.SaveChanges();
                return CreatedAtAction(nameof(ListarPorId), new { Id = cadastro.Id }, cadastro);
            }
        }

        [HttpGet("listarFormularioPorId/{id}")]
        public IActionResult ListarPorId(int id)
        {
            using (var contexto = new FormularioContext())
            {
                var cadastro = contexto.Formularios.Where(c => c.Id == id).FirstOrDefault();
                if (cadastro == null)
                {
                    return NotFound();
                }

                return Ok(cadastro);
            }
        }

        [HttpGet("listarFormularios")]
        public IActionResult Listar()
        {
            using (var contexto = new FormularioContext())
            {
                var cadastros = contexto.Formularios.ToList();
                if (cadastros == null)
                {
                    return NotFound();
                }

                return Ok(cadastros);
            }
        }

        [HttpDelete("deletarFormularios/{id}")]

        public IActionResult Deletar(int id)
        {
            using (var contexto = new FormularioContext())
            {
                var cadastro = contexto.Formularios.Where(c => c.Id == id).FirstOrDefault();
                if (cadastro == null)
                {
                    return NotFound();
                }

                contexto.Formularios.Remove(cadastro);
                contexto.SaveChanges();
                return NoContent();
            }
        }

        [HttpPut("AtualizarFormulario/{id}")]

        public IActionResult Atualizar(int id, [FromBody] Formulario cadastroCorpo)
        {
            using (var contexto = new FormularioContext())
            {
                var cadastro = contexto.Formularios.Where(c => c.Id == id).FirstOrDefault();
                if (cadastro == null)
                {
                    return NotFound();
                }

                cadastro.Nome = cadastroCorpo.Nome;
                cadastro.Sobrenome = cadastroCorpo.Sobrenome;
                cadastro.Email = cadastroCorpo.Email;
                //cadastro.Data = cadastroCorpo.Data;
                cadastro.Endereco = cadastroCorpo.Endereco;
                cadastro.CEP = cadastroCorpo.CEP;
                cadastro.Telefone = cadastroCorpo.Telefone;
                cadastro.Trabalha = cadastroCorpo.Trabalha;
                cadastro.Ensino = cadastroCorpo.Ensino;
                cadastro.Curso = cadastroCorpo.Curso;

                contexto.SaveChanges();
                return NoContent();
            }
        }



    }
}
