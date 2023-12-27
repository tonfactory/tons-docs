---
sidebar_position: 5
---

# Keystore


## How it works?

*keystore* - is a file encrypted by a user's secret.
It is used to store private keys from user's wallets.


There are different versions of keystore which have different workflow:
- [Password](#password-type-keystore)
- [YubiKey](#yubikey-type-keystore)

## Password type keystore

Password type keystores encrypt only sensitive part of your data (e.g. wallet secret key). 
Public information are stored unencrypted (e.g. wallet address).


### tons-gui

![tons-gui](/img/gui/keystore.png) 

### tons-interactive


1. **Open** keystore (**0:00**) <br />
2. **Create** keystore (**0:16**) <br />
3. **Backup** keystore (**0:42**) <br /> 
4. **Restore** keystore (**1:23**)


<video controls width="100%" height="auto">
  <source src="https://tonfactory.github.io/tons-docs/vid/tons-interactive-keystores.mov" type="video/mp4" />
</video>



### tons


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


List all keystores in a tons.workdir folder
```bash
$ tons keystore list
dev.keystore
test.keystore
```

Create a new keystore
```bash
tons keystore new myNewKeystore --password MY_SECRET
```

Backup a keystore (password is used to export private keys)
```bash
tons keystore backup myNewKeystore ./myNewKeystore.backup --password MY_SECRET
```


Restore a keystore (password is used for a new keystore)
```bash
$ tons keystore restore keystoreFromBackup ./myOldKeystore.backup
Password []: 

# to restore keystore from ton-cli's keystore add flag --from-ton-cli
$ tons keystore restore keystoreFromBackup ./ton-cli.backup --from-ton-cli
Password []: 
```


## Yubikey type keystore

YubiKey type keystores encrypt sensitive data, e.g. wallet secrets, with a private key that is stored on your device.
Moreover, non-sensitive data, e.g. wallet address, is also encrypted by AES algorithm.

#### What is a YubiKey device?

The YubiKey is a hardware authentication device manufactured by Yubico to protect access to computers, networks, 
and online services that supports one-time passwords, public-key cryptography, and authentication.


You can buy the device on the [official website](https://www.yubico.com/us/store/).

> **IMPORTANT**! tons requirements for a YubiKey device:
- Multi-protocol support
- Firmware version > 4.3.0

[Example](https://www.yubico.com/us/product/yubikey-5-series/yubikey-5-nfc/) of the device that satisfies the requirements. 


To set up your device, read the instructions on the [Config page](/config#yubikey).



### tons-interactive


1. **Create** keystore (**0:00**) <br />
2. Touch YubiKey every time it starts blinking (when TOUCH_POLICY is set to ALWAYS) (**0:15**, **0:35**) <br /> 
3. Other commands are the same as for password keystore, but requires YubiKey touch (if set to ALWAYS).


<video controls width="100%" height="auto">
  <source src="https://tonfactory.github.io/tons-docs/vid/tons-interactive-yubikey-keystore.mov" type="video/mp4" />
</video>


### tons

Create new yubikey keystore
```bash
tons keystore new myNewYubiKeystore --keystore-type yubikey --pin MY_SECRET
```

Other commands are the same as for simple password keystore. But instead of --password you should use --pin option.
