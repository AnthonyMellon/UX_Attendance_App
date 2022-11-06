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
            ['U', 'U']
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
            ['U', 'U']
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
            ['U', 'U']
        ]
    },
    {
        studentID: 1000000004,
        firstName: 'Random',
        lastName: 'Student',
        PreferredStream: 'B',
        Attendance: [
            ['U', 'U'],
            ['U', 'U'],
            ['U', 'U'],
            ['U', 'U']
        ]
    },
    {
        studentID: 1000000005,
        firstName: 'Stream',
        lastName: 'Ber',
        PreferredStream: 'B',
        Attendance: [
            ['P', 'P'],
            ['P', 'P'],
            ['P', 'P'],
            ['U', 'U']
        ]
    },
    {
        studentID: 1000000006,
        firstName: 'Another',
        lastName: 'Student',
        PreferredStream: 'B',
        Attendance: [
            ['A', 'A'],
            ['L', 'A'],
            ['P', 'A'],
            ['U', 'U']
        ]
    },
    {
        studentID: 1000000007,
        firstName: 'Last',
        lastName: 'One',
        PreferredStream: 'B',
        Attendance: [
            ['S', 'S'],
            ['O', 'P'],
            ['O', 'S'],
            ['U', 'U']
        ]
    },
    {
        studentID: 1000000008,
        firstName: 'Last One',
        lastName: 'For Real This Time',
        PreferredStream: 'B',
        Attendance: [
            ['S', 'S'],
            ['O', 'P'],
            ['O', 'S'],
            ['U', 'U']
        ]
    }
];

export const students = writable(studentList);