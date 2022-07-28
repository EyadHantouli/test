import { useEffect, useState } from "react";

const Fetch = () => {
    const [article, setArticle] = useState([]);

    useEffect (() => {
        fetch('http://127.0.0.1:8000/api/items/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then (resp => resp.json())
        .then ((resp) => {setArticle(resp)})
        .catch (error => console.log(error))
    }, []);

    return (
        <div className="App">
            {article.map( (e) => {
                return (
                    <p key={'api'+e.id}>{e.word}</p>
                );
            })}
        </div>
    );
};

export default Fetch;