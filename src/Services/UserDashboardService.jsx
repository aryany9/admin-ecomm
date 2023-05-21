import axios from 'axios';
import FromApi from '../Utilities/FromApi';

// Fetch all the users
export function getUsers(config, callback, errorcallback) {
    FromApi.get('/auth/users', config)
        .then(res => {
            // do something
            res = res.data.data
            if (callback != null) {
                callback(res);
            }
        })
        .catch(err => {
            // catch error
            if (errorcallback != null) {
                errorcallback(err);
            }
        });
}