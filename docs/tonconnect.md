---
sidebar_position: 11
---

# Tonconnect

**tons** supports [Tonconnect v2 protocol](https://github.com/ton-blockchain/ton-connect).
User can connect/disconnect a wallet to any dapp and confirm transactions.

## tons-interactive

1. Connect wallet to a dapp (**0:00**)
2. Cancel transaction (**0:32**)
3. Confirm transaction (**0:49**)
4. Disconnect the wallet (**1:15**) 

<video controls width="100%" height="auto">
  <source src="https://tonfactory.github.io/tons-docs/vid/tons-interactive-tonconnect.mov" type="video/mp4" />
</video>

## tons

Connect a wallet
```bash
tons tonconnect connect myWallet COPIED_BASE64_PAYLOAD
```

List connections
```bash
$ tons tonconnect list
|    Wallet   |        Connected at        | Dapp Name |                 Dapp Url                 |                          Dapp Client Id                          |
|:-----------:|:--------------------------:|:---------:|:----------------------------------------:|:----------------------------------------------------------------:|
|   myWallet  | 2023-06-26 14:40:31.838090 | Demo Dapp | https://ton-connect.github.io/demo-dapp/ | 3329b835c95ea84cc841dfdca5eff9b8178c7221fe8174736c5cee59a3df9201 |
```

Handle new request
```bash
tons tonconnect handle-queued-request myWallet 3329b835c95ea84cc841dfdca5eff9b8178c7221fe8174736c5cee59a3df9201
```

Disconnect the wallet

```bash
tons tonconnect disconnect myWallet 3329b835c95ea84cc841dfdca5eff9b8178c7221fe8174736c5cee59a3df9201
```
