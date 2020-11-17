package infrastructure;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class UserServiceTest {

    private UserService userService = new UserService();

    @Test
    void testLoginwithExistingUsername() {
        String token = "";

        try {
            token = userService.login("");
        } catch (Exception e) {
            e.getMessage();
        }

        Assertions.assertNotEquals("" ,token);
    }
}
