package interfaces;

import infrastructure.UserService;
import interfaces.dto.UserDto;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value= "/api/v1")
@CrossOrigin("*")
@Api(tags = "story", value= "Methods to log in/log off")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping(value= "/login")
    public ResponseEntity<String> login(@RequestBody @ApiParam(name= "username", required = true) UserDto user) {
        try {
            String token = userService.login(user.getUsername());
            return new ResponseEntity<String>(token, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.UNAUTHORIZED);
        }
    }
}
