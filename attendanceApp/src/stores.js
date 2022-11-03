import { writable } from "svelte/store";

/*
Attendace Codes:
 O - online
 A - absent
 N - not required
 L - late
 P - present
 E - explained
 S - sick
*/

export const currentStudent = writable();

let studentList = [
    {
        studentID: 1000000000,
        firstName: 'Student',
        lastName: 'McStudent',
        PreferredStream: '0',
        Attendance: [
            ['P', 'L'],
            ['S', 'N'],
            ['O', 'E'],
            ['P', 'P']
        ]
    },
    {
        studentID: 1000000001,
        firstName: 'Good',
        lastName: 'AStudent',
        PreferredStream: '0',
        Attendance: [
            ['P', 'P'],
            ['P', 'P'],
            ['P', 'P'],
            ['P', 'P']
        ]
    },
    {
        studentID: 1000000002,
        firstName: 'Bad',
        lastName: 'BStudent',
        PreferredStream: '0',
        Attendance: [
            ['A', 'A'],
            ['L', 'A'],
            ['P', 'A'],
            ['A', 'L']
        ]
    },
    {
        studentID: 1000000003,
        firstName: 'Sick',
        lastName: 'CStudent',
        PreferredStream: '0',
        Attendance: [
            ['S', 'S'],
            ['O', 'P'],
            ['O', 'S'],
            ['S', 'L']
        ]
    }
]