import React ,{useState}from 'react'
import StatusConnection from './status-connection'

function StatusConnectionConteiner(){
    const [connection, changeConnection] = useState(true)

    return(<StatusConnection connection = {connection}/>)}
export default StatusConnectionConteiner