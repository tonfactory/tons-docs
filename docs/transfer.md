---
sidebar_position: 8
---

# Transfer

To transfer TON coins from a wallet to the whitelist contact use transfer command.

## tons-gui

Simple transfer TON coins

![tons-gui](/img/gui/transfer_simple.png) 

Or extra transfer options for advanced users

![tons-gui](/img/gui/transfer_advanced.png) 

## tons-interactive

1. **Transfer** TON coins with unencrypted message (**0:00**)
2. **Advanced transfer** TON coins with encrypted message (**1:07**)

<video controls width="100%" height="auto">
  <source src="https://tonfactory.github.io/tons-docs/vid/tons-interactive-transfer.mov" type="video/mp4" />
</video>

## tons

Transfer coins from a wallet to the whitelist contact

Minimal required arguments
```bash
tons wallet transfer myMainWallet myFriend 0.1
```

All parameters
```bash
tons wallet transfer myMain myFriend 10 \
        --message "Happy Birthday!" \
        --encrypt-message n \
        --wait \
        --bounceable n \
        --pay-gas-separately y \
        --ignore-errors n \
        --destroy-if-zero n \
        --transfer-all n \
        --body ./filepath/body.boc \ 
        --state-init ./filepath/state_init.boc
```
