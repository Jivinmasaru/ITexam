
  const menuData = {

  burger1:[
    {
      name:'Classic Burger',
      price:'Rp. 30,000',
      img:'burger.jfif',
      desc:'Juicy beef burger with fresh vegetables.'
    },
    {
      name:'Cheese Burger',
      price:'Rp. 42.000',
      img:'cburger.jpg',
      desc:'Double cheese burger with crispy fries.'
    },
    {
      name:'Chicken Burger',
      price:'Rp. 40.000',
      img:'chburger.webp',
      desc:'Crispy chicken burger with spicy sauce.'
    },
    {
      name:'BBQ Burger',
      price:'Rp. 45.000',
      img:'bbqburger.jpg',
      desc:'Burger with smoky BBQ flavor.'
    },
    {
      name:'Mega Burger',
      price:'Rp. 41.000',
      img:'eggburger.jpg',
      desc:'Large burger with double meat.'
    },
    {
      name:'Egg Burger',
      price:'$13',
      img:'YOUR IMAGE HERE',
      desc:'Burger topped with fried egg.'
    }
  ],
  
  pizza:[

    {
      name:'Italian Pizza',
      price:'$18',
      img:'YOUR IMAGE HERE',
      desc:'Stone baked pizza with premium cheese.'
    },

    {
      name:'Pepperoni Pizza',
      price:'$20',
      img:'YOUR IMAGE HERE',
      desc:'Delicious pizza with pepperoni topping.'
    },

    {
      name:'Cheese Pizza',
      price:'$17',
      img:'YOUR IMAGE HERE',
      desc:'Classic cheese pizza.'
    },

    {
      name:'Veggie Pizza',
      price:'$19',
      img:'YOUR IMAGE HERE',
      desc:'Pizza with fresh vegetables.'
    },

    {
      name:'Seafood Pizza',
      price:'$22',
      img:'YOUR IMAGE HERE',
      desc:'Premium seafood pizza.'
    },

    {
      name:'Mushroom Pizza',
      price:'$18',
      img:'YOUR IMAGE HERE',
      desc:'Creamy mushroom pizza.'
    }

  ]

};

const menuList = document.getElementById('menuList');

function loadMenu(category){

  menuList.innerHTML = '';

  menuData[category].forEach(food => {

    const card = document.createElement('div');

    card.classList.add('card');

    card.innerHTML = `

      <img src="${food.img}" alt="${food.name}">

      <div class="card-body">

        <h3>${food.name}</h3>

        <p>${food.desc}</p>

        <span class="price">${food.price}</span>

        <button class="buy-btn" onclick="buyFood('${food.name}')">
          Bayar
        </button>

      </div>
    `;
    menuList.appendChild(card);
  });
}
loadMenu('burger');
function buyFood(food){
  alert('You selected ' + food);
}
