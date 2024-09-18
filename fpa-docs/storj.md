# storj的静态网站托管

网站主要托管在storj上，相比于oss或者s3，storj的价格比较便宜。使用人数尚未到达需要cf R2的地步，顺便尝试一下新东西，所以托管在storj的全球服务器上。

## 分享特定目录

```bash
./uplink.exe share --dns <hostname> sj://<bucket>/<prefix> --tls --not-after=none

./uplink.exe share --dns docs.friesport.ac.cn sj://fpa-website --tls --not-after=none
```

