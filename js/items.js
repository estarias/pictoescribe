var ITEMS = [{"color": "white", "name": "números", "elementos": ["cero", "cinco", "cuatro", "dos", "nueve", "ocho", "seis", "siete", "tres", "uno"]}, {"color": "white", "name": "abecedario", "elementos": ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]}, {"color": "orange", "name": "animales", "elementos": ["abeja", "ardilla", "ballenas", "caballos", "cabras", "camellos", "canario", "caracoles", "cebras", "cerdo", "cerdos", "chimpances", "cocodrilos", "delfin", "gallina", "gallo", "gato", "iguanas", "leon", "leon_marino", "mariposa", "mono", "oso", "oso_panda", "pajaro", "paloma", "pantera", "pato", "perro", "pinguino", "pulpo", "rinoceronte", "ternera", "toro", "tortugas", "vaca"]}, {"color": "blue", "name": "adjetivos", "elementos": ["aburridos", "acompañado", "alto", "anterior", "anterior (1)", "aquel", "autonomo", "bajo", "baratos", "blandos", "calientes", "central", "claros", "confuso", "cualquier", "dependiente", "derecha", "diferente", "dulce", "duro", "egoista", "enfermo", "entero", "este", "estos", "extraño", "falso", "feliz", "feliz (1)", "feliz (2)", "feo", "flacos", "frio", "fuerte", "gordo", "grande", "guapo", "hermosa", "iguales", "irritado", "izquierda", "joven", "lento", "mas", "menos", "menos (1)", "mojado", "nervioso", "ninguna", "ninguno", "nuevo", "otra", "pegajosos", "pequeña", "picante", "primer", "rizados", "rugoso", "seco", "sola", "solo", "suaves", "sucios", "toda", "toda (1)", "ultimo", "vacio", "verdadera", "viejo"]}, {"color": "orange", "name": "lugares", "elementos": ["ambulatorio", "avenida", "bibliotecas", "cafeterías", "carceles", "casas", "cementerios", "cines", "circos", "colegios", "comisarias", "jugueteria", "plaza", "tienda de musica", "tiendas", "verduleria"]}, {"color": "orange", "name": "objetos", "subcategorias": [{"color": "red", "name": "útiles", "elementos": ["agendas", "calculadoras", "carpetas", "cinta_adhesiva", "clips", "cuaderno", "cuentos", "goma", "lapiz", "libro", "mapa", "pincel", "pinturas_de_colores", "pizarra", "regla", "sacapuntas", "tijeras_escolares"]}, {"color": "red", "name": "instrumentos musicales", "elementos": ["acordeon", "armonica", "baterias", "corneta", "flauta", "guitarra", "maraca", "pentagrama", "percusion", "piano", "saxofon", "tambor", "tuba", "violin"]}, {"color": "red", "name": "cuidado personal", "elementos": ["cepillos_de_dientes", "cepillos_de_pelo", "colonias", "cosmeticos", "crema", "desodorante", "esponja", "jabon", "papel_higienico", "papeleras", "pañal"]}, {"color": "red", "name": "juguetes", "elementos": ["ajedrez", "balon_de_baloncesto", "balon_de_futbol", "baraja", "caballitos_de_madera", "camiones_de_juguete", "coches_de_juguete", "cuento", "globos", "muñeca", "muñeco", "patinete", "pelota", "pilas", "puzzle", "tren_de_juguete", "triciclo"]}, {"color": "red", "name": "herramientas", "elementos": ["alicates", "cajas_de_herramientas", "carretillas", "llave_fija", "martillo", "pala", "rastrillo", "serrucho", "tenazas", "tornillo"]}, {"color": "red", "name": "tecnología", "elementos": ["CD_Roms", "altavoces", "computadora", "impresora", "memoria", "microfono", "monitores", "mp3", "pendrive", "raton", "software", "tablet"]}, {"color": "red", "name": "objetos de la casa", "elementos": ["aire_acondicionado", "alfombras", "almohadas", "aspiradora", "batidoras", "baños", "cafeteras", "chimenea", "chimeneas", "cocinas", "colchones", "electrodomesticos", "equipo_de_musica", "horno", "lampara", "libreria", "mantel", "mesa", "microondas", "pared", "plancha", "puerta", "sandwichera", "suelo", "telefono", "television", "ventana"]}]}, {"color": "green", "name": "verbos", "elementos": ["quiero", "abrir", "acompañar", "agrupar", "alcanzar", "apagar", "avanzar", "bajar", "borrar", "cancelar", "cantar", "cepillar los dientes", "cerrar", "comer", "comer (1)", "construir", "continuar", "correr", "cortar", "cortar el pelo", "cumplir", "dar", "dormir", "duchar", "enfermar", "enseñar", "entrar", "enviar", "escribir", "escuchar", "hacer fotos", "intentar", "jugar", "lavar", "leer", "llamar", "llegar", "llorar", "nacer", "pasear", "pegar", "peinar", "perfumar", "pintar", "pintar (1)", "pulsar", "reir (1)", "rodear", "salir", "silenciar", "subir", "tomar", "trabajar", "ver", "visitar"]}, {"color": "blue", "name": "colores", "elementos": ["amarillo", "azul", "blanco", "dorado", "gris", "marron", "naranja", "negro", "rojo", "rosa", "verde", "verde_claro", "violeta"]}, {"color": "yellow", "name": "personas", "elementos": ["ella", "ellas", "ellas_1", "ellos", "ellos_1", "ellos_2", "nosotras", "nosotros", "tu", "yo", "yo_1", "yo_2", "yo_3"]}, {"color": "pink", "name": "sociales", "elementos": ["cuidado", "es gracioso!", "estoy bien!", "felicidades!", "genial!", "lo siento!", "puedo ayudarte", "qué dices", "qué tal"]}, {"color": "pink", "name": "interrogativas", "elementos": ["como", "cuantos (1)", "cuántos", "quién", "quiénes", "qué"]}, {"color": "orange", "name": "alimentos", "subcategorias": [{"color": "red", "name": "hortalizas", "elementos": ["acelga", "calabazas", "cebollas", "maiz", "patata", "tomate"]}, {"color": "red", "name": "bebidas", "elementos": ["Coca-Cola", "agua", "cafe", "leche", "leche con cacao", "yogurt", "zumo de manzana"]}, {"color": "red", "name": "frutas", "elementos": ["cereza", "cerezas", "ciruela", "higo", "kiwi", "limon", "manzana", "manzana (1)", "naranja", "pera", "platano", "pomelo"]}, {"color": "red", "name": "comidas", "elementos": ["aceite", "aceite de oliva", "arroz", "azucar", "caramelos", "carne", "cereales", "croissant", "croqueta", "empanadas", "espaguetis", "fideos", "flanes", "gelatina", "golosinas", "hamburguesa", "hamburguesas", "helado", "helado (1)", "huevo", "huevo frito", "jamon", "leche y galletas", "lentejas", "mayonesa", "pan", "pan (1)", "paquetes de galletas", "pastel de chocolate", "patatas fritas", "pescado", "pollo asado", "pure", "queso", "queso rallado", "sal", "sandwich", "sopa", "tableta de chocolate", "tartas de cumpleaños"]}]}];