import Axios from 'axios';

export const patientService = {
    getAllPatients
};

function getAllPatients(doctorId : number) {
    return Axios.get(`https://localhost:44380/api/patients/${doctorId}`)
        .then((response: any) => {
            let patient  = {...response.data};
            return patient
        })
}