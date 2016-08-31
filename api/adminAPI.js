import Axios from 'axios';
const STATUS_OK = 200;

export function getCategories(callback){
    Axios.get('/api/categories').then(function(response){
        
            if(response && response.status === STATUS_OK){
                return callback( response.data);
            }
        }).catch(function (err) {
            console.log(err);
            alert('something went wrong, try after some time' );
        });
};

export function addCategory(newCategory){
    Axios.post('/api/addprodcat', {categoryName : newCategory}).then(function(response){
            if(response && response.status === STATUS_OK){
            }
            else {
                alert('Error');
            }
        }).catch(function (err) {
            console.log(err);
            alert('something went wrong, try after some time' );
        });
};

export function getAllProducts(callback){
    Axios.get('/api/products').then(function(response){
            if(response && response.status === STATUS_OK){
                return callback( response.data);
            }
        }).catch(function (err) {
            console.log(err);
            alert('something went wrong, try after some time' );
        });
};

export function addProduct(product, callback){
    Axios.post('/api/addProduct', product).then(function(response){
        if(response && response.status === STATUS_OK){
            callback();
            }
            else {
                alert('Error');
            }
    }).catch(function (err) {
            console.log(err);
            alert('something went wrong, try after some time' );
    });
};

export function deleteProduct(id, callback) {
    Axios.delete('/api/deleteProduct/' + id).then(function(response){
        if(response && response.status === STATUS_OK){
            callback();
        }
        else {
            console.log('error');
        }
    });
}