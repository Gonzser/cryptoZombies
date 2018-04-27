{
	"jsonrpc":"2.0",
	"method":"eth_sendTransaction",
		"params":
		[{"from":"0xb60e8dd61c5d32be8058bb8eb970870f07233155",
		  "to":"0xd46e8dd67c5d32be8058bb8eb970870f07244567",
		  "gas":"0x76c0",
		  "gasPrice":"0x9184e72a000",
		  "value":"0x9184e72a",
		  "data":"0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"}],
		"id":1
}

CryptoZombies.methods.createRandomZombie("Vitalik Nakamoto 🤔")
  .send({ from: "0xb60e8dd61c5d32be8058bb8eb970870f07233155", gas: "3000000" })

<script language="javascript" type="text/javascript" src="web3.min.js"></script>

You can set up Web3 to use Infura as your web3 provider as follows:

var web3 = new Web3(new Web3.providers.WebsocketProvider("wss://mainnet.infura.io/ws"));