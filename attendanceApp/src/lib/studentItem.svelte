
<script>
    import { each } from "svelte/internal";
    import { currentStudent, students } from "../stores";
</script>

<section class="StudentList">

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

</section>