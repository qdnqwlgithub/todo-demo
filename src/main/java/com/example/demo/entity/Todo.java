package com.example.demo.entity;

import lombok.*;

import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.Entity;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
public class Todo {

    @Id
    @GeneratedValue
    private Long id;

    @NonNull
    private String title;

    private Boolean completed = false;

    private LocalDateTime updateTime;

}
