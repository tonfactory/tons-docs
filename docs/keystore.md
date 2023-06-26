---
sidebar_position: 5
---

# Keystore


## How it works?

*keystore* - is a file encrypted by a user's secret.
It is used to store private keys from user's wallets.


There are different versions of keystore which have different workflow:
- [Password](#password-type-keystore)

## Password type keystore

Password type keystores encrypt only sensitive part of your data (e.g. wallet secret key). 
Public information are stored unencrypted (e.g. wallet address).



### tons-interactive


1. Create new keystore (**0:00**) <br />
2. Open keystore (**0:13**) <br />
3. Backup keystore (**0:18**) <br /> 
4. Restore keystore (**0:44**)


<video controls width="100%" height="auto">
  <source src="http://localhost:3000/tons-docs/vid/tons-interactive-keystores.mov" type="video/mp4" />
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
