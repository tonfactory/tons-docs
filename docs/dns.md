---
sidebar_position: 9
---

# DNS

**tons** supports TON [DNS standard](https://github.com/ton-blockchain/TEPs/blob/master/text/0081-dns-standard.md).
User can refresh your ownership and get info about all your records in the most convenient way.

## tons-interactive

1. **List** all DNS records (**0:00**)
2. **Refresh a DNS record** ownership (**0:19**)
3. **Set DNS expiration threshold** and **Refresh all** records expiring DNS in N month (**0:57**) 

<video controls width="100%" height="auto">
  <source src="https://tonfactory.github.io/tons-docs/vid/tons-interactive-dns.mov" type="video/mp4" />
</video>

## tons

List all DNS records
```bash
$ tons dns list
|     DNS domain     |    Last fill-up time    | Expires in |                      Owner                       |
|:------------------:|:-----------------------:|:----------:|:------------------------------------------------:|
|   tonfactory.ton   | 2023-06-26 11:00:58 GMT |  365 days  | EQDQhhVr4ip301spczNCBIpo6415k2GQCaw6JQ2ocFCHDsHS |
| tons-tons-tons.ton | 2023-06-26 11:01:11 GMT |  365 days  | EQDQhhVr4ip301spczNCBIpo6415k2GQCaw6JQ2ocFCHDsHS |
|      tons.ton      | 2023-06-26 11:01:22 GMT |  365 days  | EQDQhhVr4ip301spczNCBIpo6415k2GQCaw6JQ2ocFCHDsHS |
```

Refresh specific DNS record
```bash
tons dns refresh --domain tonfactory.ton
```

Refresh all DNS records that are expiring in N month
```bash
tons dns refresh --expiring-soon
```
