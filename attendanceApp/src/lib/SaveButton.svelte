<script>
    import { students } from "../stores";

    export let currentStream;
    export let currentClass;
    export let currentWeek;

    let AttemptSave = () => {
        let success = true;
        let unmarkedStudents = [];

        $students.forEach(student => {
            if(student.PreferredStream === currentStream) { //Only need to check if students in current stream are marked off
                if(student.Attendance[currentWeek][currentClass] === 'U') { //If student is unmarked for this class
                    success = false;     
                    unmarkedStudents.push(student);            
                }
            }
        });
        
        if(success) SaveSuccess();
        else saveFail(unmarkedStudents); 
    }

    let SaveSuccess = () => {
        alert("Roll submitted!")
    }

    let saveFail = (unmarkedStudents) => {
        let unmarkedList = "";
        unmarkedStudents.forEach(student => {
            unmarkedList += `${student.firstName} (${student.studentID})\n`
        });

        alert(`Failed to submit roll, ensure you've marked everyone in stream ${currentStream}\n${unmarkedList}Are unmarked`)
    }   
</script>

<button on:click={() => {AttemptSave()}}>
    Submit
</button>

<style>
    :root {
        margin: 0px;
    }

    button {
        background-color: greenyellow;
    }
</style>