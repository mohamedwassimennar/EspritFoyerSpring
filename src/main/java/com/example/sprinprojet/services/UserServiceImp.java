package com.example.sprinprojet.services;

import com.example.sprinprojet.entity.User;
import com.example.sprinprojet.entity.UserRole;
import com.example.sprinprojet.repository.UserRepository;
import com.google.zxing.BarcodeFormat;
import com.google.zxing.WriterException;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;
import lombok.AllArgsConstructor;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@AllArgsConstructor
public class UserServiceImp implements IUserService{
    UserRepository userRepository;
    @Override
    public User addUser(User user) { return userRepository.save(user); }

    @Override
    public User updateUser(User user) { return userRepository.save(user); }

    @Override
    public void deleteById(long id) { userRepository.deleteById(id);}

    @Override
    public List<User> retrieveAllUsers() { return userRepository.findAll(); }

    @Override
    public List addAllUsers(List<User> users) { return userRepository.saveAll(users); }

    public byte[] generateQRCode(User user) {
        String content = "Nom: " + user.getNomUser() + "\nPrénom: " + user.getPrenomUser() + "\nEmail: " + user.getEmail() + "\nRole: " + user.getRole();

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

    @Override
    public User retrieveUsers(Long idUser) {
        return userRepository.findById(idUser).get();
    }

    public byte[] generatePdfForUser(User user) throws IOException {
        // Générez le PDF
        return generatePdf(user);
    }

    @Override
    public List<User> retrieveAllFoyers() {
        return userRepository.findAll();
    }

    private byte[] generatePdf(User user) throws IOException {
        PDDocument document = new PDDocument();
        PDPage page = new PDPage();
        document.addPage(page);

        try (PDPageContentStream contentStream = new PDPageContentStream(document, page)) {
            contentStream.setFont(PDType1Font.HELVETICA_BOLD, 12);
            contentStream.beginText();
            contentStream.newLineAtOffset(20, 700);
            contentStream.showText("Les informations de l'utilisateur : ");
            contentStream.newLineAtOffset(0, -20);
            contentStream.showText("Nom et prénom : " + user.getNomUser() + " " + user.getPrenomUser());
            contentStream.newLineAtOffset(0, -20);
            contentStream.showText("Email: " + user.getEmail());
            contentStream.newLineAtOffset(0, -20);
            contentStream.showText("Role: " + user.getRole()); // Add the user's role
            contentStream.newLineAtOffset(0, -20);
        }

        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        document.save(byteArrayOutputStream);
        document.close();

        return byteArrayOutputStream.toByteArray();
    }


    public Map<String, Long> getUserRoleStatistics() {
        Map<String, Long> statistics = new HashMap<>();

        for (UserRole role : UserRole.values()) {
            Long count = userRepository.countUsersByRole(role);
            statistics.put(role.name(), count);
        }

        return statistics;
    }
}
