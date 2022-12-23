const app = Vue.createApp({
  data() {
    return {
      enteredGoal: '',
      goals: [],
      listIsVisible: true,
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoal);
    },
    listToggle() {
      this.listIsVisible = !this.listIsVisible;
    }
  }
});

app.mount('#user-goals');
