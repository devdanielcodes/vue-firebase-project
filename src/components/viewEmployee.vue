<template>
    <div>
        <h1>Employee</h1>
        <h2>{{ route.params.employee_id }}</h2>
    </div>
</template>

<script>
import { reactive, toRef } from 'vue'
import { useRoute } from 'vue-router'
export default{
    setup(){
        const state =  reactive({
            em_id: null,
            name: null,
            dept: null,
            role: null,
        })

        const route = useRoute()
        return{
            ...toRef(state),
            route
        }
    }
}
</script>

<style scoped>

</style>