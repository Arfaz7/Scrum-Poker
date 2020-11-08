import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {
        "config.*",
        "domain",
        "infrastructure",
        "interfaces"
})
public class ScrumPoker {
    public static void main(String[] args) {
        SpringApplication.run(ScrumPoker.class, args);
    }
}
