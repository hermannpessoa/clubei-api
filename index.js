const express = require('express');
const app = express();

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};

app.use(allowCrossDomain)


const _PORT_ = process.env.PORT || 8877;

const fakeApi = {
    "planos": [{
        "id": 0,
        "name": "Mega",
        "emphasis": false,
        "benefits": [{
                "label": "Direito a 2 clubes"
            },
            {
                "label": "Pagamento com desconto em folha"
            },
            {
                "label": "Cancele quando quiser"
            }
        ],
        "price": {
            "oldPrice": null,
            "currentPrice": 89.90
        }
    }, {
        "id": 1,
        "name": "Top",
        "emphasis": true,
        "benefits": [{
                "label": "Direito a 3 clubes"
            },
            {
                "label": "Pagamento com desconto em folha"
            },
            {
                "label": "Cancele quando quiser"
            }
        ],
        "price": {
            "oldPrice": 169.90,
            "currentPrice": 129.90
        }
    }, {
        "id": 2,
        "name": "Light",
        "emphasis": false,
        "benefits": [{
                "label": "Direito a 1 clubes"
            },
            {
                "label": "Pagamento com desconto em folha"
            },
            {
                "label": "Cancele quando quiser"
            }
        ],
        "price": {
            "oldPrice": null,
            "currentPrice": 49.90
        }
    }],
    "categorias": [
        {
            "id": 0,
            "name": "Alimentos",
            "color": "--bg-amarelo",
            "keywords": "food, restaurant"
        },
        {
            "id": 1,
            "name": "Arte e Cultura",
            "color": "--bg-vermelho",
            "keywords": "painting, art, culture"
        },
        {
            "id": 2,
            "name": "Bebidas",
            "color": "--bg-azulClaro",
            "keywords": "drinks, bebidas"
        },
        {
            "id": 3,
            "name": "Fitness",
            "color": "--bg-laranja",
            "keywords": "fitness"
        },
        {
            "id": 4,
            "name": "Roupas e Acess??rios",
            "color": "--bg-verde",
            "keywords": "wear, fashion"
        },
        {
            "id": 5,
            "name": "Mundo GEEK",
            "color": "--bg-amarelo",
            "keywords": "geek, movies, series, animes, nerd"
        },
        {
            "id": 6,
            "name": "Maquiagem",
            "color": "--bg-vermelho",
            "keywords": "makeup"
        },
        {
            "id": 7,
            "name": "Perfumes",
            "color": "--bg-azulClaro",
            "keywords": "perfume"
        },{
            "id": 8,
            "name": "last",
            "color": null,
            "keywords": null
        }
    ]
}


app.get('/', (req, res) => {
    res.json(fakeApi)
})

app.get('/planos', (req, res) => {
    res.json(fakeApi.planos)
})

app.get('/categorias', (req, res) => {
    res.json(fakeApi.categorias)
})

app.listen(_PORT_, () => {
    console.log('ta saindo da jaula o monstro pela porta ' + _PORT_)
})