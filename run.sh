# 解析参数并输出
for arg in "$@"
do
    echo "参数: $arg"
done

certbot certonly  $arg \
--config-dir ./config \
--work-dir ./work \
--logs-dir ./logs \
--manual \
--preferred-challenges=dns \
--manual-auth-hook ./manual_auth_hook.sh \
--manual-cleanup-hook ./manual_cleanup_hook.sh \
-d $(cat domains.txt)