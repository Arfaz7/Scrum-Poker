package domain.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Story {
    private String name;
    private String description;
    private int storyPoint;

    public Story(String name, String description, int storyPoint) {
        this.name = name;
        this.description = description;
        this.storyPoint = storyPoint;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getStoryPoint() {
        return storyPoint;
    }

    public void setStoryPoint(int storyPoint) {
        this.storyPoint = storyPoint;
    }
}
