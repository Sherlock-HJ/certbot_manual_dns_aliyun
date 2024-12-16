// This file is auto-generated, don't edit it
// 依赖的模块可通过下载工程中的模块依赖文件或右上角的获取 SDK 依赖信息查看
import Alidns20150109, * as $Alidns20150109 from '@alicloud/alidns20150109';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import path from 'path';
import fs from 'fs';
import ini from 'ini';

const currentDir = process.cwd();
const filePath = path.join(currentDir, 'credentials.ini');
const fileContent = fs.readFileSync(filePath, 'utf-8');
// 解析 ini 文件
const config = ini.parse(fileContent);

const ALIBABA_CLOUD_ACCESS_KEY_ID = config['dns_aliyun_access_key'];
const ALIBABA_CLOUD_ACCESS_KEY_SECRET = config['dns_aliyun_access_key_secret'];
const CERTBOT_AUTH_OUTPUT = process.env['CERTBOT_AUTH_OUTPUT'];
const CERTBOT_DOMAIN = process.env['CERTBOT_DOMAIN'];

export default class Client {

  /**
   * @remarks
   * 使用AK&SK初始化账号Client
   * @returns Client
   * 
   * @throws Exception
   */
  static createClient(): Alidns20150109 {
    // 工程代码泄露可能会导致 AccessKey 泄露，并威胁账号下所有资源的安全性。以下代码示例仅供参考。
    // 建议使用更安全的 STS 方式，更多鉴权访问方式请参见：https://help.aliyun.com/document_detail/378664.html。
    let config = new $OpenApi.Config({
      // 必填，请确保代码运行环境设置了环境变量 ALIBABA_CLOUD_ACCESS_KEY_ID。
      accessKeyId: ALIBABA_CLOUD_ACCESS_KEY_ID,
      // 必填，请确保代码运行环境设置了环境变量 ALIBABA_CLOUD_ACCESS_KEY_SECRET。
      accessKeySecret: ALIBABA_CLOUD_ACCESS_KEY_SECRET,
    });
    // Endpoint 请参考 https://api.aliyun.com/product/Alidns
    config.endpoint = `alidns.cn-hangzhou.aliyuncs.com`;
    return new Alidns20150109(config);
  }
  

  static async main(args: string[]): Promise<void> {
    let client = Client.createClient();
    
    let deleteDomainRecordRequest = new $Alidns20150109.DeleteDomainRecordRequest({
        recordId: CERTBOT_AUTH_OUTPUT,
    });

    try {
      // 复制代码运行请自行打印 API 的返回值
      let resp = await client.deleteDomainRecord(deleteDomainRecordRequest);
      console.log(resp.statusCode === 200);
      
    } catch (error) {
      // let error = error as $tea.Error;
      // 此处仅做打印展示，请谨慎对待异常处理，在工程项目中切勿直接忽略异常。
      // 错误 message
      console.log(error);
      // 诊断地址
      // console.log(error.data["Recommend"]);
      
    }    
  }

}


async function DeleteSubDomainRecords() {
  let client = Client.createClient();

  let deleteSubDomainRecordsRequest = new $Alidns20150109.DeleteSubDomainRecordsRequest({
    domainName: CERTBOT_DOMAIN,
    RR: "_acme-challenge",
    type: "TXT",
  });
  await client.deleteSubDomainRecords(deleteSubDomainRecordsRequest);
}

Client.main(process.argv.slice(2));
