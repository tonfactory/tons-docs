---
sidebar_position: 4
---

# Config

## tons-interactive

To set up your config using **tons-interactive** interface just go to **Config** menu from the main menu of the
application.

<video controls width="100%" height="auto">
  <source src="https://tonfactory.github.io/tons-docs/vid/tons-interactive-config.mov" type="video/mp4" />
</video>

#### YubiKey

To set up your YubiKey device go to **Config** > **Yubikey** menu and follow the instructions.

<video controls width="100%" height="auto">
  <source src="https://tonfactory.github.io/tons-docs/vid/tons-interactive-config-yubikey.mov" type="video/mp4" />
</video>


## tons

Every time **tons** reads settings in the way where a next config alters previous one

1. *global*: `~/.config/tons/`
2. *local*: `./.tons/`
   *Note: to init tons locally run 'tons init' command*
3. *env*: `export TONS_CONFIG_PATH=~/your/own/path/.tons/`

All config.yaml parameters

| Name                                  | Description                                                                                                 |
|:--------------------------------------|:------------------------------------------------------------------------------------------------------------|
| tons.workdir                          | directory where whitelist and keystores are stored                                                          |
| tons.keystore_name                    | name of the keystore a person wants to use in tons                                                          |
| tons.provider                         | provider to access the TON blockchain                                                                       |
| tons.default_wallet_version           | the version that will be used by default during tons wallet create cmd                                      |
| tons.warn_if_outdated                 | every start checks whether there is a new version of tons application                                       |
| tons.sort_whitelist                   | show sorted list of whitelist contacts                                                                      |
| tons.sort_keystore                    | show sorted list of wallet in keystore                                                                      |
| provider.dapp.api_key                 | api key for the dapp (can be retrieved in the [tontech bot](https://t.me/tontech_dapp_bot))                 |
| provider.dapp.testnet_api_key         | api key for the dapp (can be retrieved in the [tontech testnet bot](https://t.me/tontech_dapp_testnet_bot)) |
| provider.dapp.network                 | TON network to use (mainnet/testnet)                                                                        |
| dns.max_expiring_in                   | months until dns record will be expired. It is used in "DNS > Refresh all" cmd                              |
| dns.refresh_send_amount               | amount to send to refresh dns ownership                                                                     |
| dns.refresh_not_yet_owned_send_amount | amount to send to refresh dns ownership of the not taken dns record                                         |
| jetton.gas_amount                     | fees amount in TON coins to send during jetton transfers                                                    |


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
tons config --network testnet
```

Set value of a parameter

```bash
tons config --global tons.keystore_name myKeystore2
```

Unset value of a parameter

```bash
tons config --local tons.keystore_name --unset
```

Get value of a parameter

```bash
$ tons config tons.keystore_name
dev.keystore
```

#### YubiKey

The best way to set up your device is by using tons-interactive > **Config** > **YubiKey**.

But you can also run [ykman](https://docs.yubico.com/software/yubikey/tools/ykman/webdocs.pdf) package.

For example, to generate a private key in the required slot run:
```bash
$ ykman piv keys generate 0x87 - -m ${YOUR_MANAGEMENT_KEY} -P ${YOUR_PIN} --pin-policy ONCE --touch-policy ALWAYS -a RSA2048
```

_IMPORTANT: slot id 0x87, pin-policy ONCE and key type RSA2048 are required._