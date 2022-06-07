using ApiForm.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiForm.Data
{
    public class FormularioConfiguration : IEntityTypeConfiguration<Formulario>
    {
        public void Configure(EntityTypeBuilder<Formulario> builder)
        {
            builder.ToTable("Formulario");

            builder.Property(c => c.Data)
                .HasColumnName("Data")
                .HasColumnType("datetime")
                .HasDefaultValueSql("getdate()")
                .IsRequired();
        }
    }
}
