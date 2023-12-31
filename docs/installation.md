---
sidebar_position: 2
---

# Installation

## Download and Installation

The simplest way to install **tons** is to go to the [releases page](https://github.com/tonfactory/tons-releases/releases) 
and download the latest version. 

Download an installer that suits your OS, install the application and double click the executable file.

## Obtain API keys

Go to the telegram bot: [@tontech_dapp_bot](https://t.me/tontech_dapp_bot) 
(or [@tontech_dapp_testnet_bot](https://t.me/tontech_dapp_testnet_bot) for testnet) 
and get your API key.

Copy and paste the key inside `Config > API key` menu.

## For Developers

**tons** is a python package. All UIs (tons, tons-interactive, tons-gui) are included in the same package. 

Use pip (python package manager) to install it
```bash
$ mkdir ~/my-ton-workdir/ && cd ~/my-ton-workdir/
$ python3 -m venv venv
$ source venv/bin/activate
$ python3 -m pip install --upgrade pip
$ pip install tons
$ tons-interactive
[?] Pick command: Keystores
 > Keystores
   Whitelist
   Config
   Exit
```


## Update


If you use an executable file, just download newer version from the [releases page](https://github.com/tonfactory/tons-releases/releases) and replace current one.

For developers, to update tons with pip, run the following command
```bash
$ pip install -U tons 
```
