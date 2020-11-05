package interfaces;

import domain.model.Story;
import domain.service.StoryService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @PutMapping(value= "")
    public Collection<Story> updateStory(
            @RequestBody @ApiParam(name= "story", required = true) Story story) {

        storyService.updateStoryPoint(story);
        return storyService.getAllStories().values();
    }
}
