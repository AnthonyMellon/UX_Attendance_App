
<script>
    import { each, loop_guard } from "svelte/internal";
    import { currentStudent, students } from "../stores";

    let open = false;
    let i;
    let reset = () => {i = 0; console.log(i); return ""};
    let incriment = () => {i++; console.log(i); return i;}

    let currentClass = 0;

    export let currentStream;
    export let listStream;

    if(currentStream === listStream) open = true; //Default to only show students for current classes stream

</script>

<section class="StudentList">
    
    <header>
        <button class="HeaderItem" on:click={() => open = !open}>
            {#if open}
            V
            {:else}
            >
            {/if}
            </button>
            <h2 class="HeaderItem">
               Stream {listStream} 
            </h2>
    </header>
    {#if open}
        <table>
            <thead>                
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Student ID</th>
                    <th>Attendance</th> 
                </tr>
            </thead>
            <tbody>
                {#each $students as student}
                    {#if student.PreferredStream === listStream}
                    <tr>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td>{student.studentID}</td>
                        <td class="AttendanceQuickView">
                            {reset()}                             
                            {#each student.Attendance[0] as mark}                                                                                                                                 
                                {`Class ${incriment()}`} 
                                <select name ="marks" id ="marks">
                                    <option value="O">Online</option>
                                    <option value="A">Absent</option>
                                    <option value="N">Not Required</option>
                                    <option value="L">Late</option>
                                    <option value="P">Present</option>
                                    <option value="E">Exaplined</option>
                                    <option value="S">Sick</option>                                    
                                </select>  
                                                                                                                 
                            {/each}
                        </td>
                    </tr>
                    {/if} 
                {/each}
            </tbody>
        </table>
    {/if}



</section>

<style>
    .StudentList {
        background-color: rgb(192, 213, 219);
        text-align: left;
        width: 50vw;
        border: black;
        border-style: solid;
        border-width: 1px;
    }
    table {
        border-spacing: 20px 5px;        
    }

    header {
        display: flex;
        flex-direction: row;
        background-color: rgb(104, 116, 121);
        color: white;
    }

    .HeaderItem{
        margin-right: 25%;
    }

    .AttendanceQuickView{
        display: flex;
        flex-direction: row;
    }
</style>