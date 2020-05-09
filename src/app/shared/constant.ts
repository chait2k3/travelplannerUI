export const API_URL = 'http://localhost:8080';

export const GET_ALL_FLIGHTS_URL =  'travelplanner/get/flight';
export const CREATE_FLIGHT_URL  =  'travelplanner/create/flight';
export const UPDATE_FLIGHT_URL  =  'travelplanner/update/flight' ;
export const DELETE_FLIGHT_URL  =  'travelplanner/delete/flight';

export const GENDER: Array<any> = [
    { option: 'Male', value: 'Male', checked: false },
    { option: 'Female', value: 'Female', checked: false }
];

export const MARITAL_STATUS: Array<any> = [
    { option: 'Married', value: 'Married', checked: false },
    { option: 'Unmarried', value: 'Unmarried', checked: false }
];

export const YES_NO: Array<any> = [
    { option: 'Yes', value: 'Yes', checked: false },
    { option: 'No', value: 'No', checked: false }
];

export const FOOD_TYPE: Array<any> = [
    { option: 'Veg', value: 'Veg', checked: false },
    { option: 'Non-Veg', value: 'Non-Veg', checked: false },
    { option: 'Vegan', value: 'Vegan', checked: false }
];
