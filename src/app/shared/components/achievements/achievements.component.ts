import { Component, Input, OnInit } from '@angular/core';
import { Achievement } from 'src/app/interfaces/achievement';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss'],
})
export class AchievementsComponent implements OnInit {
  @Input() achievements: Achievement[] = achievements;
  expanded: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  openModal() {
    this.expanded = true;
  }
  closeModal() {
    this.expanded = false;
  }
}

const achievements = [
  {
    id: 1345933,
    name: 'Master of Fate',
    description: 'Earn all FINAL FANTASY VII REMAKE trophies.',
    image:
      'https://media.rawg.io/media/achievements/1ad/1addea8262a388561fb3ddd642c4bfa1.jpg',
    percent: '7.57',
  },
  {
    id: 1345986,
    name: 'Hardened Veteran',
    description: 'Complete all chapters on Hard difficulty.',
    image:
      'https://media.rawg.io/media/achievements/bcf/bcf343c10f70b113d5758da3b20179e4.jpg',
    percent: '8.04',
  },
  {
    id: 1345983,
    name: 'Master of Mimicry',
    description: 'Learn all enemy skills.',
    image:
      'https://media.rawg.io/media/achievements/527/527165356aca20bae93988cc04e60025.jpg',
    percent: '8.63',
  },
  {
    id: 1345972,
    name: 'Dressed to the Nines',
    description: 'Obtain all nine bridal candidate outfits.',
    image:
      'https://media.rawg.io/media/achievements/4e6/4e6a807f5e9ae0cbea120422da10cea7.jpg',
    percent: '8.84',
  },
  {
    id: 1345977,
    name: 'Best in the Business',
    description: 'Complete all quests.',
    image:
      'https://media.rawg.io/media/achievements/b7f/b7f0a587daf3bd37b0bee18358cf226b.jpg',
    percent: '11.38',
  },
  {
    id: 1345982,
    name: 'Weapons Expert',
    description: 'Learn all weapon abilities.',
    image:
      'https://media.rawg.io/media/achievements/63b/63bfbb96a06d1fff61e7d4637e1b901a.jpg',
    percent: '12.23',
  },
  {
    id: 1345981,
    name: 'Intelligence Agent',
    description: 'Complete all battle intel reports.',
    image:
      'https://media.rawg.io/media/achievements/c87/c8785130e4a3771b903ed893e16d8561.jpg',
    percent: '12.23',
  },
  {
    id: 1345980,
    name: 'Staggering Feat',
    description: 'Deal 300% damage to a staggered enemy.',
    image:
      'https://media.rawg.io/media/achievements/444/44481ff98771a7ea6c713b294712fe28.jpg',
    percent: '13.41',
  },
  {
    id: 1345979,
    name: 'Building Character',
    description: 'Attain level 50 with a character.',
    image:
      'https://media.rawg.io/media/achievements/878/87842fd6e233e917c78ea4b27041adbd.jpg',
    percent: '14.85',
  },
  {
    id: 1345961,
    name: 'Biker Boy',
    description:
      'Get praised by Jessie at the end of the motorcycle mini-game.',
    image:
      'https://media.rawg.io/media/achievements/6f8/6f83adc1f3441b17c7158a83e865bfce.jpg',
    percent: '15.65',
  },
];
