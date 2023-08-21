package iam.couture.backend.service;

import iam.couture.backend.entity.Client;
import iam.couture.backend.entity.Mesure;
import iam.couture.backend.repository.MesureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MesureService {
    private final MesureRepository mesureRepository;

    @Autowired
    public MesureService(MesureRepository mesureRepository) {
        this.mesureRepository = mesureRepository;
    }

    public List<Mesure> getMesureByClientId(Client idClient) {
        return mesureRepository.findByIdClient(idClient);
    }

    // Other service methods...
}
