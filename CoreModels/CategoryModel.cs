using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CoreModels
{
    public class CategoryModel
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public virtual List<ExpenseModel> Expenses { get; set; }


    }
}
