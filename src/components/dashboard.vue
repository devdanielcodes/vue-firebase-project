<template>
    <div id="dash">
        <h1>Dassh</h1>
        <ul>
            <li v-for="item in employee" :key="item.employee_id">
                {{item.name}}
            </li>
        </ul>
        <h1>{{employee.name}}</h1>
        <div class="fixed-action-btn">
            <router-link to="/new" class="b btn-floating btn-larger red">
            +
            </router-link>
        </div>
    </div>
</template>

<script>
import db from "@/firebase/firebase"
import { reactive, toRefs } from 'vue'
    export default {
        setup(){
            const state = reactive({
                employee: [],
                neww: null
            })


            db.collection('employees').get().then(
                employees =>  employees.forEach(response => {
                    console.log(response.data)
                    state.employee = response.data()
                })
            )

            return{
                ...toRefs(state)
            }
        }
        
    }
</script>

<style scoped>
.b{
    text-align: center;
    font-size: 20px;
}
</style>