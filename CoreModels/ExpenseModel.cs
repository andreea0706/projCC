using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CoreModels
{
    public class ExpenseModel
    {
        [Key]
        public int Id { get; set; }
        public float Value { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        [ForeignKey("CategoryId")]
        public int CategoryId { get; set; }
        public virtual CategoryModel Category { get; set; }
    }
}
