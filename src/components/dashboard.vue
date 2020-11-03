<template>
    <div id="dash">
        <h1>Dassh</h1>
        <ul class="collection with-header">
            <li class="collection-header">
                <h5>Employess</h5>
            </li>
            <li v-for="(employee, index) in employees" :key="index" class="collection-item">
                {{employee.name}} -  {{employee.em_id}}
            </li>
        </ul>
        <div class="fixed-action-btn">
            <router-link to="/new" class="b btn-floating btn-larger red">
            +
            </router-link>
        </div>
    </div>
</template>

<script>
import db from "../firebase/firebaseInit"
import { reactive, toRefs } from 'vue'
    export default {
        setup(){
            const state = reactive({
                employees: [],
                neww: null
            })


            db.collection('employees').get().then(
                (snapshot) =>  snapshot.forEach(doc => {
                    const data = {
                        id: doc.id,
                        name: doc.data().name,
                        dept: doc.data().department,
                        em_id: doc.data().employee_id,

                    }
                
                    state.employees.push(data)
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