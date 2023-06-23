---
sidebar_position: 4
---

# Config

**tons** uses the following file structure:

```
.tons
├── config.yaml
├── whitelist.json
├── keystores
│   ├── *.keystore
```

Every time **tons** reads settings in the way where a next config alters previous one

1. *global*: `~/.config/tons/`
2. *local*: `./..N/.tons/` (where N {0, inf} any number of subdirectories)
*Note: to init tons locally run 'tons init' command*
3. *env*: `export TONS_CONFIG_PATH=~/your/own/path/.tons/`

All config.yaml parameters

| Name                        | Description                                                 |
|:----------------------------|:------------------------------------------------------------|
| tons.workdir                | directory where whitelist and keystores are stored          |
| tons.keystore_name          | name of the keystore a person wants to use                  |
| tons.provider               | provider to access the TON blockchain                       |
| tons.default_wallet_version | the version that will be used during tons wallet create cmd |
| tons.warn_if_outdated       | every run checks whether there is a new version of tons pkg |
| provider.dapp.api_key       | api key for the dapp (TODO: type bot's name)                |
| provider.dapp.network       | TON network to use (mainnet/testnet)                        |

List parameters of all configs (global/local/env)
```bash
$ tons config --list
...
~/local/path/.tons/config.yaml  tons.keystore_name=dev.keystore
...
~/.config/.tons/config.yaml tons.keystore_name=global.keystore
```

List all values of final altered config
```bash
$ tons config --current-setup
tons.workdir=/Users/username/.config/.tons
tons.keystore_name=dev.keystore
tons.provider=dapp
tons.default_wallet_version=v3r2
tons.warn_if_outdated=True
provider.dapp.api_key=YOUR_API_KEY
provider.dapp.network=testnet
```

Change the network
```bash
$ tons config --network testnet
```

Set value of a parameter
```bash
$ tons config --global tons.keystore_name myKeystore2
```

Unset value of a parameter
```bash
$ tons config --local tons.keystore_name --unset
```

Get value of a parameter
```bash
$ tons config tons.keystore_name
dev.keystore
```