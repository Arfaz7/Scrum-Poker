package infrastructure;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class UserService {

    public String login(String username) throws Exception {
        return UUID.randomUUID().toString();
    }
}
