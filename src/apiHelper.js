import http from 'axios';

export const getReposForUser=(userName)=>{
    return http.get(`https://api.github.com/users/${userName}/repos`)
        .then((res) => {
            console.log(`in axios:${res}`);
            return res.data;
        })
        .catch((err)=>{
            console.log(`Returning error: ${err}`)
            return err;
        })
};


