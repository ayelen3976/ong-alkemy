import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import NewsTableRow from './NewsTableRow';
import TitleTable from './TitleTable';
import './styles.css'

const ListNews = props => {

const [lista, setLista] = React.useState([])       

React.useEffect(() => {
    obtenerDatos()
}, [lista])

const baseUrl = process.env.REACT_APP_API_URL;

const url = `${baseUrl}/news`;

const obtenerDatos = async () => {
    const data = await fetch(url)
    const lista = await data.json()
    setLista(lista)
}
    const[toEdit, setToEdit] = useState(false)
    return (
        <Table className="table-list" striped bordered hover size="sm">
            <TitleTable />
            <tbody>
                {lista.map(item => {
                    return <NewsTableRow 
                                news={item}
                            />
                })}
            </tbody>
        </Table>
    );
}

export default ListNews;