---
sidebar_position: 7
---

# Development
A person can deploy smart-contracts using tons and [tonsdk](https://github.com/tonfactory/tonsdk). 
There are three options: send-boc, send-internal and send-external.

Send internal allows a user to send any internal message using any of their wallets
```bash
$ tons dev send-internal ./scripts/deploy.py deploy_through_internal MY_WALLET_NAME 0.1 --wait
```
```python
# ./scripts/deploy.py example. 
# Function must receive WalletContract and  return (str, Optional[Cell], Optional[Cell]) values.

from typing import Optional

from tonsdk.contract.wallet import WalletContract
from tonsdk.boc import Cell
from tonsdk.contract.token.ft import JettonMinter


def deploy_through_internal(wallet: WalletContract) -> (str, Optional[Cell], Optional[Cell]):
    minter = JettonMinter(admin_address=wallet.address,
                          jetton_content_uri="URL",
                          jetton_wallet_code_hex='CODE')

    return minter.address.to_string(), minter.create_state_init()["state_init"], None
```

Send external allows a user to create an external message using tonsdk and send it to the TON blockchain
```bash
$ tons dev send-external ./scripts/deploy.py deploy_through_external --wait
```
```python
# ./scripts/deploy.py example. 
# Function must receive nothing and return (str, Cell) values.
from tonsdk.contract.wallet import WalletContract, WalletVersionEnum, Wallets
from tonsdk.boc import Cell


def deploy_through_external() -> (str, Cell):
    wallet_workchain = 0
    wallet_version = WalletVersionEnum.v3r2
    wallet_mnemonics = "YOUR 24 ... WORDS".split(" ")

    _mnemonics, _pub_k, _priv_k, wallet = Wallets.from_mnemonics(
        wallet_mnemonics, wallet_version, wallet_workchain)
    return wallet.address.to_string(), wallet.create_init_external_message()["message"]
```

*Note: to deploy a wallet one can use '$ tons wallet init WALLET_NAME'*

Send boc allows to send a .boc file to the TON blockchain
```bash
$ tons dev send-boc ./generated-through-fif.boc --wait
```

### integrations
Example of automatic salary payment, you may use cron to run pay_salary.sh

```bash
$ cat employee.info
employee1 EQDvtizebIVTGYASXgjYX5sHfkGLW8aFTa7wfYCyARIpARB0 10
employee2 EQA-Ri7Oftdjq--NJmuJrFJ1YqxYk6t2K3xIFKw3syhIUgUe 20
employee3 EQCNLRRZkvoqAW6zwYyy_BVwOBcMnwqvyrSpm8WnACdzXuu3 15.5

$ cat pay_salary.sh
cd ~/team_workspace/ton/
source venv/bin/activate
tons config tons.keystore_name myKeystore

input="./employees.info"
while IFS= read -r line
do
    stringarray=($line)
    name=${stringarray[0]}
    addr=${stringarray[1]}
    salary=${stringarray[2]}

    tons wallet transfer salaryWallet $name $salary --wait
done < "$input"
```
