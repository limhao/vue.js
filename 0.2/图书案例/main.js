const app = new Vue({
  el: '#app',
  data: {
    books: [{
        id: 1,
        name: '算法导论',
        date: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: '编程艺术',
        date: '2006-2',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: '编程珠玑',
        date: '2008-10',
        price: 39.00,
        count: 1
      },
      {
        id: 4,
        name: '代码大全',
        date: '2006-3',
        price: 128.00,
        count: 1
      },
    ],
  },
  methods: {
    delCount(index) {
      if (this.books[index].count === 0) {
        return 0
      }
      return this.books[index].count--
    },
    addCount(index) {
      return this.books[index].count++
    },
    remove(index) {
      return this.books.splice(index, 1)
    }
  },
  computed: {
    totalMoney() {
      let money = 0
      for (let i = 0; i < this.books.length; i++) {
        money += this.books[i].count * this.books[i].price
      }
      return money
    }
  },
  filters: {
    showPrice(price) {
      return '$' + price.toFixed(2)
    },

  }


})