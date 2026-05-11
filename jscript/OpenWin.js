<!-- Begin
function formHandler(form) {
var windowprops = 	"toolbar=yes,height=400,width=600,menubar=yes,scrollbars=yes,resizable=yes,top=100,left=300,status=yes";
  //var windowprops = "height=600,width=900,location=no,";
 //+ "scrollbars=no,menubars=no,toolbars=no,resizable=no";

 var URL = form.site.options[form.site.selectedIndex].value;
 popup = window.open(URL,"MenuPopup",windowprops);
 }
// End -->

function addfav()
   {
   if (document.all)
      {
      window.external.AddFavorite
      ("http://www.webdevelopersnotes.com","WebDevelopersNotes")
      }
   }
