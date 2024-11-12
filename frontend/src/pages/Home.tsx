import React, { useEffect, useState } from 'react';
import EtherumService from '../services/EtherumService'
import { Button, Box, TextField } from '@mui/material';

const Home: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [walletAddress, setWalletAddress] = useState('');
    const [responseValue, setResponseValue] = useState('Mohsen Asadi');
    const [walletBalanceValue, setWalletBalanceValue] = useState('0');

    const handleChange = (event: any) => {
        setInputValue(event.target.value);
    };

    const handleWalletAddressChange = (event: any) => {
        setWalletAddress(event.target.value);
    };

    const fetchData = () => {
        EtherumService.read(inputValue)
            .then(response => {
                console.log(response);
                setResponseValue(`The name is: ${response.name} and the symbol is: ${response.symbol}`);
            })
    }
    const fetchWalletBalance = () => {
        EtherumService.read(walletAddress)
            .then(response => {
                setResponseValue(`The balance is: ${response}`);
            })
    }

    return (<>
        <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '50ch', marginTop: '30px' } }}
            noValidate
            autoComplete="off">
            <h3>Smart Contarct Details:</h3>
            <TextField id="outlined-basic"
                label="Contarct Address"
                variant="outlined"
                value={inputValue}
                required
                onChange={handleChange} />
            <Button
                variant="outlined"
                onClick={fetchData}>Fetch Data</Button>
            <div>{responseValue}</div>
        </Box >
        <br />
        <hr />
        <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '50ch', marginTop: '30px' } }}
            noValidate
            autoComplete="off">
            <h3>Wallet Address Balance:</h3>
            <TextField id="outlined-basic"
                label="Wallet Address"
                variant="outlined"
                value={walletAddress}
                required
                onChange={handleWalletAddressChange} />
            <Button
                variant="outlined"
                onClick={fetchWalletBalance}>Get Balance</Button>
            <div>{walletBalanceValue}</div>
        </Box >
    </>

    );
}
export default Home;