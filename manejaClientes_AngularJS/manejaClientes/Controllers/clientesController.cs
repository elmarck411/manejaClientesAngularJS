using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using manejaClientes.Models;
using System.Web.Http.Cors;

namespace manejaClientes.Controllers
{
    [EnableCors(origins: "http://localhost:8081",headers:"*", methods:"GET,POST,PUT,DELETE")]
    public class clientesController : ApiController
    {
        private adminclientesEntities db = new adminclientesEntities();

        // GET: api/clientes
        public IQueryable<cliente> Getclientes()
        {
            return db.clientes;
        }

        // GET: api/clientes/5
        [ResponseType(typeof(cliente))]
        public IHttpActionResult Getcliente(int id)
        {
            cliente cliente = db.clientes.Find(id);
            if (cliente == null)
            {
                return NotFound();
            }

            return Ok(cliente);
        }

        // PUT: api/clientes/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putcliente(int id, cliente cliente)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != cliente.idcliente)
            {
                return BadRequest();
            }

            db.Entry(cliente).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!clienteExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/clientes
        [ResponseType(typeof(cliente))]
        public IHttpActionResult Postcliente(cliente cliente)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            /*agregar la instancia de la tabla referenciada al contexto antes de insertar la instancia de la tabla con referencia
            http://stackoverflow.com/questions/33185741/entity-framework-foreign-key-inserting-duplicate-key
            the context has no understanding about estado, it assumes estado should be added and hence the exception */
            db.estados.Attach(cliente.estado1);

            db.clientes.Add(cliente);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = cliente.idcliente }, cliente);
        }

        // DELETE: api/clientes/5
        [ResponseType(typeof(cliente))]
        public IHttpActionResult Deletecliente(int id)
        {
            cliente cliente = db.clientes.Find(id);
            if (cliente == null)
            {
                return NotFound();
            }

            db.clientes.Remove(cliente);
            db.SaveChanges();

            return Ok(cliente);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool clienteExists(int id)
        {
            return db.clientes.Count(e => e.idcliente == id) > 0;
        }
    }
}