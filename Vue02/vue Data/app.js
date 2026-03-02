const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      // fullname: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },

    // name(value) {
    //   if (value === "") {
    //     this.fullname;
    //   } else {
    //     this.fullname = value + " " + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === "") {
    //     this.fullname;
    //   } else {
    //     this.fullname = this.name + " " + value;
    //   }
    // },
    // fullName(value) {
    //   if (value === "") {
    //     this.fullname;
    //   } else {
    //     this.fullname = value + " " + value;
    //   }
    // },
  },
  computed: {
    fullname() {
      if (this.name === "" || this.lastName === "") {
        return " ";
      }
      return this.name + " " + this.lastName;
    },
  },
  methods: {
    outputFullname() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Maina";
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
//we did: v-model
//We did computed properties
