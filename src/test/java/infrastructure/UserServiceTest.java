package infrastructure;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class UserServiceTest {

    private UserService userService = new UserService();

    @Test
    void testLoginwithExistingUsername() {
        String token = "";

        try {
            token = userService.login("arfaz.feroz@gmail.com");
        } catch (Exception e) {
            e.getMessage();
        }

        Assertions.assertNotEquals("" ,token);
    }

    @Test
    void testLoginWithUnknownUsername() {
        String token = "";

        try {
            token = userService.login("john.smith@gmail.com");
        } catch (Exception e) {
            e.getMessage();
        }

        Assertions.assertEquals("" ,token);
    }
}
