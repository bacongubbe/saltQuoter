package hackday.saltQuoter.quotes;

import hackday.saltQuoter.people.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;
import java.util.UUID;

@Service
public class QuoteService {

    @Autowired
    QuoteRepo repo;


    public Quote addNewQuote(Quote quote) {
        return repo.saveQuote(quote);
    }

    public List<Quote> findAllQuotesByPerson(Person person) {
        return repo.getAllQuotesForPerson(person);
    }

    public Quote getSpecificQuote(UUID id) {
        return repo.getSpecificQuote(id);
    }

    public Quote getRandomQuote(Person person) {
        List<Quote> allQuotes = repo.getAllQuotesForPerson(person);
        Random random = new Random();
        return allQuotes.get(random.nextInt(allQuotes.size()));
    }

    public Quote toggleFavourite(UUID id) {
        Quote quote = repo.getSpecificQuote(id);
        quote.setFavourite(!quote.isFavourite());
        return repo.saveQuote(quote);
    }

    public List<Quote> findAllQuotes() {
        return repo.findAllQuotes();
    }

    public List<Quote> findFavourites() {
        return repo.findAllQuotes().stream()
                .filter(Quote::isFavourite)
                .toList();
    }

    public void deleteQuote (UUID id) {
        repo.deleteQuote(id);
    }

    public Quote updateQuote(Quote quote) {
        return repo.saveQuote(quote);
    }
}
