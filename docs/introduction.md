---
sidebar_position: 1
slug: /
---

# Introduction

**tons** is an Open Source cross-platform wallet application
and command-line interface to maintain any type of wallet on the TON network
on desktops and servers. Works with Windows/Mac/Linux.

**tons** has different UI versions, thanks to which, any user will find a suitable interface:
- [tons-gui](#tons-gui)
- [tons-interactive](#tons-interactive)
- [tons](#tons)


**tons** uses specific filesystem architecture that is maintained by the application.
```
.tons
├── config.yaml
├── whitelist.json
├── keystores
│   ├── *.keystore
```

Read more about architecture entities: [Config](/config), [Keystore](/keystore), [Whitelist](/whitelist).



## User interfaces

### tons-gui

The most convenient Graphic User Interface version to work with your assets.

![tons-gui](/img/gui/introduction.png) 


### tons-interactive

*tons-interactive* is a convenient interface to control your assets through terminal.

```bash
$ tons-interactive
[✓] Pick command: Keystores
[✓] Pick command: Open keystore
[✓] Choose keystore to use: 🔒 personal.keystore
[?] Pick command [personal.keystore]: List wallets
 > List wallets
   Transfer
   Advanced Transfer
   Whitelist
   Tonconnect v2
   DNS
   Jetton
   ...
```


### tons

*tons* is a batch mode interface that allows you to write automatic scripts.

To get all available subcommands and flags run a command with an '-h' flag
```bash
$ tons -h
Usage: tons [OPTIONS] COMMAND [ARGS]...

Options:
  --version      Show the version and exit.
  -c, --config   Use specific config.yaml file
  -h, --help     Show this message and exit.

Commands:
  config      Control config parameters (check README.md for all fields...
  contract    Operate with contracts
  dev         Development tools
  dns         Operate with DNS
  init        Initialize .tons workdir in a current directory
  keystore    Operate with keystores
  tonconnect  Operate with TonConnect
  wallet      Operate with wallets
  whitelist   Operate with whitelist contacts
```

Example: get list of all wallets from a keystore
```bash
$ tons wallet list -v
| Name  | Version | WC |                     Address                      | Comment | State  | Balance |
|:------|:-------:|:--:|:------------------------------------------------:|:--------|:------:|--------:|
| dev   |   v3r2  | 0  | EQBxWbjry61lk0dU_8viG9M_e5x9VGOJaI9ZhOrn6vcIp7Sm | None    | Active |    13.1 |
| prod  |   v4r2  | 0  | EQCkNipaz2C3Md-tXVBcD3E4yv8EKqMzZ41QQtsM4IdFnKP5 | None    | Uninit |     0.0 |
| Total |         |    |                                                  |         |        |    13.1 |
```
