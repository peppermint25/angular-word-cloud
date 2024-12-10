import { Component, Input, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'lib-word-cloud',
  template: `<div class="word-cloud"></div>`,
  styles: [`
    .word-cloud {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }
    .word {
      margin: 5px;
      display: inline-block;
    }
  `]
})
export class WordCloudComponent implements OnInit {
  @Input() words: { text: string, weight: number }[] = [];

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.generateWordCloud();
  }

  private generateWordCloud() {
    const container = this.elementRef.nativeElement.querySelector('.word-cloud');
    container.innerHTML = ''; // Clear the container

    this.words.forEach(word => {
      const wordElement = document.createElement('span');
      wordElement.textContent = word.text;
      wordElement.style.fontSize = `${10 + word.weight * 2}px`;
      wordElement.classList.add('word');
      container.appendChild(wordElement);
    });
  }
}
