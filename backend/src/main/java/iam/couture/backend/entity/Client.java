package iam.couture.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idClient;

    @Column(name = "nomClient", length = 100,  nullable = false)
    private String nomClient;

    @Column(name = "prenomClient", length = 100,  nullable = false)
    private String prenomClient;

    @Column(name = "cniClient", length = 100,  nullable = false)
    private String cniClient;

    @Column(name = "adresse", length = 100,  nullable = false)
    private String adresse;

    @Column(name = "sexe", length = 100,  nullable = false)
    private String sexe;

    @Column(name = "email", length = 100,  nullable = false)
    private String email;


}
