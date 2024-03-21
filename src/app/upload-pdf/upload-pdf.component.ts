import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-pdf',
  templateUrl: './upload-pdf.component.html',
  styleUrls: ['./upload-pdf.component.scss']
})
export class UploadPdfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  pdfFile1: File | null = null;
  pdfFile2: File | null = null;

  onFileSelected(event: any, fileType: string) {
    const file: File = event.target.files[0];
    if (fileType === 'pdf1') {
      this.pdfFile1 = file;
    } else {
      this.pdfFile2 = file;
    }
  }

  onSubmit() {
    // You can perform additional validation or processing here
    if (this.pdfFile1 && this.pdfFile2) {
      // Send the files for comparison or navigate to another component for comparison
      console.log('PDF File 1:', this.pdfFile1);
      console.log('PDF File 2:', this.pdfFile2);
      // Reset file inputs after submission if needed
      // this.pdfFile1 = null;
      // this.pdfFile2 = null;
    }
  }

}
