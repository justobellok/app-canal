import "./style/novedad.css"
import { useState } from "react";

const novedades = [
    { id: 1, title: 'COVID-19 Vaccination Drive Expands', source: 'BBC', date: '2024-02-18' },
    { id: 2, title: 'New Climate Change Agreement Reached', source: 'CNN', date: '2024-02-17' },
    { id: 3, title: 'SpaceX Launches New Satellite', source: 'Space.com', date: '2024-02-16' },
    { id: 4, title: 'SpaceX Launches New Satellite', source: 'Space.com', date: '2024-02-15' },
    { id: 5, title: 'SpaceX Launches New Satellite', source: 'Space.com', date: '2024-02-14' },
    { id: 1, title: 'COVID-19 Vaccination Drive Expands', source: 'BBC', date: '2024-02-18' },
    { id: 2, title: 'New Climate Change Agreement Reached', source: 'CNN', date: '2024-02-17' },
    { id: 3, title: 'SpaceX Launches New Satellite', source: 'Space.com', date: '2024-02-16' },
    { id: 4, title: 'SpaceX Launches New Satellite', source: 'Space.com', date: '2024-02-15' },
    { id: 5, title: 'SpaceX Launches New Satellite', source: 'Space.com', date: '2024-02-14' },
    { id: 1, title: 'COVID-19 Vaccination Drive Expands', source: 'BBC', date: '2024-02-18' },
    { id: 2, title: 'New Climate Change Agreement Reached', source: 'CNN', date: '2024-02-17' },
    { id: 3, title: 'SpaceX Launches New Satellite', source: 'Space.com', date: '2024-02-16' },
    { id: 4, title: 'SpaceX Launches New Satellite', source: 'Space.com', date: '2024-02-15' },
    { id: 5, title: 'SpaceX Launches New Satellite', source: 'Space.com', date: '2024-02-14' },

]

const pageSize = 4;

const Novedades = () => {

    const [page, setPage] = useState(1);


    
    const start = (page - 1) * pageSize;
    const end = page * pageSize;
    const current = novedades.slice(start, end)
    
    const totalPage = Math.ceil(novedades.length / pageSize)
    
    
    const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
}
    return ( 
        <section className="N-container">
        <h1>novedades</h1>
  <div className="N-content">
    {current.map((novedad, index) => (
        <div className="novedad" key={index}>
            <h3>{novedad.title}</h3>
            <p>{novedad.source}</p>
            <p>{novedad.date}</p>
        </div>
    ))}
    {
        totalPage > 1 &&
        <div className="pagination">
            <button onClick={() => handlePageChange(page - 1)}>Anterior</button>
            <button onClick={() => handlePageChange(page + 1)}>Siguiente</button>
        </div>
    }
  </div>
        
        </section>
     );
}
 
export default Novedades;