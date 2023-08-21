package iam.couture.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Mesure {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idMesure;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "idClient",referencedColumnName = "idClient")
    private Client idClient;

    @Column(name = "Tete")
    private Float tete;

    @Column(name = "Cou")
    private Float cou;

    @Column(name = "Epaule")
    private Float epaule;

    @Column(name = "LBras")
    private Float lBras;

    @Column(name = "Poitrine")
    private Float poitrine;

    @Column(name = "Hanches")
    private Float hanches;

    @Column(name = "LCorps")
    private Float lCorps;

    @Column(name = "Cuisse")
    private Float cuisse;

    @Column(name = "Genou")
    private Float genou;

    @Column(name = "Mollet")
    private Float mollet;

    @Column(name = "Cheville")
    private Float cheville;

    @Column(name = "Biceps")
    private Float biceps;

    @Column(name = "Coude")
    private Float coude;

    @Column(name = "AvantBras")
    private Float avantBras;

    @Column(name = "PoignetCoude")
    private Float poignetCoude;

    @Column(name = "EntreJambe")
    private Float entreJambe;

    @Column(name = "CoutureExt")
    private Float coutureExt;

    @Column(name = "HTotale")
    private Float hTotale;

    // Getters and Setters creer inplicitement avec le lombok


}

