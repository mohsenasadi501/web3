import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import EtherumService from '../services/EtherumService';
import { WidthFull } from '@mui/icons-material';

const Transfer: React.FC = () => {

    const [walletAddress, setWalletAddress] = useState('');
    const [walletPrivateKey, setWalletPrivateKey] = useState('');

    const [sourceWalletAddress, setSourceWalletAddress] = useState('');
    const [sourcePrivateKey, setSourcePrivateKey] = useState('');
    const [destinationAddress, setDestinationAddress] = useState('');
    const [amount, setAmount] = useState('');

    const fetchData = () => {
        EtherumService.createWallet()
            .then(response => {
                console.log(response);
                setWalletAddress(response.address);
                setWalletPrivateKey(response.privateKey);
            })
    }
    const transfer = () => {
        EtherumService.TransferWallet(sourceWalletAddress, destinationAddress, sourcePrivateKey, amount)
            .then(response => {
                console.log(response);
                setWalletAddress(response.address);
                setWalletPrivateKey(response.privateKey);
            })
    }
    const destinationAddressChange = (event: any) => {
        setDestinationAddress(event.target.value);
    };
    const sourcePrivateKeyChange = (event: any) => {
        setSourcePrivateKey(event.target.value);
    };
    const sourceWalletAddressChange = (event: any) => {
        setSourceWalletAddress(event.target.value);
    };
    const amountChnage = (event: any) => {
        setAmount(event.target.value);
    };

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
        <br />
        <hr />
        <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '50ch', marginTop: '30px' } }}
            noValidate
            autoComplete="off">
            <h3>Create Wallet:</h3>

            <TextField id="outlined-basic"
                label="Source Wallet Address"
                variant="outlined"
                onChange={sourceWalletAddressChange}
                value={sourceWalletAddress}
            />
            <TextField id="outlined-basic"
                label="Source Private Key"
                variant="outlined"
                className='WidthFull'
                onChange={sourcePrivateKeyChange}
                value={sourcePrivateKey}
            />
            <TextField id="outlined-basic"
                label="Desctination Address"
                variant="outlined"
                onChange={destinationAddressChange}
                className='WidthFull'
                value={destinationAddress}
            />
            <TextField id="outlined-basic"
                label="Amount"
                variant="outlined"
                onChange={amountChnage}
                className='WidthFull'
                type='number'
                value={amount}
            />
            <Button
                variant="outlined"
                onClick={transfer}>Transfer</Button>
        </Box >
    </>;
};

export default Transfer;
