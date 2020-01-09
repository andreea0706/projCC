using CoreModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using System;


namespace CoreDatabase
{
    public class DatabaseContext : IdentityDbContext<IdentityUser<int>, IdentityRole<int>, int>
    {
        private static Boolean created = false;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySQL(GetConnectionString());
        }

        private static string GetConnectionString()
        {
            return "server=contrall.mysql.database.azure.com;port=3306;uid=BFY@contrall;password=ContrAll2018;database=andiCC1;charset=utf8;";
        }



        public void CreateDatabaseIfNotExists()
        {
            lock (this)
            {
                if (!created)
                    Database.EnsureCreated();
                created = true;
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<IdentityUser<int>>().Property(up => up.EmailConfirmed).HasConversion(new BoolToZeroOneConverter<Int16>());
            modelBuilder.Entity<IdentityUser<int>>().Property(up => up.PhoneNumberConfirmed).HasConversion(new BoolToZeroOneConverter<Int16>());
            modelBuilder.Entity<IdentityUser<int>>().Property(up => up.LockoutEnabled).HasConversion(new BoolToZeroOneConverter<Int16>());
            modelBuilder.Entity<IdentityUser<int>>().Property(up => up.TwoFactorEnabled).HasConversion(new BoolToZeroOneConverter<Int16>());

        }

        
        public DbSet<CategoryModel> Categories { get; set; }

    }
}