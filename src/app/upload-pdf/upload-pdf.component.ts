import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-upload-pdf',
  templateUrl: './upload-pdf.component.html',
  styleUrls: ['./upload-pdf.component.scss']
})
export class UploadPdfComponent {

  constructor(private http: HttpClient) { }

  pdfFile1: File | null = null;
  pdfFile2: File | null = null;
  plagiarismScore: number | null = null;
  onFileSelected(event: any, fileType: string) {
    const file: File = event.target.files[0];
    if (fileType === 'pdf1') {
      this.pdfFile1 = file;
    } else {
      this.pdfFile2 = file;
    }
    console.log(this.pdfFile1)
  }

  onSubmit(event: Event): void {
    // You can perform additional validation or processing here
    event.preventDefault();
    if (this.pdfFile1 && this.pdfFile2) {
      const formData = new FormData();

      formData.append('pdf1', this.pdfFile1, this.pdfFile1.name);
      formData.append('pdf2', this.pdfFile2, this.pdfFile2.name);
      const jsonData = {
        pdf1: formData.get('pdf1'),
        pdf2: formData.get('pdf2')
      };

      console.log(formData)
      console.log("JsonData",jsonData)
      this.http.post<any>('http://127.0.0.1:5000/calculate_plagiarism', formData)
        .subscribe(response => {
          console.log(response);
          this.plagiarismScore = response.plagiarism_score;
        });
    }
  }

}
