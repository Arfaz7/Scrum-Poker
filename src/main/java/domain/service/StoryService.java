package domain.service;

import domain.model.Story;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class StoryService {

    private final Map<String, Story> stories = new HashMap() {{
        put("add login feature", new Story("add login feature", "User should be able to connect to the application using username and password", 0));
        put("create chatbot feature", new Story("create chatbot feature", "No Description", 0));
        put("create FAQ feature", new Story("create FAQ feature", "No Description", 0));
    }};

    public Map<String, Story> getAllStories() { return stories; }

    public void updateStoryPoint(Story story) {
        stories.put(story.getName(), story);
    }
}
