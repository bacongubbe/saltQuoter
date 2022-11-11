package hackday.saltQuoter.quotes;

import hackday.saltQuoter.people.Person;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.UUID;

public interface JpaQuoteRepository extends CrudRepository<Quote, UUID> {

    List<Quote> findAllByPerson(Person person);

}
