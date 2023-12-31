---
sidebar_position: 7
---
# Wallet

Wallet entity is a record in a keystore file that has all required information to interact with a specific TON blockchain smart contract.  


## tons-gui

Create a single wallet

![tons-gui](/img/gui/create_single_wallet.png) 

Or create multiple wallets

![tons-gui](/img/gui/create_multiple_wallets.png) 

Later you can edit and view wallet's information

![tons-gui](/img/gui/edit_wallet.png) 

## tons-interactive

1. **Import wallet** from tonkeeper by mnemonics (**0:00**) <br />
2. **Create batch** of wallets by prefix (**0:32**) <br />
3. **Create batch** of wallets by pattern (**1:05**) <br /> 
4. **Get verbose information** of a wallet (**1:50**)


<video controls width="100%" height="auto">
  <source src="https://tonfactory.github.io/tons-docs/vid/tons-interactive-wallet.mov" type="video/mp4" />
</video>



## tons

Wallets support same CRUD operations
```bash
$ tons wallet create myMain \
        --version v3r2 \
        --workchain 0 \
        --subwallet-id 698983191 \
        --comment "My main secure wallet" \
        --save-to-whitelist myMain

$ tons wallet edit myMain --name myMainOld

$ tons wallet delete myMain
Are you sure you want to delete v2wallet wallet? [y/N]: y

$ tons wallet get myMain
Raw address: 0:4fe5a10f96614daf8792dc3270db2742e17fe13ae9b0668a827098075524078d
Nonbounceable address: UQBP5aEPlmFNr4eS3DJw2ydC4X_hOumwZoqCcJgHVSQHjchT
Bounceable address: EQBP5aEPlmFNr4eS3DJw2ydC4X_hOumwZoqCcJgHVSQHjZWW
Version: v3r2
Workchain: 0
Subwallet id: 698983191
Comment: My main secure wallet
--- Verbose wallet information ---
address: EQBP5aEPlmFNr4eS3DJw2ydC4X_hOumwZoqCcJgHVSQHjZWW
contract_type: None
seqno: 1
state: Active
balance: 0.394748632
last_activity: 2022-10-07 08:58:00
code: te6cckEBAQEAcQAA3v8AIN0gggFMl7ohggEznLqxn3Gw7UTQ0x/THzHXC//jBOCk8mCDCNcYINMf0x/TH/gjE7vyY+1E0NMf0x/T/9FRMrryoVFEuvKiBPkBVBBV+RDyo/gAkyDXSpbTB9QC+wDo0QGkyMsfyx/L/8ntVBC9ba0=
data: te6cckEBAQEAKgAAUAAAAAEpqaMXz1s51azqoYZWn7ZR2NlTfwg7FABigSY991WpcgOjOlg2uqR/
```

List all wallets (can be redirected to .md file)
```bash
$ tons wallet list -v -c nanoton
| Name        | Version | WC |                     Address                      | Comment            | State  |            Balance |
|:------------|:-------:|:--:|:------------------------------------------------:|:-------------------|:------:|-------------------:|
| dev         |   v3r2  | 0  | Eaddraddraddraddraddraddraddraddraddraddraddradd | Development wallet | Active |      182.349713128 |
| masterchain |   v3r2  | -1 | Eaddraddraddraddraddraddraddraddraddraddraddradd | None               | Active |        0.328599221 |
| newTest     |   v3r2  | 0  | Eaddraddraddraddraddraddraddraddraddraddraddradd |                    | Active |        0.095227164 |
| testmsg     |   v3r2  | 0  | Eaddraddraddraddraddraddraddraddraddraddraddradd | None               | Active |        0.394748632 |
| v2wallet    |   v2r2  | -1 | Eaddraddraddraddraddraddraddraddraddraddraddradd | None               | Uninit |                0.0 |
| Total       |         |    |                                                  |                    |        | 183.16828814499996 |

$ tons wallet list -v > wallet_info.md
```

Import wallet from mnemonic
```bash
$ tons wallet import-from-mnemonics importedWallet v4r2 0 "your 24 mnemo ... words" \
         --subwallet-id 698983191 \
         --comment "My imported wallet" \
         --save-to-whitelist myImportedWallet
```

Init wallet (address must have some coins to be initialized)
```bash
$ tons wallet init myMain
```

Reveal a wallet mnemonics
```bash
$ tons wallet reveal myMain
Password []: 
guitar border swap border actor history universe wrist width mask unveil again dentist tilt theory risk electric flash hat sentence essence able dice mammal
```

Export wallet to .addr and .pk files (e.g. to use in toncli development tool)
```bash
$ tons wallet to-addr-pk myMain ./destination/path/
```
