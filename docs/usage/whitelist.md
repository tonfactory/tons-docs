---
sidebar_position: 4
---
# Whitelist

List all contacts with verbose information (can be redirected to .md file)

```bash
$ tons whitelist list --verbose --currency nanoton
| Name            |                     Address                      |  State   |        Balance |
|:----------------|:------------------------------------------------:|:--------:|---------------:|
| My Wallet 01    | EQC96BhaxqhdK-pwvcBudu-WCtjBFMjPbAqoL7qMKc6rd2U2 |  Uninit  |            0.0 |
| My Wallet 02    | EQBP5aEPlmFNr4eS3DJw2ydC4X_hOumwZoqCcJgHVSQHjZWW |  Uninit  |            0.0 |

$ tons whitelist list --verbose > contacts_info.md
```

Add new contact
```bash
$ tons whitelist add myFriend EQC96BhaxqhdK-pwvcBudu-WCtjBFMjPbAqoL7qMKc6rd2U2
```

Edit contact
```bash
$ tons whitelist edit myFriend --name myBestFriend --address EQBP5aEPlmFNr4eS3DJw2ydC4X_hOumwZoqCcJgHVSQHjZWW
```

Delete contact
```bash
$ tons whitelist delete myFriend
```

Get address info of a contact
```bash
$ tons whitelist get myFriend
Raw address: 0:4fe5a10f96614daf8792dc3270db2742e17fe13ae9b0668a827098075524078d
Nonbounceable address: UQBP5aEPlmFNr4eS3DJw2ydC4X_hOumwZoqCcJgHVSQHjchT
Bounceable address: EQBP5aEPlmFNr4eS3DJw2ydC4X_hOumwZoqCcJgHVSQHjZWW
```
