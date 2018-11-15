import client from './elastic-search-connection';

client.cluster.health({}, (error, res, status) => {
    console.log('-- Client Health --', res);
    console.log('status', status);
    console.log('error', error);
});