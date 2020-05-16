import Axios from 'axios';
import {PatientResponse} from '../Model'

export const patientService = {
    getAllPatients
};

function getAllPatients(doctorId : number) {
    return Axios.get(`https://localhost:44380/api/patients/${doctorId}`)
        .then((response) => {
            
            let patient : PatientResponse[] = [...response.data];
            return patient
        })
        .catch(error => {
            if  (error.response.status === 404){ // NotFound response
                
            }
        })
}