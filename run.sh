# 解析参数并输出
for arg in "$@"
do
    echo "参数: $arg"
done

# 读取 domains.txt 并将域名转换为逗号分隔的格式
DOMAINS=""
while IFS= read -r domain || [ -n "$domain" ]; do
  # 跳过空行和只包含空白字符的行
  domain=$(echo "$domain" | xargs)  # 去除首尾空白字符
  if [ -n "$domain" ]; then
    if [ -z "$DOMAINS" ]; then
      DOMAINS="$domain"
    else
      DOMAINS="$DOMAINS,$domain"
    fi
  fi
done < domains.txt

echo "DOMAINS: $DOMAINS"

certbot certonly  $arg \
--config-dir ./config \
--work-dir ./work \
--logs-dir ./logs \
--manual \
--preferred-challenges=dns \
--manual-auth-hook ./manual_auth_hook.sh \
--manual-cleanup-hook ./manual_cleanup_hook.sh \
-d "$DOMAINS"