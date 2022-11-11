package hackday.saltQuoter.people;

import hackday.saltQuoter.quotes.Quote;

import javax.persistence.*;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "people")
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    UUID id;
    private String name;

    private String role;

    @Column(name = "image_top")
    private String imageTop;

    @Column(name = "image_bottom")
    private String imageBottom;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getImageTop() {
        return imageTop;
    }

    public void setImageTop(String imageTop) {
        this.imageTop = imageTop;
    }

    public String getImageBottom() {
        return imageBottom;
    }

    public void setImageBottom(String imageBottom) {
        this.imageBottom = imageBottom;
    }
}
