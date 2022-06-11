// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
const TableGenres = document.querySelectorAll("#Genre");
const TagFilter = (TagData) => {
    TagData = TagData.trim();
    return TagData;
}
for (let i = 0; i < TableGenres.length; i++)
{
    var GenreInnerHtml = TableGenres[i].innerHTML;
    const GenreTags = GenreInnerHtml.split(",");
    for (var j = 0; j < parseInt(GenreTags.length); j++) {
        GenreTags[j] = TagFilter(GenreTags[j]);
        GenreTags[j] = `<span id="tagbox" class="tagbox ${GenreTags[j]}">${GenreTags[j]}</span>`;
    }
    TableGenres[i].innerHTML = GenreTags.join("");
    console.log(GenreTags);
    
}
