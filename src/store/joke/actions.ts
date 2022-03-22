import axios from 'axios';
import { AppDispatch } from '../store';
import { jokeSlice } from './jokeSlice';
import { IJoke } from '../../models/IJoke';

export const getJoke = () => async (dispatch: AppDispatch) => {
    dispatch(jokeSlice.actions.jokeGetting());

    try {
        const { data } = await axios.get<IJoke>('https://api.chucknorris.io/jokes/random');
        dispatch(jokeSlice.actions.jokeGettingSuccess(data));
    } catch (e) {
        dispatch(jokeSlice.actions.jokeGettingFailure());
    }
};

export const changeAutoload = (value: boolean) => (dispatch: AppDispatch) => {
    dispatch(jokeSlice.actions.setAutoload(value));
};
