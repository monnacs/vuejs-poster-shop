// Variables in caps are usually constants;
var PRICE = 9.99;

new Vue({
  el: '#app',
  data: {
    total: 0,
    items: [
      { id: 1, title: 'Item 1' },
      { id: 2, title: 'Item 2' },
      { id: 3, title: 'Item 3' }
    ],
    cart: [],
    search: ''
  },
  methods: {
    addItem: function(index) {
      this.total += PRICE;
      var item = this.items[index];
      var found = false;

      for (var i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id === item.id) {
          found = true;
          this.cart[i].quantity++;
          break;
        }
      }

      if(!found) {
        this.cart.push({
          id: item.id,
          title: item.title,
          quantity: 1,
          price: PRICE
        });
      }
    },
    inc: function(item) {
      item.quantity++;
      this.total += PRICE;
    },
    dec: function(item) {
      item.quantity--;
      this.total -= PRICE;

      if (item.quantity <= 0) {
        for (var i = 0; i < this.cart.length; i++) {
          if (this.cart[i].id === item.id) {
            this.cart.splice(i, 1);
            break;
          }
        }
      }
    },
    onSubmit: function() {
      console.log(this.search);
    }
  },
  filters: {
    currency: function(price) {
      //toFixed fixes decimals to a certain number
      return 'R$ '.concat(price.toFixed(2));
    }
  }
});
