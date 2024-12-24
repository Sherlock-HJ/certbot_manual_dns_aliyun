# certbot_manual_dns_aliyun
```使用certbot  --manual --manual-auth-hook 获取HTTPS证书```

#### 原因：certbot 升级导致[certbot-dns-aliyun](https://github.com/tengattack/certbot-dns-aliyun?tab=readme-ov-file)插件不能用了，作者也未按certbot[官方要求](https://community.letsencrypt.org/t/certbot-3-0-could-have-potential-third-party-snap-breakages/226940)升级


#### 解决方法：使用 certbot的[--manual](https://eff-certbot.readthedocs.io/en/latest/using.html#manual)方式更新dns解析记录。

#### 使用方法：
0. 安装certbot, nodejs
0. git clone https://github.com/Sherlock-HJ/certbot_manual_dns_aliyun
0. cd certbot_manual_dns_aliyun
0. npm install
0. 创建`credentials.ini`文件放阿里云的密钥，格式[看这里](https://github.com/tengattack/certbot-dns-aliyun?tab=readme-ov-file#credentials-file)
0. 创建`domains.txt`文件，将域名列表放入
0. 执行`sh run.sh --dry-run` 测试下是否能成功
0. 若成功，执行`sh run.sh`


#### 运行环境：`macos15.0.1  brew install certbot`

#### 用到的资料：
- [安装certbot](https://www.jianshu.com/p/32e110a27d3d)
- [安装nodejs](https://nodejs.org/zh-cn)
- [阿里云typescriptSDK](https://api.aliyun.com/api-tools/sdk/Alidns?version=2015-01-09&language=typescript-tea&tab=primer-doc)
- [阿里云接口文档-添加解析记录](https://help.aliyun.com/zh/dns/api-alidns-2015-01-09-adddomainrecord?spm=a2c4g.11186623.help-menu-29697.d_0_5_1_3_3_0.7dc9690cBTbNje)
- [阿里云接口文档-删除解析记录](https://help.aliyun.com/zh/dns/api-alidns-2015-01-09-deletedomainrecord?spm=a2c4g.11186623.help-menu-29697.d_0_5_1_3_3_1.4d0c690cOqjwYS)