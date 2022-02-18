package com.example.newword.entity;

import javax.persistence.*;

@Entity
@Table(name = "words")
public class Word {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "word")
    private String word;
    @Column(name="chinese_word")
    private String chineseWord;
    @Column(name="handle")
    private Boolean handle;

    public Word(String word, String chineseWord, Boolean handle) {
        super();
        this.word = word;
        this.chineseWord = chineseWord;
        this.handle = handle;
    }

    public Word() {

    }

    public void setId(long id) {
        this.id = id;
    }

    public long getId() {
        return id;
    }

    public void setWord(String word) {
        this.word = word;
    }

    public void setChineseWord(String chineseWord) {
        this.chineseWord = chineseWord;
    }

    public void setHandle(Boolean handle) {
        this.handle = handle;
    }

    public String getWord() {
        return word;
    }

    public String getChineseWord() {
        return chineseWord;
    }

    public Boolean getHandle() {
        return handle;
    }
}
