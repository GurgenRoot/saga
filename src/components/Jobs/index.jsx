import React, {useEffect} from 'react';
import {JOBS} from "../../modules/apis/endpoints";
import api from "../../modules/apis/api";
import {useDispatch, useSelector} from "react-redux";
import {apiActions} from "../../modules/apis/actions";

const Jobs = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        return async () => {
            try {
                dispatch(apiActions.fetch(JOBS))
                const res = await api.fetch(JOBS)
                dispatch(apiActions.fetchSuccess(JOBS, res))
            } catch (e) {
                dispatch(apiActions.fetchFailure(JOBS, e))
            }
        }
    }, [])

    const state = useSelector(store => store.api[JOBS])

    console.log(state, 'state')

    return (
        <div>
            Jobs page
        </div>
    );
};

export default Jobs;
