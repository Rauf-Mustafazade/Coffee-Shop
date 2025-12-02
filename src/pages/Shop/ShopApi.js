const products = [
    {
        "id": 1,
        "image": "https://i.pinimg.com/1200x/0c/b1/ae/0cb1ae8c3ef31300fff5c652b787dade.jpg",
        "title": "Colombia - Gesha Dream",
        "price": 95,
        "description": "Carbonic maceration, floral aroma, blueberry tea. 250gr.",
        "inStock": true
    },
    {
        "id": 2,
        "image": "https://i.pinimg.com/1200x/2b/2e/14/2b2e143ad0267310e8854ff61379dd69.jpg",
        "title": "Ethiopia - Guji Honey",
        "price": 85,
        "description": "Honey process, jasmine, apricot sweetness.",
        "inStock": false
    },
    {
        "id": 3,
        "image": "https://i.pinimg.com/1200x/b1/f0/fd/b1f0fd91ad4d78e0a73030b448920291.jpg",
        "title": "Kenya - AA Kirinyaga",
        "price": 89,
        "description": "Bright acidity, blackcurrant notes, high-altitude washed coffee.",
        "inStock": true
    },
    {
        "id": 4,
        "image": "https://i.pinimg.com/1200x/18/d6/eb/18d6eb89e16eb14e870ec1f2d3668137.jpg",
        "title": "Brazil - Cerrado Estate",
        "price": 70,
        "description": "Nutty aroma, chocolate body, smooth finish.",
        "inStock": true
    },
    {
        "id": 5,
        "image": "https://i.pinimg.com/1200x/68/3b/19/683b19a449da590264830753bacb02f7.jpg",
        "title": "Guatemala - Antigua",
        "price": 80,
        "description": "Sweet caramel, cocoa, spicy undertone.",
        "inStock": false
    },
    {
        "id": 6,
        "image": "https://i.pinimg.com/1200x/67/6b/3a/676b3a0c8438dd0760d5bc31d1a8e083.jpg",
        "title": "Peru - Andes Reserve",
        "price": 78,
        "description": "Organic, medium roast, creamy texture.",
        "inStock": true
    },
    {
        "id": 7,
        "image": "https://i.pinimg.com/736x/03/4b/d5/034bd54e7c542a6d48069f0bbf6a5e55.jpg",
        "title": "Costa Rica - Tarrazú",
        "price": 92,
        "description": "High-grown washed bean with citrus and honey aromas.",
        "inStock": true
    },
    {
        "id": 8,
        "image": "https://i.pinimg.com/1200x/ac/5f/ae/ac5fae9761e4991c1504fe718f42522d.jpg",
        "title": "Yemen - Mocha Matari",
        "price": 110,
        "description": "Historic origin, deep cocoa and wine-like fruitiness.",
        "inStock": false
    },
    {
        "id": 9,
        "image": "https://i.pinimg.com/1200x/71/21/ee/7121eed3f0cefa304c316656cc374e71.jpg",
        "title": "Indonesia - Sumatra Mandheling",
        "price": 88,
        "description": "Earthy, spicy aroma, syrupy body, low acidity.",
        "inStock": true
    },
    {
        "id": 10,
        "image": "https://i.pinimg.com/1200x/00/44/41/00444181893a883eeb6b5d194898bfa8.jpg",
        "title": "Organic Coffee",
        "price": 150,
        "description": "Ultra-premium gesha floral profile with citrus zest.",
        "inStock": true
    },
    {
        "id": 11,
        "image": "https://i.pinimg.com/1200x/f0/5b/5c/f05b5c3bd630fb163cdd19629c817880.jpg",
        "title": "Rwanda - Bourbon",
        "price": 84,
        "description": "Sweet, fruity, with tea-like lightness.",
        "inStock": false
    },
    {
        "id": 12,
        "image": "https://i.pinimg.com/1200x/66/b3/b8/66b3b876c4bae4ab93bea440c19c366e.jpg",
        "title": "Burundi - Kayanza",
        "price": 86,
        "description": "Crisp acidity, red fruit, smooth finish.",
        "inStock": true
    },
    {
        "id": 13,
        "image": "https://i.pinimg.com/1200x/a8/2e/3c/a82e3c9d7639ca660c64c5903b1dfe3b.jpg",
        "title": "Tanzania - Peaberry",
        "price": 82,
        "description": "Unique peaberry bean with citrus brightness.",
        "inStock": true
    },
    {
        "id": 14,
        "image": "https://i.pinimg.com/1200x/b8/b2/c6/b8b2c667906af78f0d7bc0322580aaa9.jpg",
        "title": "Mexico - Chiapas Organic",
        "price": 72,
        "description": "Light chocolate, nutty, organic certification.",
        "inStock": false
    },
    {
        "id": 15,
        "image": "https://i.pinimg.com/1200x/ca/01/f5/ca01f5601095e13725c33a23aff5980c.jpg",
        "title": "Nicaragua - Jinotega",
        "price": 76,
        "description": "Medium body, balanced sweetness, smooth finish.",
        "inStock": true
    },
    {
        "id": 16,
        "image": "https://i.pinimg.com/1200x/d9/89/3d/d9893d7af3a6c3414765c6f0515bc06e.jpg",
        "title": "Honduras - Santa Barbara",
        "price": 83,
        "description": "Clean cup, sweet citrus, chocolate tones.",
        "inStock": true
    },
    {
        "id": 17,
        "image": "https://i.pinimg.com/1200x/c6/9e/7e/c69e7e9293288d5eced1c1ae9019ef6d.jpg",
        "title": "India - Monsooned Malabar",
        "price": 75,
        "description": "Low acidity, rich spice aroma, monsooned aging process.",
        "inStock": false
    },
    {
        "id": 18,
        "image": "https://i.pinimg.com/736x/c6/ff/21/c6ff218151bc8ca70a11116f08abdd77.jpg",
        "title": "China - Yunnan Arabica",
        "price": 79,
        "description": "Mild floral profile with fruity complexity.",
        "inStock": true
    },
    {
        "id": 19,
        "image": "https://i.pinimg.com/1200x/b7/1b/13/b71b13688088375a62fec668e3bf0976.jpg",
        "title": "Vietnam - Dalat Specialty",
        "price": 65,
        "description": "Chocolate-heavy profile with creamy texture.",
        "inStock": true
    },
    {
        "id": 20,
        "image": "https://i.pinimg.com/1200x/58/d0/03/58d00334a8620ac6a1e986259c8ceeee.jpg",
        "title": "Uganda - Bugisu",
        "price": 74,
        "description": "Bold body, earthy tones, rich flavor depth.",
        "inStock": false
    }
];

export default products;
