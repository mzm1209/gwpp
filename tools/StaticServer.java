import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpServer;

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.net.URI;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Locale;

public class StaticServer {
    public static void main(String[] args) throws IOException {
        int port = args.length > 0 ? Integer.parseInt(args[0]) : 4173;
        Path root = Paths.get(args.length > 1 ? args[1] : ".").toAbsolutePath().normalize();
        HttpServer server = HttpServer.create(new InetSocketAddress("0.0.0.0", port), 0);
        server.createContext("/", exchange -> handle(exchange, root));
        server.setExecutor(null);
        server.start();
        System.out.printf("岗位匹配智能体原型已启动：%n  http://127.0.0.1:%d/%n根目录：%s%n按 Ctrl+C 停止服务。%n", port, root);
    }

    private static void handle(HttpExchange exchange, Path root) throws IOException {
        if (!"GET".equals(exchange.getRequestMethod()) && !"HEAD".equals(exchange.getRequestMethod())) {
            send(exchange, 405, "Method Not Allowed", "text/plain; charset=utf-8");
            return;
        }

        Path file = resolveFile(root, exchange.getRequestURI());
        if (file == null || !Files.isRegularFile(file)) {
            send(exchange, 404, "Not Found", "text/plain; charset=utf-8");
            return;
        }

        byte[] bytes = Files.readAllBytes(file);
        exchange.getResponseHeaders().set("Content-Type", contentType(file));
        exchange.getResponseHeaders().set("Cache-Control", "no-cache");
        if ("HEAD".equals(exchange.getRequestMethod())) {
            exchange.sendResponseHeaders(200, -1);
        } else {
            exchange.sendResponseHeaders(200, bytes.length);
            try (OutputStream output = exchange.getResponseBody()) {
                output.write(bytes);
            }
        }
        exchange.close();
    }

    private static Path resolveFile(Path root, URI uri) {
        String requestPath = uri.getPath();
        if (requestPath == null || requestPath.equals("/")) {
            requestPath = "/index.html";
        }
        Path file = root.resolve(requestPath.substring(1)).normalize();
        return file.startsWith(root) ? file : null;
    }

    private static String contentType(Path file) {
        String name = file.getFileName().toString().toLowerCase(Locale.ROOT);
        if (name.endsWith(".html")) return "text/html; charset=utf-8";
        if (name.endsWith(".css")) return "text/css; charset=utf-8";
        if (name.endsWith(".js")) return "text/javascript; charset=utf-8";
        if (name.endsWith(".json")) return "application/json; charset=utf-8";
        if (name.endsWith(".svg")) return "image/svg+xml";
        return "application/octet-stream";
    }

    private static void send(HttpExchange exchange, int status, String message, String contentType) throws IOException {
        byte[] bytes = message.getBytes(StandardCharsets.UTF_8);
        exchange.getResponseHeaders().set("Content-Type", contentType);
        exchange.sendResponseHeaders(status, bytes.length);
        try (OutputStream output = exchange.getResponseBody()) {
            output.write(bytes);
        }
        exchange.close();
    }
}
