package com.example.sprinprojet.services;


import com.example.sprinprojet.entity.Bloc;
import com.example.sprinprojet.entity.Foyer;
import com.example.sprinprojet.repository.FoyerRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;


@Service
@AllArgsConstructor
public class FoyerServiceImp  implements IFoyerService{
    FoyerRepository foyerRespository;
    @Override
    public List<Foyer> retrieveAllFoyers() {
        return foyerRespository.findAll();
    }

    @Override
    public Foyer addFoyer(Foyer e) {
        return foyerRespository.save(e);
    }

    @Override
    public Foyer updateFoyer(Foyer e) {
        return foyerRespository.save(e);
    }

    @Override
    public Foyer retrieveFoyer(Long idFoyer) {
        return foyerRespository.findById(idFoyer).get();
    }

    @Override
    public void removeFoyer(Long idFoyer) {
        foyerRespository.deleteById(idFoyer);

    }

    @Override
    public Foyer addFoyerWithBloc(Foyer foyer) {
        //bloc parent
        //foyer son
        Bloc bloc = new Bloc();

        return null;
    }

    public ByteArrayInputStream experienceExcelReport(List<Foyer> foyes) throws IOException {
        String[] columns = {"idFoyer", "nomFoyer", "capaciteFoyer"};
        try (Workbook workbook = new XSSFWorkbook();
             ByteArrayOutputStream out = new ByteArrayOutputStream();) {
            CreationHelper creationHelper = workbook.getCreationHelper();

            Sheet sheet = workbook.createSheet("Equipes");
            sheet.autoSizeColumn(columns.length);

            org.apache.poi.ss.usermodel.Font headerFont = workbook.createFont();

            headerFont.setBold(true);
            headerFont.setColor(IndexedColors.BLUE.getIndex());

            CellStyle cellStyle = workbook.createCellStyle();
            cellStyle.setFont(headerFont);

            Row headerRow = sheet.createRow(0);
            for(int col = 0; col < columns.length; col++){
                Cell cell = headerRow.createCell(col);
                cell.setCellValue(columns[col]);
                cell.setCellStyle(cellStyle);
            }
            CellStyle cellStyle1 = workbook.createCellStyle();
            cellStyle1.setDataFormat(creationHelper.createDataFormat().getFormat("#"));
            int rowIndex = 1;
            for (Foyer foyer:foyes ){
                Row row = sheet.createRow(rowIndex++);
                row.createCell(0).setCellValue(foyer.getIdFoyer());
                row.createCell(1).setCellValue(foyer.getNomFoyer());
                row.createCell(2).setCellValue(foyer.getCapaciteFoyer());

            }
            workbook.write(out);
            return new ByteArrayInputStream(out.toByteArray());
        }
    }

    /////////////pagination//////////////////
    @Override
    public Page<Foyer> lire(Pageable pageable) {
        return (Page<Foyer>) foyerRespository.findAll(pageable);
    }

    @Override
    public List<Foyer> listefoyerwheresizebiggerthan(Long capacite) {
        return foyerRespository.listefoyerwheresizebiggerthan(capacite);
    }
}
