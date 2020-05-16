import { patientConstants } from '../constants'
import { patientService } from '../../Services'
import { PatientResponse } from '../../Model'
import { Dispatch } from 'redux'

export const patientActions =  {
    getAllPatients,
}

function getAllPatients(DoctorId : number){
    return (dispatch : Dispatch) => {
        dispatch(request(true))
        patientService.getAllPatients(DoctorId).then(
            (patientList ) =>{
                dispatch(success(patientList))
            }
        )
    }

    function request (payload : boolean){
        return {type : patientConstants.PATIENT_GET_REQUEST, payload}
    }

    function success (payload : PatientResponse[] | void){
        return { type : patientConstants.PATIENT_GET_SUCCESS, payload }
    }
}