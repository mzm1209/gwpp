# 岗位匹配智能体一期原型

这是一个纯静态原型，使用 Java 自带的轻量 HTTP Server 在本地展示，不依赖 Python，也不需要安装前端依赖。

## 环境要求

- JDK 17+（需要 `javac` 和 `java` 命令）
- 浏览器

## 本地运行展示

在项目根目录执行：

```bash
javac tools/StaticServer.java
java -cp tools StaticServer 4173 .
```

启动后浏览器访问：

```text
http://127.0.0.1:4173/
```

如果本机安装了 npm，也可以使用同样基于 Java 的脚本：

```bash
npm start
```

停止服务：在终端按 `Ctrl+C`。

## 本地检查

```bash
javac tools/StaticServer.java tools/ValidateStatic.java
java -cp tools ValidateStatic .
```

或：

```bash
npm run check
```
