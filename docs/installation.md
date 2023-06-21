---
sidebar_position: 2
---

# Installation

* [Non-developers](#non-developers)
* [Developers](#developers)


## Non-developers

As a non-developer, you should use **tons-intecractive** version.


### Mac OS

Start a terminal application and enter the following command.

```bash
$ sh -c "$(curl -sSfL https://raw.githubusercontent.com/tonfactory/temp_tons_install/master/install)"
```

To run **tons-interactive** enter 'tons-interactive' in the terminal

```bash
$ tons-interactive
[?] Pick command: Keystores
 > Keystores
   Whitelist
   Config
   Exit
```


## Developers

**tons** is a python package. Use pip (python package manager) to install it

```bash
$ mkdir ~/my-ton-workdir/ && cd ~/my-ton-workdir/
$ python3 -m venv venv
$ source venv/bin/activate
$ pip install tons
```