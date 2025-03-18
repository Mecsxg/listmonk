# 使用 Golang 构建 Listmonk
FROM golang:1.20 AS builder

# 设置工作目录
WORKDIR /app
COPY . .

# 编译 Listmonk
RUN go build -o listmonk

# 运行环境：Alpine Linux
FROM alpine:latest

# 安装依赖
RUN apk --no-cache add ca-certificates tzdata shadow su-exec

# 设置工作目录
WORKDIR /listmonk

# 复制编译后的二进制文件
COPY --from=builder /app/listmonk .
COPY config.toml.sample config.toml

# 复制 entrypoint 脚本
COPY docker-entrypoint.sh /usr/local/bin/

# 赋予执行权限
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# 暴露应用端口
EXPOSE 9000

# 设置 entrypoint
ENTRYPOINT ["docker-entrypoint.sh"]

# 运行 Listmonk
CMD ["./listmonk"]
