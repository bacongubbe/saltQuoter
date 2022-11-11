package hackday.saltQuoter.people;

import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface JpaPeopleRepository extends CrudRepository<Person, UUID> {
}
