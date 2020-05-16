import React, { useEffect } from 'react';
import { HomeRender } from './HomeRender'


// We import the materials to work with redux
import { Dispatch } from 'redux'
import { patientActions } from '../../GlobalState/actions'
import { useSelector, ConnectedProps, connect } from 'react-redux'
import { ReduxRootState } from '../../Model'

const mapStateToProps = (state : ReduxRootState) =>(
    {
        DoctorId : state.Authentication.User.UserId
    }
)

const mapDispatchToProps = (dispatch : Dispatch)=> {
    return {
        getAllPatients : (doctorId : number) => patientActions.getAllPatients(doctorId)(dispatch)
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

//Home Smart component
const HomeContainer = (props : PropsFromRedux) => {
    const DoctorId = props.DoctorId
    let [patienList, isLoadingPatients ] = useSelector((state : ReduxRootState) => ([state.AllPatientsData?.PatientsList, state.AllPatientsData?.isSelectingPatients]))
    
    const [userName] = useSelector((state : ReduxRootState) => {
        return [state.Authentication.User.Name + " " + state.Authentication.User.Surname]
    })

    console.log(isLoadingPatients)
    useEffect(() => {
        props.getAllPatients(DoctorId);
    })

    return (
        // if (isLoadingPatients) {
        //     return <h1>Cargando</h1>
        // }else{
             <HomeRender 
                title = {userName} 
                patientList =  {patienList}
            />)
        // }
    
}
const ConnectedComponent = connector(HomeContainer)
export { ConnectedComponent as HomeContainer }