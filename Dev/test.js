const Blockchain = require('./blockchain');


const bitcoin = new Blockchain();            //Instance of our Blockchain

const bc1 = {
    "chain": [
    {
    "index": 1,
    "timestamp": 1676413657,
    "transaction": [],
    "nonce": 100,
    "hash": "0",
    "previousBlockHash": "0"
    },
    {
    "index": 2,
    "timestamp": 1676413777,
    "transaction": [],
    "nonce": 8896,
    "hash": "00001t8er45f22c6d493db97p9cm01994487f0f796d978906d05550538tusa90",
    "previousBlockHash": "0"
    },
    {
    "index": 3,
    "timestamp": 1676413825,
    "transaction": [
    {
    "amount": 15,
    "sender": "Senderaddressssssssssssss",
    "recipent": "Recipentaddressssssssssssssss",
    "transactionId": "transactionIdddddddddddd"
    },
    {
    "amount": 10,
    "sender": "Senderaddressssssssssssss",
    "recipent": "Recipentaddressssssssssssssss",
    "transactionId": "transactionIdddddddddddd"
    }
    ],
    "nonce": 96972,
    "hash": "00005f076223ef5652316125230fdeadfa41708eccc8138abaaf8c404b9689a9",
    "previousBlockHash": "00001t8er45f22c6d493db97p9cm01994487f0f796d978906d05550538tusa90"
    }
    ],
    "pendingTransactions": [
    {
    "amount": 1.5,
    "sender": "Senderaddressssssssssssss",
    "recipent": "Recipentaddressssssssssssssss",
    "transactionId": "transactionIdddddddddddd"
    }
    ],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": []
    };

    console.log(bitcoin.chainIsValid(bc1.chain));