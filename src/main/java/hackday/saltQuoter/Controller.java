package hackday.saltQuoter;

import hackday.saltQuoter.people.PeopleService;
import hackday.saltQuoter.people.Person;
import hackday.saltQuoter.quotes.Quote;
import hackday.saltQuoter.quotes.QuoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.UUID;

@CrossOrigin
@RestController
@RequestMapping("/saltquoter")
public class Controller {

    @Autowired
    PeopleService peopleService;

    @Autowired
    QuoteService quoteService;

    @GetMapping("/people")
    ResponseEntity<List<Person>> getAllPeople(){
        return ResponseEntity.ok(peopleService.getAllPeople());
    }

    @PostMapping("/people")
    ResponseEntity<Person> addPerson(@RequestBody Person person){
        Person addedPerson = peopleService.savePerson(person);
        return ResponseEntity.created(URI.create("/saltquoter/people/" + addedPerson.getId())).body(addedPerson);
    }

    @PutMapping("/people/{id}")
    ResponseEntity<Person> updatePerson(@RequestBody Person person){
        Person updatedPerson = peopleService.savePerson(person);
        return ResponseEntity.ok(updatedPerson);
    }

    @DeleteMapping ("/people/{id}")
    ResponseEntity<Person> deletePerson(@PathVariable UUID id){
        peopleService.deletePerson(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping ("people/{id}")
    ResponseEntity<Person> getSpecificPerson(@PathVariable UUID id) {
        return ResponseEntity.ok(peopleService.findSpecificPerson(id));
    }

    @GetMapping("/people/{id}/quotes/all")
    ResponseEntity<List<Quote>> getAllQuotesForPerson(@PathVariable UUID id){
        Person person = peopleService.findSpecificPerson(id);
        return ResponseEntity.ok(quoteService.findAllQuotesByPerson(person));
    }

    @GetMapping("/people/{id}/quotes")
    ResponseEntity<Quote> getRandomQuote(@PathVariable UUID id){
        Person person = peopleService.findSpecificPerson(id);
        return ResponseEntity.ok(quoteService.getRandomQuote(person));
    }

    @GetMapping("/quotes")
    ResponseEntity<List<Quote>> getAllQuotes(){
        return ResponseEntity.ok(quoteService.findAllQuotes());
    }

    @PostMapping("/people/{id}/quotes")
    ResponseEntity<Quote> addQuote(@RequestBody Quote quote, @PathVariable UUID id){
        quote.setPerson(peopleService.findSpecificPerson(id));
        Quote createdQuote = quoteService.addNewQuote(quote);
        return ResponseEntity.created(URI.create("/saltquoter/"+ id + "quotes" + createdQuote.getId())).body(createdQuote);
    }

    @PutMapping("/quotes/{id}")
    ResponseEntity<Quote> toggleFavourite(@PathVariable UUID id) {
        return ResponseEntity.ok(quoteService.toggleFavourite(id));
    }

    @PutMapping("/quotes/{id}/{personId}")
    ResponseEntity<Quote> updateQuote(@PathVariable UUID id, @PathVariable UUID personId, @RequestBody Quote quote) {
        quote.setPerson(peopleService.findSpecificPerson(personId));
        quote.setId(id);
        return ResponseEntity.ok(quoteService.updateQuote(quote));
    }

    @GetMapping("/quotes/{id}")
    ResponseEntity<Quote> getSpecificQuote(@PathVariable UUID id) {
        return ResponseEntity.ok(quoteService.getSpecificQuote(id));
    }

    @DeleteMapping("/quotes/{id}")
    ResponseEntity<Quote> deleteQuote(@PathVariable UUID id){
        quoteService.deleteQuote(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/quotes/favourites")
    ResponseEntity<List<Quote>> getFavourites(){
        return ResponseEntity.ok(quoteService.findFavourites());
    }

}
