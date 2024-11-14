import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import EtherumService from '../services/EtherumService';
import { WidthFull } from '@mui/icons-material';

const Transfer: React.FC = () => {

    const [walletAddress, setWalletAddress] = useState('');
    const [walletPrivateKey, setWalletPrivateKey] = useState('');

    const fetchData = () => {
        EtherumService.createWallet()
            .then(response => {
                console.log(response);
                setWalletAddress(response.address);
                setWalletPrivateKey(response.privateKey);
            })
    }
    return <>
        <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '50ch', marginTop: '30px' } }}
            noValidate
            autoComplete="off">
            <h3>Create Wallet:</h3>

            <Button
                variant="outlined"
                onClick={fetchData}>Create New Wallet</Button>
            <TextField id="outlined-basic"
                label="Wallet Address"
                variant="outlined"
                value={walletAddress}
            />
            <TextField id="outlined-basic"
                label="Wallet Private Key"
                variant="outlined"
                className='WidthFull'
                value={walletPrivateKey}
            />
        </Box >
        <br/>
        <hr/>
        <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '50ch', marginTop: '30px' } }}
            noValidate
            autoComplete="off">
            <h3>Create Wallet:</h3>

            <Button
                variant="outlined"
                onClick={fetchData}>Create New Wallet</Button>
            <TextField id="outlined-basic"
                label="Wallet Address"
                variant="outlined"
                value={walletAddress}
            />
            <TextField id="outlined-basic"
                label="Wallet Private Key"
                variant="outlined"
                className='WidthFull'
                value={walletPrivateKey}
            />
        </Box >
    </>;
};

export default Transfer;
