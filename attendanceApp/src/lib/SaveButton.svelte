<script>
    import { students } from "../stores";

    export let currentStream;
    export let currentClass;
    export let currentWeek;

    let AttemptSave = () => {
        let success = true;

        $students.forEach(student => {
            if(student.PreferredStream === currentStream) { //Only need to check if students in current stream are marked off
                if(student.Attendance[currentWeek][currentClass] === 'U') { //If student is unmarked for this class
                    success = false;                 
                }
            }
        });
        
        if(success) SaveSuccess();
        else saveFail(); 
    }

    let SaveSuccess = () => {
        alert("Roll saved and submitted!")
    }

    let saveFail = (message) => {
        alert(`Failed to submit roll, ensure you've marked everyone in stream ${currentStream}`)
    }   
</script>

<button on:click={() => {AttemptSave()}}>
    Save
</button>

<style>
    :root {
        margin: 0px;
    }

    button {
        background-color: greenyellow;
    }
</style>