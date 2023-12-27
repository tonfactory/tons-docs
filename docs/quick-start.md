---
sidebar_position: 2
---


# Quick start

## tons-gui

<video controls width="100%" height="auto">
  <source src="https://tonfactory.github.io/tons-docs/vid/tons-gui-quick-start.mov" type="video/mp4" />
</video>

## tons-interactive

1. Create new keystore (**0:00**) <br />
2. Import existing wallet from mnemonics (**0:24**) <br />
3. Add whitelist contact (**1:07**) <br /> 
4. Transfer TON coins (**1:36**)


<video controls width="100%" height="auto">
  <source src="https://tonfactory.github.io/tons-docs/vid/tons-interactive-quick-start.mov" type="video/mp4" />
</video>

## tons
[OPTIONAL] Create .tons folder in the current directory, otherwise it will use global directory (see [Config](/config) for more details)

```bash
tons init
```

Create a keystore
```bash
tons keystore new myFirstKeystore --password MY_SECRET
```

Set it as a current keystore
```bash
tons config tons.keystore_name myFirstKeystore
```

Import existing wallet from mnemonics (you can find your wallet version in you application settings. Usually it is v4r2)
```bash
tons wallet import-from-mnemonics pocketMoney v4r2 0 "YOUR MNEMONIC WORDS HERE" --save-to-whitelist myPocketMoney
```

You can check that it has been create by the list command
```bash
tons wallet list
```
```bash
| Name        | Version | WC |                     Address                      | Comment | State  | Balance |
|:------------|:-------:|:--:|:------------------------------------------------:|:--------|:------:|--------:|
| pocketMoney |   v3r2  | 0  | EQCHt-689LLEeFw2hkOT8ZNE8dmuMJeTcnISScGujIk-Sx2W | None    | Active |     1.0 |
| Total       |         |    |                                                  |         |        |     1.0 |
```

Add a whitelist contact
```
tons whitelist add myBestFriend EQAqJuYmOYI_0C23atgYhQOcL4IHznWbCwUY0u4KOU3yRVEm
```

Transfer coins from the wallet to the contact

```
tons wallet transfer pocketMoney myBestFriend 0.1 --message "Happy birthday!" --wait
```
