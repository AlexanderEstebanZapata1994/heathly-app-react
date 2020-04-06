export interface IData {
    username:string,
    password : string
}

export interface IProps  {
    userForm : IData,
    setUser : React.Dispatch<React.SetStateAction<IData>>,
    handleOnSubmit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}