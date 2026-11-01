const SALADS = [
    {
        id: 1,
        name: "Mediterranean tuna & chickpea salad",
        category: "Mediterranean-style",
        score_out_of_10: 9.7,
        estimated_calories_kcal: 390,
        thumbnail_url: "https://dailydishdrop.com/assets/images/1773181908081-82mjqgtl.webp",
        thumbnail_source_url: "https://dailydishdrop.com/recipes/hearty-tuna-garbanzo-bean-salad",
        ingredients: [
        { name: "Lettuce", quantity: 50, unit: "g" },
        { name: "Tomato", quantity: 100, unit: "g" },
        { name: "Cucumber", quantity: 100, unit: "g" },
        { name: "Onion", quantity: 20, unit: "g" },
        { name: "Tuna", quantity: 80, unit: "g", weighing: "drained" },
        { name: "Chickpeas", quantity: 15, unit: "g", weighing: "dry" },
        { name: "Olive slices", quantity: 10, unit: "g" },
        { name: "Grilled toast", quantity: 15, unit: "g" },
        { name: "Yogurt dressing", quantity: 1, unit: "portion", calories_kcal: 100 }
        ]
    },
    {
        id: 2,
        name: "Mediterranean chicken salad",
        category: "Mediterranean-style",
        score_out_of_10: 9.5,
        estimated_calories_kcal: 400,
        thumbnail_url: "https://res.cloudinary.com/solin-fitness/image/upload/c_scale%2Cw_800%2Cq_auto%2Cf_auto/single-meal-images/lrol7w34qsvvy7nouvnb",
        thumbnail_source_url: "https://www.solin.stream/recipes/251428/fresh-chopped-vegetable-salad-with-creamy-feta-and-briny-olives",
        ingredients: [
        { name: "Lettuce", quantity: 50, unit: "g" },
        { name: "Tomato", quantity: 100, unit: "g" },
        { name: "Cucumber", quantity: 100, unit: "g" },
        { name: "Onion", quantity: 20, unit: "g" },
        { name: "Chicken breast", quantity: 120, unit: "g", weighing: "raw" },
        { name: "Chickpeas", quantity: 15, unit: "g", weighing: "dry" },
        { name: "Olive slices", quantity: 10, unit: "g" },
        { name: "Yogurt dressing", quantity: 1, unit: "portion", calories_kcal: 100 }
        ]
    },
    {
        id: 3,
        name: "Tuna & boiled egg salad",
        category: "Mediterranean-style",
        score_out_of_10: 9.4,
        estimated_calories_kcal: 350,
        thumbnail_url: "https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/recipe_pics/st_tropez_salad.jpg",
        thumbnail_source_url: "https://www.snapcalorie.com/recipes/st_tropez_salad.html",
        ingredients: [
        { name: "Lettuce", quantity: 50, unit: "g" },
        { name: "Tomato", quantity: 100, unit: "g" },
        { name: "Cucumber", quantity: 100, unit: "g" },
        { name: "Onion", quantity: 20, unit: "g" },
        { name: "Tuna", quantity: 100, unit: "g", weighing: "drained" },
        { name: "Eggs", quantity: 2, unit: "eggs" },
        { name: "Olive slices", quantity: 10, unit: "g" },
        { name: "Yogurt dressing", quantity: 1, unit: "portion", calories_kcal: 100 }
        ]
    },
    {
        id: 4,
        name: "Chickpea & egg salad",
        category: "Mediterranean-style",
        score_out_of_10: 9.1,
        estimated_calories_kcal: 390,
        thumbnail_url: "https://cdn-uploads.mealime.com/cdn-cgi/image/width%3D3840/esc/DSCF5677.jpg",
        thumbnail_source_url: "https://www.safeway.com/meal-plans-recipes/shop/vegetarian-chefs-salad-egg-chickpeas-cheese-cucumber-tomato-lemon-vinaigrette",
        ingredients: [
        { name: "Lettuce", quantity: 50, unit: "g" },
        { name: "Tomato", quantity: 100, unit: "g" },
        { name: "Cucumber", quantity: 100, unit: "g" },
        { name: "Onion", quantity: 20, unit: "g" },
        { name: "Chickpeas", quantity: 40, unit: "g", weighing: "dry" },
        { name: "Eggs", quantity: 2, unit: "eggs" },
        { name: "Olive slices", quantity: 10, unit: "g" },
        { name: "Yogurt dressing", quantity: 1, unit: "portion", calories_kcal: 100 }
        ]
    },
    {
        id: 5,
        name: "Creamy chicken pasta salad",
        category: "Creamy",
        score_out_of_10: 9.8,
        estimated_calories_kcal: 430,
        thumbnail_url: "https://cdn.aboutamom.com/uploads/2024/06/Chicken-Pasta-Salad-Recipe-A_Classic-Chicken-Pasta-Salad-final-shot-2-500x500.jpg",
        thumbnail_source_url: "https://www.rohlik.cz/chef/24237-testovinovy-salat-s-kurecim-masem",
        ingredients: [
        { name: "Whole wheat pasta", quantity: 45, unit: "g", weighing: "dry" },
        { name: "Chicken breast", quantity: 100, unit: "g", weighing: "raw" },
        { name: "Tomato", quantity: 80, unit: "g" },
        { name: "Cucumber", quantity: 80, unit: "g" },
        { name: "Onion", quantity: 15, unit: "g" },
        { name: "Olive slices", quantity: 10, unit: "g" },
        { name: "Yogurt dressing", quantity: 1, unit: "portion", calories_kcal: 100 }
        ]
    },
    {
        id: 6,
        name: "Creamy tuna pasta salad",
        category: "Creamy",
        score_out_of_10: 9.6,
        estimated_calories_kcal: 420,
        thumbnail_url: "https://freshforklab.com/assets/images/1775408808063-hpv0jm67.webp",
        thumbnail_source_url: "https://samanthaskitchen.com/en/lunch/creamy-tuna-pasta-salad-low-fat-protein-packed",
        ingredients: [
        { name: "Whole wheat pasta", quantity: 50, unit: "g", weighing: "dry" },
        { name: "Tuna", quantity: 100, unit: "g", weighing: "drained" },
        { name: "Tomato", quantity: 80, unit: "g" },
        { name: "Cucumber", quantity: 80, unit: "g" },
        { name: "Onion", quantity: 15, unit: "g" },
        { name: "Olive slices", quantity: 10, unit: "g" },
        { name: "Yogurt dressing", quantity: 1, unit: "portion", calories_kcal: 100 }
        ]
    },
    {
        id: 7,
        name: "High-protein creamy salad",
        category: "Creamy",
        score_out_of_10: 9.4,
        estimated_calories_kcal: 460,
        thumbnail_url: "https://mrcuisto.com/assets/images/1778066831413-mdvi0eue.jpg",
        thumbnail_source_url: "https://mrcuisto.com/recipes/salade-pates-fondante-poulet",
        ingredients: [
        { name: "Whole wheat pasta", quantity: 30, unit: "g", weighing: "dry" },
        { name: "Chicken breast", quantity: 70, unit: "g", weighing: "raw" },
        { name: "Chickpeas", quantity: 15, unit: "g", weighing: "dry" },
        { name: "Eggs", quantity: 1, unit: "egg" },
        { name: "Tomato", quantity: 60, unit: "g" },
        { name: "Cucumber", quantity: 60, unit: "g" },
        { name: "Onion", quantity: 10, unit: "g" },
        { name: "Yogurt dressing", quantity: 1, unit: "portion", calories_kcal: 100 }
        ]
    },
    {
        id: 8,
        name: "Tuna & chickpea pasta salad",
        category: "Creamy",
        score_out_of_10: 9.2,
        estimated_calories_kcal: 430,
        thumbnail_url: "https://igav3-metcdn-com.global.ssl.fastly.net/content/uploads/2025/04/21144401/Recipe-Image-8.jpg",
        thumbnail_source_url: "https://www.iga.com.au/partners/john-west-tuna/",
        ingredients: [
        { name: "Whole wheat pasta", quantity: 40, unit: "g", weighing: "dry" },
        { name: "Tuna", quantity: 80, unit: "g", weighing: "drained" },
        { name: "Chickpeas", quantity: 15, unit: "g", weighing: "dry" },
        { name: "Tomato", quantity: 80, unit: "g" },
        { name: "Cucumber", quantity: 80, unit: "g" },
        { name: "Onion", quantity: 15, unit: "g" },
        { name: "Olive slices", quantity: 10, unit: "g" },
        { name: "Yogurt dressing", quantity: 1, unit: "portion", calories_kcal: 100 }
        ]
    },
    {
        id: 9,
        name: "Crunchy garden salad",
        category: "Crunchy & refreshing",
        score_out_of_10: 9.0,
        estimated_calories_kcal: 300,
        thumbnail_url: "https://image.delishkitchen.tv/recipe/222551682624521299/1.jpg?version=1641532341&w=920",
        thumbnail_source_url: "https://delishkitchen.tv/recipes/222551682624521299",
        ingredients: [
        { name: "Lettuce", quantity: 80, unit: "g" },
        { name: "Tomato", quantity: 100, unit: "g" },
        { name: "Cucumber", quantity: 100, unit: "g" },
        { name: "Onion", quantity: 20, unit: "g" },
        { name: "Grilled toast", quantity: 25, unit: "g" },
        { name: "Eggs", quantity: 1, unit: "egg" },
        { name: "Yogurt dressing", quantity: 1, unit: "portion", calories_kcal: 100 }
        ]
    },
    {
        id: 10,
        name: "Tuna crunchy salad",
        category: "Crunchy & refreshing",
        score_out_of_10: 9.3,
        estimated_calories_kcal: 320,
        thumbnail_url: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/7/19/0/FNM_090113-Tuna-Salad-With-Herb-Toast-Recipe_s4x3.jpg.rend.hgtvcom.826.620.suffix/1377794547608.jpeg",
        thumbnail_source_url: "https://www.foodnetwork.com/recipes/tuna-salad-with-herb-toast-2268933",
        ingredients: [
        { name: "Lettuce", quantity: 50, unit: "g" },
        { name: "Tuna", quantity: 100, unit: "g", weighing: "drained" },
        { name: "Chickpeas", quantity: 20, unit: "g", weighing: "dry" },
        { name: "Tomato", quantity: 100, unit: "g" },
        { name: "Cucumber", quantity: 100, unit: "g" },
        { name: "Onion", quantity: 20, unit: "g" },
        { name: "Grilled toast", quantity: 20, unit: "g" },
        { name: "Olive slices", quantity: 10, unit: "g" }
        ]
    },
    {
        id: 11,
        name: "Chicken Caesar-inspired salad",
        category: "Crunchy & refreshing",
        score_out_of_10: 9.5,
        estimated_calories_kcal: 390,
        thumbnail_url: "https://antifategypt.com/cdn/shop/files/BCO.e50fee30-ca03-4865-bcd4-e6a8b2f94564.png?v=1779366216",
        thumbnail_source_url: "https://www.famousdaves.ae/product/classic-chicken-caesar-salad",
        ingredients: [
        { name: "Lettuce", quantity: 100, unit: "g" },
        { name: "Chicken breast", quantity: 120, unit: "g", weighing: "raw" },
        { name: "Eggs", quantity: 1, unit: "egg" },
        { name: "Grilled toast", quantity: 20, unit: "g" },
        { name: "Yogurt dressing", quantity: 1, unit: "portion", calories_kcal: 100 }
        ]
    }
];