import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Eachone from './Eachone';
function Data() {
    const url = 'https://restcountries.eu/rest/v2/region/asia';
    const [product, setproduct] = useState(null);

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setproduct(response.data)
            })
    }, [url])

    if (product) {
        return (
            <>
                {
                    product.map((items, index) => {
                        return (
                            <div key={index} data-aos="zoom-in" >
                                <Eachone name={items.name} region={items.region} flag={items.flag} population={items.population} capital={items.capital} subregion={items.subregion} language={items.languages} border={items.borders} />
                            </div>
                        )
                    })
                }

            </>
        )
    }
    return (
        <>
            {/* <h1>NOT FOUND/ERROR</h1> */}
        </>
    )
}

export default Data
