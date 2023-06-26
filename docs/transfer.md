---
sidebar_position: 8
---

# Transfer

To transfer TON coins from a wallet to the whitelist contact use transfer command.

## tons-interactive

1. Transfer TON coins (**0:00**)

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
        --wait \
        --bounceable n \
        --pay-gas-separately y \
        --ignore-errors n \
        --destroy-if-zero n \
        --transfer-all n
```