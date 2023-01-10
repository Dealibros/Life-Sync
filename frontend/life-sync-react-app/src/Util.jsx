import {useState} from "react";

export default function ApiCall() {
    const [data, setData] = useState([]);

    const fetchApi = (url, methodCall, body) => {
        fetch((url), {
            method: methodCall, headers: {
                'Content-Type': 'application/json',
            }, body: body,
        })
            .then((response) => response.json())
            .then((response) => {
                //consequence
                console.log(response)
                setData(response)
            })
            .catch((error) => {
                console.log('error!', error);
            });
        return (data);
    }




};

