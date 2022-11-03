
<script>
    import { each } from "svelte/internal";
    import { currentStudent, students } from "../stores";

    let open = true;
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
               Stream A 
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
                    <tr>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td>{student.lastName}</td>
                        <td class="AttendanceQuickView">{student.Attendance[0]}</td>
                    </tr>
                {/each}
            </tbody>
        </table>
    {/if}



</section>

<style>
    .StudentList {
        background-color: lightblue;
        text-align: left;
        width: 25vw;
    }
    table {
        border-spacing: 20px 5px;
    }

    header {
        display: flex;
        flex-direction: row;
    }

    .HeaderItem{
        margin-right: 25%;
    }
</style>