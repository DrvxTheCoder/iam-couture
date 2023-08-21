package iam.couture.backend.repository;


import iam.couture.backend.entity.Client;
import iam.couture.backend.entity.Mesure;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MesureRepository extends JpaRepository <Mesure, Long>{
    List<Mesure> findByIdClient(Client idClient);
}
