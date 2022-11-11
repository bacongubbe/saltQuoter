package hackday.saltQuoter.quotes;

import hackday.saltQuoter.people.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;
import java.util.stream.StreamSupport;

@Repository
public class QuoteRepo {

    @Autowired
    JpaQuoteRepository repo;

    public Quote saveQuote (Quote quote){
        return repo.save(quote);
    }

    public List<Quote> getAllQuotesForPerson(Person person) {
        return repo.findAllByPerson(person);
    }

    public Quote getSpecificQuote(UUID id) {
        return repo.findById(id).orElseThrow();
    }

    public List<Quote> findAllQuotes() {
        Iterable<Quote> quotes =  repo.findAll();
        return StreamSupport
                .stream(quotes.spliterator(), false)
                .toList();
    }

    public void deleteQuote (UUID id) {
        repo.deleteById(id);
    }
}
