package interfaces;

import domain.model.Story;
import domain.service.StoryService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping(value= "/api/v1/story")
@Api(tags = "story", value= "Methods to manipulate story")
public class StoryController {

    @Autowired
    private StoryService storyService;

    @GetMapping(value= "")
    public Collection<Story> getStories() {
        return storyService.getAllStories().values();
    }
}
