---
sidebar_position: 2
---

# Installation

## Download and Installation

The simplest way to install **tons** is to go to the [releases page](https://github.com/tonfactory/tons-releases/releases) 
and download the latest version. 

Download an installer that suits your OS, install the application and double click the executable file.

You will see the main menu
```bash
[?] Pick command: Keystores
 > Keystores
   Whitelist
   Config
   Exit
```


## For Developers

**tons** is a python package. All UIs are included in the same package. 

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
