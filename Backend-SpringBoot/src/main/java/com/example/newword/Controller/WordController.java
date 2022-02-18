package com.example.newword.Controller;

import com.example.newword.Exception.ResourceNotFoundException;
import com.example.newword.entity.Word;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.newword.repository.WordRepository;

import java.util.List;


@CrossOrigin
@RestController
@RequestMapping("api/words")
public class WordController {
    @Autowired
    private WordRepository wordRepository;
    @GetMapping
    public List<Word> getAllWords(){return this.wordRepository.findAll();}

    @GetMapping("/{id}")
    public Word getWordById(@PathVariable(value="id")long wordId){
        return this.wordRepository.findById(wordId)
                .orElseThrow(()-> new ResourceNotFoundException("User Not Found with id :"+wordId));

    }
    @PostMapping
    public Word createWord(@RequestBody Word word){
        return this.wordRepository.save(word);
    }

    @PutMapping("/{id}")
    public Word updateWord(@RequestBody Word word,@PathVariable("id")long wordId){
        Word existingWord =  this.wordRepository.findById(wordId)
                .orElseThrow(()-> new ResourceNotFoundException("User Not Found with id :"+wordId));
        existingWord.setWord(word.getWord());
        existingWord.setChineseWord(word.getChineseWord());
        existingWord.setHandle(word.getHandle());
        return this.wordRepository.save(existingWord);
    }

}
