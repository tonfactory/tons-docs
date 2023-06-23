---
sidebar_position: 2
---


# Quick start

Create .tons folder in the current directory

```bash
$ tons init
```

Set TON network

```bash
$ tons config --network testnet
```

Create a keystore and set it as a current keystore

```bash
$ tons keystore new myFirstKeystore
Password []:

$ tons config tons.keystore_name myFirstKeystore
```

Create a wallet

```bash
$ tons wallet create pocketMoney --save-to-whitelist myPocketMoney
```

Add a whitelist contact

```
$ tons whitelist add myBestFriend EQBP5aEPlmFNr4eS3DJw2ydC4X_hOumwZoqCcJgHVSQHjZWW
```

Transfer coins from the wallet to the contact

```
tons wallet transfer pocketMoney myBestFriend 10 --message "Happy birthday!"
```

To get all available subcommands and flags run a command with a '-h' flag

```
$ tons -h
Usage: tons [OPTIONS] COMMAND [ARGS]...

Options:
  --version      Show the version and exit.
  -c, --config   Use specific config.yaml file
  -h, --help     Show this message and exit.

Commands:
  config     Control config parameters (check README.md for all fields info)
  contract   Operate with contracts
  dev        Development tools
  init       Initialize .tons workdir in a current directory
  keystore   Operate with keystores
  wallet     Operate with wallets
  whitelist  Operate with whitelist contacts

$ tons wallet -h
...
```
