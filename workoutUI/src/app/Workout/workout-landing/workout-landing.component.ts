import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workout-landing',
  templateUrl: './workout-landing.component.html',
  styleUrls: ['./workout-landing.component.css']
})
export class WorkoutLandingComponent implements OnInit {

  cards!: Card[];

  constructor() {
    this.cards = [
      {
        title: 'Card 1',
        image: 'https://via.placeholder.com/300x200.png?text=Card+1',
        description: 'This is the first card',
      },
      {
        title: 'Card 2',
        image: 'https://via.placeholder.com/300x200.png?text=Card+2',
        description: 'This is the second card',
      },
      {
        title: 'Card 3',
        image: 'https://via.placeholder.com/300x200.png?text=Card+3',
        description: 'This is the third card',
      },
      {
        title: 'Card 4',
        image: 'https://via.placeholder.com/300x200.png?text=Card+4',
        description: 'This is the fourth card',
      },
      {
        title: 'Card 5',
        image: 'https://via.placeholder.com/300x200.png?text=Card+1',
        description: 'This is the first card',
      },
      {
        title: 'Card 6',
        image: 'https://via.placeholder.com/300x200.png?text=Card+2',
        description: 'This is the second card',
      },
      {
        title: 'Card 7',
        image: 'https://via.placeholder.com/300x200.png?text=Card+3',
        description: 'This is the third card',
      },
      {
        title: 'Card 8',
        image: 'https://via.placeholder.com/300x200.png?text=Card+4',
        description: 'This is the fourth card',
      },
    ];
  }

  ngOnInit(): void {

  }

}


interface Card {
  title: string;
  image: string;
  description: string;
}
