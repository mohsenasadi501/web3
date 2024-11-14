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

    async TransferWallet(_fromAddress: string, _toAddress: string, _fromPrivateKey: string, _amount: string): Promise<any> {
        return axios.post(`http://localhost:3000/api/etherum/wallet/transfer`,
            {
                fromAddress: _fromAddress,
                fromPrivateKey: _fromPrivateKey,
                toAddress: _toAddress,
                amount: _amount,
            })
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