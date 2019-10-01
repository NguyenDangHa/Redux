import *  as types from '../actions/actionTypes';
var initialState = [
    {
        id: 1,
        name: 'Iphone 7',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSREmJBBGTIm_Hg7n9ymQ4W59jKiHjfY8JCzbPdXTMRlNpjvGSz-w',
        description: 'Made in USA',
        price: '500 $',
        inventory: 10,
        rating: 3
    },
    {
        id: 2,
        name: 'Oppo F1 S',
        image: 'http://www.freepngclipart.com/download/panda/17467-cute-cartoon-panda-cute-cartoon-panda-bears.jpg',
        description: 'Made in Viet Nam',
        price: '700 $',
        inventory: 16,
        rating: 4
    },
    {
        id: 3,
        name: 'Redmi Note 8 Pro',
        image: 'https://i7.pngguru.com/preview/561/286/514/giant-panda-cartoon-royalty-free-clip-art-panda.jpg',
        description: 'Made in China',
        price: '1000 $',
        inventory: 5,
        rating: 5
    },
    {
        id: 4,
        name: 'Iphone 8 Plus',
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone8-plus-silver-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795419237',
        description: 'Made in China',
        price: '1100 $',
        inventory: 5,
        rating: 4
    },
    {
        id: 5,
        name: 'Iphone XS Max',
        image: 'https://images-na.ssl-images-amazon.com/images/I/61nMZHYdXaL._SL1024_.jpg',
        description: 'Made in China',
        price: '1200 $',
        inventory: 5,
        rating: 3
    },
    {
        id: 6,
        name: 'Iphone 11',
        image: 'https://vcdn-sohoa.vnecdn.net/2019/09/24/phone-01-1569297192_680x0.jpg',
        description: 'Made in China',
        price: '1300 $',
        inventory: 5,
        rating: 2
    },
    {
        id: 7,
        name: 'Iphone 11 Pro Max',
        image: 'https://static.esrgear.com/wp-content/uploads/2019/08/iPhone-11-Pro-Max-Essential-Crown-Slim-Clear-Case-1.jpg',
        description: 'Made in China',
        price: '1700 $',
        inventory: 5,
        rating: 1
    },
    {
        id:8,
        name: 'Panda cute',
        image:'https://dejpknyizje2n.cloudfront.net/marketplace/products/cute-baby-panda-hanging-on-bamboo-sticker-1539701544.4329958.png',
        description:' made in Ustralia',
        price :'Vô giá',
        inventory:'5000 con trên thế giới',
        rating:'4000 chú'
    }
];

var findIndex = (phones, id) => {
    var result = -1;
    if (phones.length > 0) {
        phones.forEach((products, index) => {
            if (products.id === id) {
                result = index;
            }
        });
    }
    return result;
}

const Employees = (state = initialState, action) => {
    var index = -1;
    switch (action.type) {
        case types.deleteData:
            index = findIndex(state, action.id);
            if (index !== -1) {
                state.splice(index, 1);
            }
            return [...state]

        case types.addProduct:
            if (action) {
                var data = {
                    id: action.product.id,
                    name: action.product.name,
                    image: action.product.image_url,
                    description: action.product.description,
                    price: action.product.price,
                    inventory: action.product.inventory,
                    rating: action.product.rating
                }
                state.unshift(data);
            }
            return [...state];

        default: return [...state]
    }
}

export default Employees;