package iam.couture.backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ComplementMesureFemme extends Mesure {

    @Column(name = "DessousPoit")
    private Float dessousPoit;

    @Column(name = "CrestesIliaque")
    private Float crestesIliaque;

    @Column(name = "LDos")
    private Float lDos;
    // Getters and Setters creer inplicitement avec le lombok


}
