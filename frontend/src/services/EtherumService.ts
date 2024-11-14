import axios from 'axios';

class EtherumService {
    async read(_address: string): Promise<any> {
        return axios.post('http://localhost:3000/api/etherum/read', { address: _address })
            .then(response => {
                console.log(response.data);
                return response.data;
            })
            .catch(error => {
                console.error(error);
            });
    }

    async readBalance(_address: string): Promise<any> {
        return axios.get(`http://localhost:3000/api/etherum/balance?address=${_address}`)
            .then(response => {
                console.log(response.data);
                return response.data;
            })
            .catch(error => {
                console.error(error);
            });
    }

    async createWallet(): Promise<any> {
        return axios.get(`http://localhost:3000/api/etherum/wallet/create`)
            .then(response => {
                console.log(response.data);
                return response.data;
            })
            .catch(error => {
                console.error(error);
            });
    }
}
export default new EtherumService();