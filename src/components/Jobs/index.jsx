import React, {useEffect} from 'react';
import {JOBS} from "../../modules/apis/endpoints";
import api from "../../modules/apis/api";

const Jobs = () => {
    useEffect(async () => {
        const response = await api.fetch(JOBS)
        console.log(response, 'response')
    }, [])

    return (
        <div>
            Jobs page
        </div>
    );
};

export default Jobs;
