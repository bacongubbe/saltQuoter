package hackday.saltQuoter.people;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class PeopleService {

    @Autowired
    PeopleRepo repo;

    public List<Person> getAllPeople(){
        return repo.getAllPeople();
    }

    public Person savePerson(Person person) {
        return repo.savePerson(person);
    }

    public Person findSpecificPerson (UUID id){
        return repo.getSpecificPerson(id);
    }

    public void deletePerson(UUID id) {
        repo.deletePerson(id);
    }
}
