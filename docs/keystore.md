---
sidebar_position: 5
---

# Keystore


## How it works?

Keystore is encrypted by a user's password or a Yubikey. 
There are several options to work with a password:
1. Runs a command and enter it through input
```bash
$ tons keystore new
Password []: 
```
2. Runs a command with a --password flag
```bash
$ tons keystore new --password admin123
Password []: 
```
3. Set up environment variable TONS_KEYSTORE_PASSWORD
```bash
$ export TONS_KEYSTORE_PASSWORD=admin123
$ tons keystore new
```

To work with a Yubikey you must set it up using the following steps:
1. turn on PIV interface on your yubikey (you may use [yubikey manager](https://www.yubico.com/support/download/yubikey-manager/))
2. generate new key pair on the required slot. Consider using this command:
```bash
$ ykman piv keys generate 0x87 - -m ${YOUR_MANAGEMENT_KEY} -P ${YOUR_PIN} --pin-policy ONCE --touch-policy ALWAYS -a RSA2048
```
This command will:
- use your yubikey secrets. If you haven't set them up, [see docs](https://docs.yubico.com/yesdk/users-manual/application-piv/pin-puk-mgmt-key.html).
- generate RSA2048(required) keys in the 0x87 slot(required).
- set policies to the new key. You may change --touch-policy, but we recommend to use ALWAYS. 
The option --pin-policy ONCE is required by the tons. 
You can read about policies [here](https://docs.yubico.com/yesdk/users-manual/application-piv/pin-touch-policies.html).

## tons-interactive

List all keystores in a tons.workdir
```bash
$ tons keystore list
dev.keystore
test.keystore
```

Create a new keystore
```bash
$ tons keystore new myNewKeystore
Password []: 
```

Backup a keystore (password is used to export private keys)
```bash
$ tons keystore backup myNewKeystore ./myNewKeystore.backup
Password []: 
```

## tons

Restore a keystore (password is used for a new keystore)
```bash
$ tons keystore restore keystoreFromBackup ./myOldKeystore.backup
Password []: 

# to restore keystore from ton-cli's keystore add flag --from-ton-cli
$ tons keystore restore keystoreFromBackup ./ton-cli.backup --from-ton-cli
Password []: 
```
