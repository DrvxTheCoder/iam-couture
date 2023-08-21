package iam.couture.backend.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import iam.couture.backend.entity.Client;
import iam.couture.backend.repository.MesureRepository;
import iam.couture.backend.entity.Mesure;
import iam.couture.backend.exception.ResourceNotFoundException;
import iam.couture.backend.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class ClientController {

    @Autowired
    private ClientRepository clientRepository;
    @Autowired
    private MesureRepository mesureRepository;


    @GetMapping("/clients")
    public List<Client> getAllClients() { return clientRepository.findAll(); }

    @PostMapping("/clients")
    public Client createClient(@RequestBody Client client) {
        Client newClient = clientRepository.save(client);

        // Create a new measurement entry with default values
        Mesure defaultMesure = new Mesure();
        defaultMesure.setTete(10.0F);
        defaultMesure.setCou(10.0F);
        defaultMesure.setCoude(10.0F);
        defaultMesure.setEpaule(10.0F);
        defaultMesure.setLBras(10.0F);
        defaultMesure.setPoitrine(10.0F);
        defaultMesure.setHanches(10.0F);
        defaultMesure.setLCorps(10.0F);
        defaultMesure.setCuisse(10.0F);
        defaultMesure.setGenou(10.0F);
        defaultMesure.setMollet(10.0F);
        defaultMesure.setCheville(10.0F);
        defaultMesure.setBiceps(10.0F);
        defaultMesure.setAvantBras(10.0F);
        defaultMesure.setPoignetCoude(10.0F);
        defaultMesure.setEntreJambe(10.0F);
        defaultMesure.setCoutureExt(10.0F);
        defaultMesure.setHTotale(10.0F);
        defaultMesure.setIdClient(newClient); // Associate the measurement with the new client
        mesureRepository.save(defaultMesure);

        return ResponseEntity.ok(newClient).getBody();
    }

    @GetMapping("/clients/{id}")
    public ResponseEntity<Client> getClientbyId(@PathVariable Long id){
        Client client = clientRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Ce client n'existe pas dans notre base: " + id));
        return ResponseEntity.ok(client);
    }

    @PutMapping("/clients/{id}")
    public ResponseEntity<Client> updateClient(@PathVariable Long id, @RequestBody Client clientDetails){
        Client client = clientRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Ce client n'existe pas dans notre base: " + id));
        client.setPrenomClient(clientDetails.getPrenomClient());
        client.setNomClient(clientDetails.getNomClient());
        client.setCniClient(clientDetails.getCniClient());
        client.setAdresse(clientDetails.getAdresse());
        client.setSexe(clientDetails.getSexe());
        client.setEmail(clientDetails.getEmail());

        Client updatedClient = clientRepository.save(client);
        return ResponseEntity.ok(updatedClient);
    }

    @DeleteMapping("/clients/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteClient(@PathVariable Long id){
        Client client = clientRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Ce client n'existe pas dans notre base: " + id));
        clientRepository.delete(client);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }



}
