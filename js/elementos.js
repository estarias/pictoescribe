function Category(it) {
     this.name = it.name;
     this.icon = "categorias/" + it.name + "/" + it.name + ".png";
     this.sound = "categorias/" + it.name + "/" + it.name + ".mp3";
     this.color = it.color;
     this.type = "category";
 }

 function Element(name, cat) {
     this.name = name;
     this.type = "element";
     if (cat !== undefined) {
         this.icon = "categorias/" + cat.name + "/elementos/" + name + ".png";
         this.sound = "categorias/" + cat.name + "/elementos/" + name + ".mp3";
         this.color = cat.color;
         this.cat = cat;
     }   
 }

