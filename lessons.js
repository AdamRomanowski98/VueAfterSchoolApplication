let webstore = new Vue({
    el: '#app',
    data: {
        sitename: "After School Club",
        product: {
            id: 1,
            subject: "Math",
            location: "Hendon",
            price: 1000,
            image: "img/Math.png",
            availableInventory : 5,
            spaces: 5,
        },
        cart: []
    },
    methods: {
        addToCart: function (){
            this.product.stock = this.product.stock -1;
            this.cart.push(this.product.id);
        },
        showCheckout(){
            this.showProduct = this.showProduct ? false : true;
        },
    },
    computed: {
        cartItemCount: function(){
            return this.cart.length || ' ';
        },
        canAddToCart: function(){
            return this.product.availableInventory > this.cartItemCount;
        }
    }
});