using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RazorPagesMovie.Models
{
    public class Movie
    {
        [Key]
        public int ID { get; set; }
        [Required]
        [Display(Name = "Movie Name")]
        public string Title { get; set; } = string.Empty;
        [DataType(DataType.Date)]
        [Display(Name = "Release Date")]
        public DateTime ReleaseDate { get; set; }
        [Required]
        public string Genre { get; set; } = string.Empty;
        [Required]
        [Column(TypeName = "decimal(18, 2)")]
        [Display(Name = "Ticket Price")]
        public decimal Price { get; set; }
        public string Rating { get; set; } = string.Empty;
    }
}
