const constants = {
  BAGEL_STORE: {
    UPDATE_CART: "update-cart",
    UPDATE_LANG: "update-lang"
  },
  PRODUCTS: {
    en: [
      {
        type: "bagel",
        name: "plain",
        image: "https://www.krispykreme.com/SharedContent/User/41/4187ef86-af76-426a-ac30-d1f124528640.png",
        description: "The classic: Lets you appreciate the pure flavor of the bagel itself. Sweet or savory — your choice.",
        total: 0
      },
      {
        type: "bagel",
        name: "sesame",
        image: "https://www.krispykreme.com/SharedContent/User/41/4187ef86-af76-426a-ac30-d1f124528640.png",
        description: "A time-tested favorite, the neutral flavor of sesame seeds means it can go sweet or savory, too.",
        total: 0
      },
      {
        type: "bagel",
        name: "poppy",
        image: "https://www.krispykreme.com/SharedContent/User/41/4187ef86-af76-426a-ac30-d1f124528640.png",
        description: "The unique but subtle flavor of poppy seeds (common in desserts in the U.S. and Europe but rarely found in Mexico) brings back memories for many bagel lovers. Sweet or savory.",
        total: 0
      },
      {
        type: "bagel",
        name: "onion",
        image: "https://www.krispykreme.com/SharedContent/User/41/4187ef86-af76-426a-ac30-d1f124528640.png",
        description: "This bold-flavored classic is topped with crunchy pieces of toasted onion that sing with flavor.",
        total: 0
      },
      {
        type: "bagel",
        name: "garlic",
        image: "https://www.krispykreme.com/SharedContent/User/41/4187ef86-af76-426a-ac30-d1f124528640.png",
        description: "Topped with crunchy bits of toasted garlic, this strongly flavored bagel is surprisingly a favorite for many kids (and adults, too).",
        total: 0
      },
      {
        type: "bagel",
        name: "seasalt",
        image: "https://www.krispykreme.com/SharedContent/User/41/4187ef86-af76-426a-ac30-d1f124528640.png",
        description: "The large crystals of sea salt that top this bagel give it a delicious flavor reminiscent of pretzel.",
        total: 0
      },
      {
        type: "bagel",
        name: "everything",
        image: "https://www.krispykreme.com/SharedContent/User/41/4187ef86-af76-426a-ac30-d1f124528640.png",
        description: "Why choose just one flavor when you can have them all at once? Topped with white and black sesame seeds, onion, garlic, sea salt, and poppy seeds.",
        total: 0
      },
      {
        type: "bagel",
        name: "cinnamonraisin",
        image: "https://www.krispykreme.com/SharedContent/User/41/4187ef86-af76-426a-ac30-d1f124528640.png",
        description: "Infused with aromatic cinnamon and bursting with raisins, this bagel is sweetly delicious, even though we don't actually add any sugar to it at all.",
        total: 0
      },
      {
        type: "schmear",
        name: "plain",
        image: "https://www.krispykreme.com/SharedContent/User/41/4187ef86-af76-426a-ac30-d1f124528640.png",
        description: "Whipped cream cheese — lighter consistency and easier to spread than ordinary cream cheese.",
        total: 0
      },
      {
        type: "schmear",
        name: "scallion",
        image: "https://www.krispykreme.com/SharedContent/User/41/4187ef86-af76-426a-ac30-d1f124528640.png",
        description: "Whipped cream cheese with fresh bits of chopped scallions, perfect for any bagel except cinnamon-raisin.",
        total: 0
      },
      {
        type: "schmear",
        name: "strawberry",
        image: "https://www.krispykreme.com/SharedContent/User/41/4187ef86-af76-426a-ac30-d1f124528640.png",
        description: "Whipped cream cheese blended with the fruity sweetness of strawberry preserves.",
        total: 0
      },
      {
        type: "schmear",
        name: "chipotle",
        image: "https://www.krispykreme.com/SharedContent/User/41/4187ef86-af76-426a-ac30-d1f124528640.png",
        description: "Whipped cream cheese mixed with the smoky spiciness of chipotle peppers in adobo sauce.",
        total: 0
      },
    ],
    es: [
      {
        type: "bagel",
        name: "natural",
        image: "https://www.krispykreme.com/SharedContent/User/41/4187ef86-af76-426a-ac30-d1f124528640.png",
        description: "El clásico: Te permite apreciar el sabor único del beygl en sí. ¿Dulce o salado? Tú decides.",
        total: 0
      },
      {
        type: "bagel",
        name: "ajonjoli",
        image: "https://www.krispykreme.com/SharedContent/User/41/4187ef86-af76-426a-ac30-d1f124528640.png",
        description: "Un favorito siempre, el sabor neutro de las semillas de ajonjolí también se presta para combinaciones dulces o saladas.",
        total: 0
      },
      {
        type: "bagel",
        name: "semilladepoppy",
        image: "https://www.krispykreme.com/SharedContent/User/41/4187ef86-af76-426a-ac30-d1f124528640.png",
        description: "Con su sabor sutil pero único, las semillas de poppy (amapola), son comunes en la repostería de Estados Unidos y Europa pero raras veces se encuentran en México, traen recuerdos para muchos amantes de beygls. También pueden comerse con dulce o salado.",
        total: 0
      },
      {
        type: "bagel",
        name: "cebolla",
        image: "https://www.krispykreme.com/SharedContent/User/41/4187ef86-af76-426a-ac30-d1f124528640.png",
        description: "Este clásico de sabor fuerte viene con una cubierta de trocitos crujientes de cebolla tostada que te invaden de sabor.",
        total: 0
      },
      {
        type: "bagel",
        name: "ajo",
        image: "https://www.krispykreme.com/SharedContent/User/41/4187ef86-af76-426a-ac30-d1f124528640.png",
        description: "Con su cubierta de trocitos crujientes de ajo tostado, este beygl con su intenso sabor ha resultado un favorito de muchos niñ@s (y adultos, también).",
        total: 0
      },
      {
        type: "bagel",
        name: "saldemar",
        image: "https://www.krispykreme.com/SharedContent/User/41/4187ef86-af76-426a-ac30-d1f124528640.png",
        description: "Su cubierta de granos grandes de sal de mar le presta a este beygl un sabor reminescente de un pretzel.",
        total: 0
      },
      {
        type: "bagel",
        name: "contodo",
        image: "https://www.krispykreme.com/SharedContent/User/41/4187ef86-af76-426a-ac30-d1f124528640.png",
        description: "¿Pa qué escoger un solo sabor cuando puedes tenerlos todos? Este beygl tiene una cubierta mezclada de semillas de ajonjolí blancas y negras, trocitos de cebolla y ajo, sal de mar y semilla de poppy.",
        total: 0
      },
      {
        type: "bagel",
        name: "canelaypasas",
        image: "https://www.krispykreme.com/SharedContent/User/41/4187ef86-af76-426a-ac30-d1f124528640.png",
        description: "Impregnado con canela aromática y explotando con pasitas, este beygl tiene una dulzura deliciosa, a pesar de que no le añadimos nada de azúcar.",
        total: 0
      },
      {
        type: "schmear",
        name: "natural",
        image: "https://www.krispykreme.com/SharedContent/User/41/4187ef86-af76-426a-ac30-d1f124528640.png",
        description: "Untable de queso crema, con una consistencia más ligera y esponjosa que el queso crema ordinario.",
        total: 0
      },
      {
        type: "schmear",
        name: "cebollacambray",
        image: "https://www.krispykreme.com/SharedContent/User/41/4187ef86-af76-426a-ac30-d1f124528640.png",
        description: "Untable de queso crema con pedacitos de cebolla cambray fresca, perfecto para cualquier beygl excepto el de canela con pasas.",
        total: 0
      },
      {
        type: "schmear",
        name: "fresa",
        image: "https://www.krispykreme.com/SharedContent/User/41/4187ef86-af76-426a-ac30-d1f124528640.png",
        description: "Untable de queso crema mezclado con mermelada de fresas.",
        total: 0
      },
      {
        type: "schmear",
        name: "chipotle",
        image: "https://www.krispykreme.com/SharedContent/User/41/4187ef86-af76-426a-ac30-d1f124528640.png",
        description: "Untable de queso crema combinado con el rico picor de chiles chipotle en adobo.",
        total: 0
      },

    ]
  }
}

module.exports = constants
