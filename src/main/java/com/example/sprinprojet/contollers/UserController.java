package com.example.sprinprojet.contollers;
import com.example.sprinprojet.entity.*;
import com.example.sprinprojet.repository.UserRepository;
import com.example.sprinprojet.services.IUserService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@AllArgsConstructor
@RequestMapping("/user")
public class UserController {
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    IUserService iUserService;

    @RequestMapping(value ="/add-user" ,method = RequestMethod.POST)
    public User addUser(@RequestBody User user) {
        user.setMotdepasse(this.bCryptPasswordEncoder.encode(user.getMotdepasse()));
        User savedUser = userRepository.save(user);
        return iUserService.addUser(user);
    }

    @PutMapping("/update-user/{id}")
    public User updateUserByID(@RequestBody User updatedUser, @PathVariable("id") Long idUser) {
        User existingUser = userRepository.findById(idUser).orElse(null);

        if (existingUser != null) {
            existingUser.setNomUser(updatedUser.getNomUser());
            existingUser.setPrenomUser(updatedUser.getPrenomUser());
            existingUser.setEmail(updatedUser.getEmail());

            // Check if the password in the updatedUser is not null or empty before updating
            String newPassword = updatedUser.getMotdepasse();
            if (newPassword != null && !newPassword.isEmpty()) {
                // Hash the new password
                BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
                String hashedPassword = passwordEncoder.encode(newPassword);
                existingUser.setMotdepasse(hashedPassword);
            }

            existingUser.setRole(updatedUser.getRole());

            // If you need to update other attributes, do the same

            return userRepository.save(existingUser);
        } else {
            // Handle the case where the user with the given ID is not found
            // You can choose to return an error, an appropriate HTTP response, or something else.
            return null;
        }
    }

    @GetMapping("/retrieve-user/{id}")
    public User retrieveUser(@PathVariable("id") Long userId) {
        return iUserService.retrieveUsers(userId);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE )
    public void deleteUser(@PathVariable("id") long id){
        iUserService.deleteById(id);
    }

    @GetMapping("/retrieve-all-users")
    public List<User> getUserList(){
        List<User>userList=iUserService.retrieveAllUsers();
        return userList;
    }

    @PostMapping("/add-all-users")
    public List addAllUsers(@RequestBody List<User>users){
        List Listuser=iUserService.addAllUsers(users);
        return Listuser;
    }
    @GetMapping("/retrieve-all")
    public ResponseEntity<List<User>> retrieveAllUsers() {
        List<User> users = iUserService.retrieveAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }


    @GetMapping("/{id}/qr-code")
    public ResponseEntity<byte[]> generateQRCode(@PathVariable Long id) {
        User user = iUserService.retrieveUsers(id);
        byte[] qrCode = iUserService.generateQRCode(user);

        if (qrCode != null) {
            return ResponseEntity.ok().header("Content-Disposition", "attachment; filename=qr-code.png").body(qrCode);
        } else {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/{id}/generate-pdf")
    public ResponseEntity<byte[]> generateUserPdf(@PathVariable Long id) throws IOException {
        // Obtenez les données de l'utilisateur depuis votre logique d'accès aux données utilisateur
        User user = iUserService.retrieveUsers(id); // ... remplacez par votre logique d'obtention d'utilisateur

        // Générez le PDF
        byte[] pdfBytes = iUserService.generatePdfForUser(user);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_PDF);
        headers.setContentDispositionFormData("inline", "user-details.pdf");

        return new ResponseEntity<>(pdfBytes, headers, HttpStatus.OK);
    }

    @GetMapping("/role-statistics")
    public ResponseEntity<Map<String, Long>> getUserRoleStatistics() {
        Map<String, Long> statistics = new HashMap<>();

        for (UserRole role : UserRole.values()) {
            Long count = userRepository.countUsersByRole(role);
            statistics.put(role.name(), count);
        }

        return new ResponseEntity<>(statistics, HttpStatus.OK);
    }
    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> loginUser(@RequestBody User user) {
        System.out.println("in login-user"+user);
        HashMap<String, Object> response = new HashMap<>();

        User userFromDB = userRepository.findByEmail(user.getEmail());
        System.out.println("userFromDB+user"+userFromDB);
        if (userFromDB == null) {
            response.put("message", "User not found !");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } else {
            boolean compare = this.bCryptPasswordEncoder.matches(user.getMotdepasse(), userFromDB.getMotdepasse());
            System.out.println("compare"+compare);
            if (!compare) {
                response.put("message", "User not found !");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
            }else
            {
                String token = Jwts.builder()
                        .claim("data", userFromDB)
                        .signWith(SignatureAlgorithm.HS256, "SECRET")
                        .compact();
                response.put("token", token);
                System.out.println("hhh");
                return ResponseEntity.status(HttpStatus.OK).body(response);
            }

        }
    }
}
