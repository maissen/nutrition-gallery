const SALADS = [
  {
    id: 1,
    name: "Mediterranean tuna & chickpea salad",
    category: "Mediterranean-style",
    score_out_of_10: 9.7,
    thumbnail_url: "https://dailydishdrop.com/assets/images/1773181908081-82mjqgtl.webp",
    thumbnail_source_url: "https://dailydishdrop.com/recipes/hearty-tuna-garbanzo-bean-salad",
    ingredients: [
      { ref: "lettuce", quantity: 50 },
      { ref: "tomato", quantity: 100 },
      { ref: "cucumber", quantity: 100 },
      { ref: "tuna_drained", quantity: 80 },
      { ref: "chickpeas_dry", quantity: 15 },
      { ref: "olive_slices", quantity: 10 },
      { ref: "grilled_toast", quantity: 25 },
      { ref: "yogurt_dressing", quantity: 1 }
    ]
  },
  {
    id: 2,
    name: "Mediterranean chicken salad",
    category: "Mediterranean-style",
    score_out_of_10: 9.5,
    thumbnail_url: "https://res.cloudinary.com/solin-fitness/image/upload/c_scale%2Cw_800%2Cq_auto%2Cf_auto/single-meal-images/lrol7w34qsvvy7nouvnb",
    thumbnail_source_url: "https://www.solin.stream/recipes/251428/fresh-chopped-vegetable-salad-with-creamy-feta-and-briny-olives",
    ingredients: [
      { ref: "lettuce", quantity: 50 },
      { ref: "tomato", quantity: 100 },
      { ref: "cucumber", quantity: 100 },
      { ref: "chicken_breast", quantity: 120 },
      { ref: "chickpeas_dry", quantity: 15 },
      { ref: "olive_slices", quantity: 10 },
      { ref: "yogurt_dressing", quantity: 1 }
    ]
  },
  {
    id: 3,
    name: "Tuna & boiled egg salad",
    category: "Mediterranean-style",
    score_out_of_10: 9.4,
    thumbnail_url: "https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/recipe_pics/st_tropez_salad.jpg",
    thumbnail_source_url: "https://www.snapcalorie.com/recipes/st_tropez_salad.html",
    ingredients: [
      { ref: "lettuce", quantity: 50 },
      { ref: "tomato", quantity: 100 },
      { ref: "cucumber", quantity: 100 },
      { ref: "tuna_drained", quantity: 100 },
      { ref: "egg", quantity: 2 },
      { ref: "olive_slices", quantity: 10 },
      { ref: "yogurt_dressing", quantity: 1 }
    ]
  },
  {
    id: 4,
    name: "Chickpea & egg salad",
    category: "Mediterranean-style",
    score_out_of_10: 9.1,
    thumbnail_url: "https://cdn-uploads.mealime.com/cdn-cgi/image/width%3D3840/esc/DSCF5677.jpg",
    thumbnail_source_url: "https://www.safeway.com/meal-plans-recipes/shop/vegetarian-chefs-salad-egg-chickpeas-cheese-cucumber-tomato-lemon-vinaigrette",
    ingredients: [
      { ref: "lettuce", quantity: 50 },
      { ref: "tomato", quantity: 100 },
      { ref: "cucumber", quantity: 100 },
      { ref: "chickpeas_dry", quantity: 40 },
      { ref: "egg", quantity: 2 },
      { ref: "olive_slices", quantity: 10 },
      { ref: "yogurt_dressing", quantity: 1 }
    ]
  },
  {
    id: 5,
    name: "Creamy chicken pasta salad",
    category: "Creamy",
    score_out_of_10: 9.8,
    thumbnail_url: "https://cdn.aboutamom.com/uploads/2024/06/Chicken-Pasta-Salad-Recipe-A_Classic-Chicken-Pasta-Salad-final-shot-2-500x500.jpg",
    thumbnail_source_url: "https://www.rohlik.cz/chef/24237-testovinovy-salat-s-kurecim-masem",
    ingredients: [
      { ref: "wheat_pasta_dry", quantity: 45 },
      { ref: "chicken_breast", quantity: 100 },
      { ref: "tomato", quantity: 80 },
      { ref: "cucumber", quantity: 80 },
      { ref: "olive_slices", quantity: 10 },
      { ref: "yogurt_dressing", quantity: 1 }
    ]
  },
  {
    id: 6,
    name: "Creamy tuna pasta salad",
    category: "Creamy",
    score_out_of_10: 9.6,
    thumbnail_url: "https://freshforklab.com/assets/images/1775408808063-hpv0jm67.webp",
    thumbnail_source_url: "https://samanthaskitchen.com/en/lunch/creamy-tuna-pasta-salad-low-fat-protein-packed",
    ingredients: [
      { ref: "wheat_pasta_dry", quantity: 50 },
      { ref: "tuna_drained", quantity: 100 },
      { ref: "tomato", quantity: 80 },
      { ref: "cucumber", quantity: 80 },
      { ref: "olive_slices", quantity: 10 },
      { ref: "yogurt_dressing", quantity: 1 }
    ]
  },
  {
    id: 7,
    name: "High-protein creamy salad",
    category: "Creamy",
    score_out_of_10: 9.4,
    thumbnail_url: "https://mrcuisto.com/assets/images/1778066831413-mdvi0eue.jpg",
    thumbnail_source_url: "https://mrcuisto.com/recipes/salade-pates-fondante-poulet",
    ingredients: [
      { ref: "wheat_pasta_dry", quantity: 30 },
      { ref: "chicken_breast", quantity: 70 },
      { ref: "chickpeas_dry", quantity: 15 },
      { ref: "egg", quantity: 1 },
      { ref: "tomato", quantity: 60 },
      { ref: "cucumber", quantity: 60 },
      { ref: "yogurt_dressing", quantity: 1 }
    ]
  },
  {
    id: 8,
    name: "Tuna & chickpea pasta salad",
    category: "Creamy",
    score_out_of_10: 9.2,
    thumbnail_url: "https://igav3-metcdn-com.global.ssl.fastly.net/content/uploads/2025/04/21144401/Recipe-Image-8.jpg",
    thumbnail_source_url: "https://www.iga.com.au/partners/john-west-tuna/",
    ingredients: [
      { ref: "wheat_pasta_dry", quantity: 40 },
      { ref: "tuna_drained", quantity: 80 },
      { ref: "chickpeas_dry", quantity: 15 },
      { ref: "tomato", quantity: 80 },
      { ref: "cucumber", quantity: 80 },
      { ref: "olive_slices", quantity: 10 },
      { ref: "yogurt_dressing", quantity: 1 }
    ]
  },
  {
    id: 9,
    name: "Crunchy garden salad",
    category: "Crunchy & refreshing",
    score_out_of_10: 9.0,
    thumbnail_url: "https://image.delishkitchen.tv/recipe/222551682624521299/1.jpg?version=1641532341&w=920",
    thumbnail_source_url: "https://delishkitchen.tv/recipes/222551682624521299",
    ingredients: [
      { ref: "lettuce", quantity: 80 },
      { ref: "tomato", quantity: 100 },
      { ref: "cucumber", quantity: 100 },
      { ref: "grilled_toast", quantity: 25 },
      { ref: "egg", quantity: 1 },
      { ref: "yogurt_dressing", quantity: 1 }
    ]
  },
  {
    id: 10,
    name: "Tuna crunchy salad",
    category: "Crunchy & refreshing",
    score_out_of_10: 9.3,
    thumbnail_url: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/7/19/0/FNM_090113-Tuna-Salad-With-Herb-Toast-Recipe_s4x3.jpg.rend.hgtvcom.826.620.suffix/1377794547608.jpeg",
    thumbnail_source_url: "https://www.foodnetwork.com/recipes/tuna-salad-with-herb-toast-2268933",
    ingredients: [
      { ref: "lettuce", quantity: 50 },
      { ref: "tuna_drained", quantity: 100 },
      { ref: "chickpeas_dry", quantity: 20 },
      { ref: "tomato", quantity: 100 },
      { ref: "cucumber", quantity: 100 },
      { ref: "grilled_toast", quantity: 25 },
      { ref: "olive_slices", quantity: 10 }
    ]
  },
  {
    id: 11,
    name: "Chicken Caesar-inspired salad",
    category: "Crunchy & refreshing",
    score_out_of_10: 9.5,
    thumbnail_url: "https://antifategypt.com/cdn/shop/files/BCO.e50fee30-ca03-4865-bcd4-e6a8b2f94564.png?v=1779366216",
    thumbnail_source_url: "https://www.famousdaves.ae/product/classic-chicken-caesar-salad",
    ingredients: [
      { ref: "lettuce", quantity: 100 },
      { ref: "chicken_breast", quantity: 120 },
      { ref: "egg", quantity: 1 },
      { ref: "grilled_toast", quantity: 25 },
      { ref: "yogurt_dressing", quantity: 1 }
    ]
  }
];