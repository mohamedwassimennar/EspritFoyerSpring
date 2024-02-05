package com.example.sprinprojet.services;

import com.example.sprinprojet.entity.Foyer;
import com.example.sprinprojet.entity.Universite;
import com.example.sprinprojet.repository.FoyerRepository;
import com.example.sprinprojet.repository.UniversiteRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import com.google.zxing.BarcodeFormat;
import com.google.zxing.WriterException;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;

@Service
@AllArgsConstructor
public class UniversiteServiceImpl implements IUniversiteService {
    UniversiteRepository universiteRepository;
    FoyerRepository foyerRepository;

    @Override
    public List<Universite> retrieveAllUniversites() {
        return universiteRepository.findAll();
    }

    @Override
    public Universite getbyidUni(Long idUniversite){
        return universiteRepository.findById(idUniversite).get();
    }

    @Override
    public Universite addUniversites(Universite e) {
        return universiteRepository.save(e);
    }

    @Override
    public Universite updateUniversites(Universite e) {
        return universiteRepository.save(e);
    }

    @Override
    public Universite retrieveUniversites(Long idUniversite) {
        return universiteRepository.findById(idUniversite).get();
    }

    @Override
    public void removeUniversites(Long idUniversite) {
        universiteRepository.deleteById(idUniversite);

    }

    @Override
    public Universite affecterFoyerAUniversite(long idFoyer, String nomUniversite) {

        Foyer foyer = foyerRepository.findById(idFoyer).get(); // parent
        Universite universite = universiteRepository.findByNomUniversite(nomUniversite); // son
        // universite.setFoyer(foyer);
        foyer.setUniversite(universite);
        // universiteRepository.save(universite);
        foyerRepository.save(foyer);

        return universite;


    }

    @Override
    public Universite desaffecterFoyerAUniversite(long idFoyer) {
        Foyer foyer = foyerRepository.findById(idFoyer).get();


        Universite universite = foyer.getUniversite(); // Get the associated university

        foyer.setUniversite(null); // Disassociate the university from the foyer
        foyerRepository.save(foyer); // Save the updated foyer

        return universite; // Return the disassociated university


    }

    @Override
    public Integer countUniversites() {
        return universiteRepository.countUniversites();
    }

    @Override
    public List<Universite> rechercheParNom(String nomUniversite) {
        return universiteRepository.rechercheParNom(nomUniversite);
    }

    public byte[] generateQRCode(Universite universite) {
        String content = "Name: " + universite.getNomUniversite() + "\nAddress: " + universite.getAddress();

        try {
            QRCodeWriter qrCodeWriter = new QRCodeWriter();
            BitMatrix bitMatrix = qrCodeWriter.encode(content, BarcodeFormat.QR_CODE, 300, 300);

            BufferedImage bufferedImage = new BufferedImage(300, 300, BufferedImage.TYPE_INT_RGB);
            bufferedImage.createGraphics();

            Graphics2D graphics = (Graphics2D) bufferedImage.getGraphics();
            graphics.setColor(Color.WHITE);
            graphics.fillRect(0, 0, 300, 300);
            graphics.setColor(Color.BLACK);

            for (int i = 0; i < 300; i++) {
                for (int j = 0; j < 300; j++) {
                    if (bitMatrix.get(i, j)) {
                        graphics.fillRect(i, j, 1, 1);
                    }
                }
            }

            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            javax.imageio.ImageIO.write(bufferedImage, "png", baos);
            return baos.toByteArray();

        } catch (WriterException | java.io.IOException e) {
            e.printStackTrace();
            return null;
        }
    }
}
