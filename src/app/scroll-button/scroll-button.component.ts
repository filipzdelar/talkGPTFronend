import { Component, OnInit, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-scroll-button',
  templateUrl: './scroll-button.component.html',
  styleUrls: ['./scroll-button.component.css']
})
export class ScrollButtonComponent implements OnInit, AfterViewInit {
  ngOnInit() {
  }

  ngAfterViewInit() {
    const scrollButton = document.getElementById("scrollButton");
    if (scrollButton) {
      scrollButton.addEventListener("click", () => {
        const pageHeight = window.innerHeight;
        const scrollAmount = 1.3 * pageHeight; // Adjust the percentage as desired (e.g., 0.2 for 20% of the page height)
        window.scrollBy({ top: scrollAmount, behavior: "smooth" });
      });
    }
  }
}
