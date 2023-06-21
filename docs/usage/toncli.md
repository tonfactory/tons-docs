---
sidebar_position: 8
---

# toncli

[toncli](https://github.com/disintar/toncli) uses deploy wallet with the following params:
- version v3r2
- subwallet-id 0
- workchain 0

First a developer should create a tons wallet
```bash
$ tons wallet create toncli-deployer -v v3r2 -w 0 -id 0 --save-to-whitelist toncli-deployer
```

Then get the path of toncli deploy wallet
```bash
$ python
>>> from appdirs import user_config_dir
>>> import os
>>> user_config_dir("toncli")  # output may be different
/Users/username/Library/Application Support/toncli
>>> os.path.join(user_config_dir("toncli"), "wallet", "build")  # output may be different
/Users/username/Library/Application Support/toncli/wallet/build
```

Finally, replace toncli default wallet with the tons one
```bash
$ tons wallet to-addr-pk toncli-deployer '/Users/username/Library/Application Support/toncli/wallet/build'
$ cd '/Users/username/Library/Application Support/toncli/wallet/build'
$ mv contract.pk backup_old.pk && mv contract.addr backup_old.addr
$ mv toncli-deployer.pk contract.pk && mv toncli-deployer.addr contract.addr
```
