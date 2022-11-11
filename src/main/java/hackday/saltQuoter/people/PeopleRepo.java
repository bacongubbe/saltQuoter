package hackday.saltQuoter.people;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;
import java.util.stream.StreamSupport;

@Repository
public class PeopleRepo {

    @Autowired
    JpaPeopleRepository repo;

    public List<Person> getAllPeople(){
        Iterable<Person> people = repo.findAll();
        return StreamSupport
                .stream(people.spliterator(), false)
                .toList();
    }
    public Person savePerson(Person person){
        return repo.save(person);
    }

    public Person getSpecificPerson(UUID id){
        return repo.findById(id).orElseThrow();
    }

    public void deletePerson(UUID id) {
        repo.deleteById(id);
    }
}
