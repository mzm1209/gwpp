import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;

public class ValidateStatic {
    public static void main(String[] args) throws IOException {
        Path root = Path.of(args.length > 0 ? args[0] : ".").toAbsolutePath().normalize();
        for (String relative : List.of("index.html", "src/main.js", "src/styles.css", "tools/StaticServer.java")) {
            Path file = root.resolve(relative);
            require(Files.isRegularFile(file), "Missing file: " + relative);
            require(!Files.readString(file, StandardCharsets.UTF_8).trim().isEmpty(), "Empty file: " + relative);
        }

        String index = Files.readString(root.resolve("index.html"), StandardCharsets.UTF_8);
        require(index.contains("src/styles.css"), "index.html must load src/styles.css");
        require(index.contains("src/main.js"), "index.html must load src/main.js");

        String js = Files.readString(root.resolve("src/main.js"), StandardCharsets.UTF_8);
        for (String page : List.of("list", "create", "profile", "results", "detail", "export")) {
            require(js.contains(page + ": ()"), "Missing page renderer: " + page);
        }
        for (String keyword : List.of("人工确认", "岗位画像", "培养建议", "导出", "匹配分")) {
            require(js.contains(keyword), "Missing required keyword: " + keyword);
        }
        require(js.contains("Array.isArray(rows)"), "table helper must accept array and pre-rendered row strings");
        require(js.contains("String(rows ?? '')"), "table helper must safely render empty row content");

        String server = Files.readString(root.resolve("tools/StaticServer.java"), StandardCharsets.UTF_8);
        require(server.contains("HttpServer.create"), "StaticServer must use Java HttpServer");
        require(!server.contains("python3"), "StaticServer must not rely on Python");

        System.out.println("Static prototype files validated with Java");
    }

    private static void require(boolean condition, String message) {
        if (!condition) {
            throw new IllegalStateException(message);
        }
    }
}
