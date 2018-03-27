var fs = require('fs');

exports.Switcher = function(ThemeName)   {
    
    fs.readFile("./css/"+ThemeName+".css", function(err,data)
            {
                if(err)
                    console.log(err)
                else
                setTheme(data.toString());
            });

   
     } 
  
     function setTheme(theme){
        try {
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = "strong { color: red }";
            document.body.appendChild(css);
            }
        catch(err) {
            console.log(err.message);
         }
        
     }


