
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
