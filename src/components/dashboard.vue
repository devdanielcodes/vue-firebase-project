<template>
    <div id="dash">
        <h1>Dassh</h1>
        <ul class="collection with-header">
            <li class="collection-header">
                <h5>Employess</h5>
            </li>
            <router-link to="/profile/id">
                <li v-for="(employee, index) in employees" :key="index" class="collection-item">
                    {{employee.name}} -  {{employee.em_id}}
                </li>
            </router-link>
            
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

            db.collection('employees').get().then(
                response => {
                    response.forEach( data => {
                        const doc = {
                            id: data.id,
                            name: data.data().name,
                            em_id: data.data().employee_id
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