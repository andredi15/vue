<template>
    <form @submit.prevent="submitData">
        <div>
            <label for="">Username</label>
            <input v-model="enteredName" type="text">
            <label for="">Age</label>
            <input v-model="enteredAge" type="number">
        </div>
        <div>
            <button>Add User</button>
        </div>
    </form>
</template>

<script>

export default {
    emits:['add-user'],
    data() {
        return{
            enteredName: '',
            enteredAge: '',
        }
    },
    methods: {
        submitData() {
            this.$emit('add-user',this.enteredName, this.enteredAge)
        }
    }
}



</script>