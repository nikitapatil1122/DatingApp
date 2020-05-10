using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

//EF core setup 
//https://docs.microsoft.com/en-us/ef/core/get-started/?tabs=netcore-cli

namespace DatingApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public DbSet<Value> Values { get; set; }

        public DbSet<User> Users { get; set; }

        public DbSet<Photo> Photos { get; set; }
    }
}