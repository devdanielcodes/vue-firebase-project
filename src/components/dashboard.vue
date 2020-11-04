<template>
    <div id="dash">
        <h1>Dassh</h1>
        <ul class="collection with-header">
            <li class="collection-header">
                <h5>Employess</h5>
            </li>
            
                <li v-for="(employee, index) in employees" :key="index" class="collection-item">
                    <div class="chip">{{employee.dept}}</div>
                    {{employee.em_id}} : {{employee.name}}

                    <router-link class="secondary-content" :to="{name: 'view', params: {employee_id: employee.name}}">view</router-link>
                </li>
            
            <div class="collection-item" v-if="loading"><h5>loading..</h5></div>

        </ul>
        <div class="fixed-action-btn">
            <router-link to="/new" class="b btn-floating btn-larger red">
            +
            </router-link>
        </div>
    </div>
</template>

<script>
import { db } from '@/firebase/firebaseInit'
import { reactive, toRefs } from 'vue'
    export default {
        setup(){
            const state = reactive({
                employees: [],
                neww: null,
                loading: true
            })

            db.collection('employees').orderBy('employee_id').get().then(
                response => {
                    response.forEach( data => {
                        const doc = {
                            id: data.id,
                            name: data.data().name,
                            em_id: data.data().employee_id,
                            dept: data.data().department
                        }

                        state.employees.push(doc)
                        state.loading = false
                    })
                }
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