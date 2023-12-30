const Blockchain = require('./blockchain');


const bitcoin = new Blockchain();            //Instance of our Blockchain

const bc1 = {
    "chain": [
    {
    "index": 1,
    "timestamp": 1628449405908,
    "transaction": [],
    "nonce": 100,
    "hash": "0",
    "previousBlockHash": "0"
    },
    {
    "index": 2,
    "timestamp": 1628449405935,
    "transaction": [],
    "nonce": 4445,
    "hash": "00004d8agap9a65psfa854we65re5te6t06d05550538abda05",
    "previousBlockHash": "0"
    },
    {
    "index": 3,
    "timestamp": 1628449405997,
    "transaction": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipent": "1baae2de21884e08aef873454e222bb5",
    "transactionId": "c0c824d4afaa4c0388efc0dd70e20c48"
    },
    {
    "amount": 1000,
    "sender": "GeneratedTransactionthroughpostman",
    "recipent": "li997f7339a8336446b94d52c8ce4144d26",
    "transactionId": "97f7339a8336446b94d52c8ce4144d26"
    }
    ],
    "nonce": 82347,
    "hash": "00005faf8a59f56523161sfsa355d1a6sfrc40fd4sg",
    "previousBlockHash": "00004d8ad45f295699das97b8cb86949998f0f796d978906d05fdasf9asfda05"
    }
    ],
    "pendingTransactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipent": "f52e2de6sadfasef873fhdf454e226161",
    "transactionId": "lm876f8yty201fs4aff6545afasfa18fd12sa20fg2j2"
    }
    ],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": []
    };

    console.log(bitcoin.chainIsValid(bc1.chain));
