import { patientConstants } from '../constants'
import { PatientModule, PatientReducerType } from '../../Model'

const initialState : PatientModule = {
    isSelectingPatients : false,
    PatientsList : [{
            Name : "",
            Surname : "",
            Email : "",
            Birthdate : new Date(),
            MedicalDescription : "",
            PatientId : 0,
            ProfilePicturePath : ""
        }
    ]
}

export function AllPatientsData (state : PatientModule = initialState, action : PatientReducerType) {
    switch (action.type){
        case patientConstants.PATIENT_GET_REQUEST: 
            return {
                ...state,
                isSelectingPatients : true,
            }

        case patientConstants.PATIENT_GET_SUCCESS: 
            return {
                ...state,
                isSelectingPatients : false,
                PatientsList : action.payload
            }
        default:
            return state;
    }
}