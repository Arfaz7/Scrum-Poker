package infrastructure;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class UserService {

    private List<String> users = new ArrayList<String>() {{
        add("arfaz.feroz@gmail.com");
        add("sparker@seekerscapital.com");
        add("jbcebe@seekerscapital.com");
        add("ywsing@seekerscapital.com");
        add("byeung@seekerscapital.com");
    }};

    public String login(String username) throws Exception {
        if(users.contains(username))
            return UUID.randomUUID().toString();
        else {
            throw new Exception("Unknown user");
        }
    }
}
