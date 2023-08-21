package iam.couture.backend.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import iam.couture.backend.entity.Client;
import iam.couture.backend.entity.Mesure;
import iam.couture.backend.exception.ResourceNotFoundException;
import iam.couture.backend.repository.MesureRepository;
import iam.couture.backend.service.MesureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class MesureController {

    @Autowired
    private MesureRepository mesureRepository;
    @Autowired
    private final MesureService mesureService;

    @Autowired
    public MesureController(MesureService mesureService) {
        this.mesureService = mesureService;
    }




    @GetMapping("/mesure")
    public List<Mesure> getAllMesure() { return mesureRepository.findAll(); }

    @PostMapping("/mesure")
    public Mesure createMesure(@RequestBody Mesure mesure) {return mesureRepository.save(mesure);}

    @GetMapping("/mesure/{id}")
    public ResponseEntity<Mesure> getMesurebyId(@PathVariable Long id){
        Mesure mesure = mesureRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Ce client n'a pas de mesure dans notre base: " + id));
        return ResponseEntity.ok(mesure);
    }
    @GetMapping("/mesure-client/{idClient}")
    public ResponseEntity<List<Mesure>> getMesureByClientId(@PathVariable Client idClient) {
        List<Mesure> mesure = mesureService.getMesureByClientId(idClient);
        return ResponseEntity.ok(mesure);
    }

    @PutMapping("/mesure/{id}")
    public ResponseEntity<Mesure> updateMesure(@PathVariable Long id, @RequestBody Mesure mesureDetails){
        Mesure mesure = mesureRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Ce client n'a pas de mesure dans notre base: " + id));
        mesure.setTete(mesureDetails.getTete());
        mesure.setCou(mesureDetails.getCou());
        mesure.setEpaule(mesureDetails.getEpaule());
        mesure.setLBras(mesureDetails.getLBras());
        mesure.setPoitrine(mesureDetails.getPoitrine());
        mesure.setHanches(mesureDetails.getHanches()); 
        mesure.setLCorps(mesureDetails.getLCorps());
        mesure.setCuisse(mesureDetails.getCuisse());
        mesure.setGenou(mesureDetails.getGenou());
        mesure.setMollet(mesureDetails.getMollet());
        mesure.setCheville(mesureDetails.getCheville());
        mesure.setBiceps(mesureDetails.getBiceps());
        mesure.setCoude(mesureDetails.getCoude());
        mesure.setAvantBras(mesureDetails.getAvantBras());
        mesure.setPoignetCoude(mesureDetails.getPoignetCoude());
        mesure.setEntreJambe(mesureDetails.getEntreJambe());
        mesure.setCoutureExt(mesureDetails.getCoutureExt());
        mesure.setHTotale(mesureDetails.getHTotale());

        Mesure updatedMesure = mesureRepository.save(mesure);
        return ResponseEntity.ok(updatedMesure);
    }
}