export interface IData {
    user : {
        username : string,
        password : string
    },
    wasSubmitted : boolean
}

export interface IProps  {
    userForm : IData,
    setUser : React.Dispatch<React.SetStateAction<IData>>,
    handleOnSubmit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}