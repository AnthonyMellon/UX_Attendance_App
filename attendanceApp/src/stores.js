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
 U - Unmarked
*/

export const currentStudent = writable();

let studentList = [
    {
        studentID: 1000000000,
        firstName: 'Student',
        lastName: 'McStudent',
        PreferredStream: 'A',
        Attendance: [
            ['U', 'U'],
            ['U', 'U'],
            ['U', 'U'],
            ['U', 'U']
        ]
    },
    {
        studentID: 1000000001,
        firstName: 'Good',
        lastName: 'AStudent',
        PreferredStream: 'A',
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
        PreferredStream: 'A',
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
        PreferredStream: 'A',
        Attendance: [
            ['S', 'S'],
            ['O', 'P'],
            ['O', 'S'],
            ['S', 'L']
        ]
    }
];

export const students = writable(studentList);