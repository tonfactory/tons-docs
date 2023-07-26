---
sidebar_position: 6
---
# Whitelist

*whitelist* - is a file that stores all user's contacts.
User have to use it to transfer coins from their wallets to other addresses. 
Whitelist feature eliminates risk of transfer user's assets to the wrong address.


There are two types of whitelist: 
- **Global whitelist** - contacts are stored in a global whitelist.json file and can be used from any keystore
- **Local whitelist** - contacts are stored in a keystore file and can be used only in that keystore

## tons-interactive

1. **Create new** contacts in the global whitelist (**0:00**) <br />
2. **Move** contact (**1:08**) <br />
3. Difference between **wallets** / **local contacts** / **global contacts** in the **Transfer** command (**1:48**)


<video controls width="100%" height="auto">
  <source src="https://tonfactory.github.io/tons-docs/vid/tons-interactive-whitelist.mov" type="video/mp4" />
</video>



## tons


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
tons whitelist add myFriend EQC96BhaxqhdK-pwvcBudu-WCtjBFMjPbAqoL7qMKc6rd2U2
```

Edit contact
```bash
tons whitelist edit myFriend --name myBestFriend --address EQBP5aEPlmFNr4eS3DJw2ydC4X_hOumwZoqCcJgHVSQHjZWW
```

Delete contact
```bash
tons whitelist delete myFriend
```

Get address info of a contact
```bash
$ tons whitelist get myFriend
Raw address: 0:4fe5a10f96614daf8792dc3270db2742e17fe13ae9b0668a827098075524078d
Nonbounceable address: UQBP5aEPlmFNr4eS3DJw2ydC4X_hOumwZoqCcJgHVSQHjchT
Bounceable address: EQBP5aEPlmFNr4eS3DJw2ydC4X_hOumwZoqCcJgHVSQHjZWW
```
