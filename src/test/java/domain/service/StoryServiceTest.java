package domain.service;

import domain.model.Story;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.Map;

public class StoryServiceTest {

    private StoryService storyService = new StoryService();

    @Test
    void testGetAllStories() {
        Map<String, Story> stories = storyService.getAllStories();

        Assertions.assertEquals(3, stories.size());
    }

    @Test
    void testUpdateStoryPoint() {
        Map<String, Story> stories = storyService.getAllStories();
        storyService.updateStoryPoint("add login feature", 5);

        Assertions.assertEquals(5, stories.get("add login feature").getStoryPoint());
    }
}
