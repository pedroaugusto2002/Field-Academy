import { Component, OnInit } from '@angular/core';

import { ListChampionService } from 'src/app/services/list-champion.service';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css']
})
export class ChampionsComponent implements OnInit{

  champions= [
    
        {
          version: "13.3.1",
          id: "Aatrox",
          key: "266",
          name: "Aatrox",
          title: "a Espada Darkin",
          blurb: "Antes defensores honrados de Shurima contra o temido Vazio, Aatrox e seus irmãos acabaram se tornando uma ameaça ainda maior para Runeterra, e a única coisa capaz de derrotá-los foi um tipo de feitiçaria mortal e traiçoeira. Mas após séculos de...",
          info: {
            attack: 8,
            defense: 4,
            magic: 3,
            difficulty: 4
          },
          image: {
            full: "Aatrox.png",
            sprite: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg",
            group: "champion",
            x: 0,
            y: 0,
            w: 48,
            h: 48
          },
          tags: [
            "Fighter",
            "Tank"
          ],
          partype: "Poço de Sangue",
          stats: {
            hp: 650,
            hpperlevel: 114,
            mp: 0,
            mpperlevel: 0,
            movespeed: 345,
            armor: 38,
            armorperlevel: 4.45,
            spellblock: 32,
            spellblockperlevel: 2.05,
            attackrange: 175,
            hpregen: 3,
            hpregenperlevel: 1,
            mpregen: 0,
            mpregenperlevel: 0,
            crit: 0,
            critperlevel: 0,
            attackdamage: 60,
            attackdamageperlevel: 5,
            attackspeedperlevel: 2.5,
            attackspeed: 0.651
          }
        },
        {
          version: "13.3.1",
          id: "Ahri",
          key: "103",
          name: "Ahri",
          title: "a Raposa de Nove Caudas",
          blurb: "A ligação de Ahri com a magia do mundo espiritual é inata. Ela é uma vastaya com traços de raposa, capaz de manipular as emoções de sua presa e consumir sua essência, devorando também as memórias e as percepções de cada alma absorvida. Outrora uma...",
          info: {
            attack: 3,
            defense: 4,
            magic: 8,
            difficulty: 5
          },
          image: {
            full: "Ahri.png",
            sprite: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ahri_0.jpg",
            group: "champion",
            x: 48,
            y: 0,
            w: 48,
            h: 48
          },
          tags: [
            "Mage",
            "Assassin"
          ],
          partype: "Mana",
          stats: {
            hp: 570,
            hpperlevel: 96,
            mp: 418,
            mpperlevel: 25,
            movespeed: 330,
            armor: 18,
            armorperlevel: 4.7,
            spellblock: 30,
            spellblockperlevel: 1.3,
            attackrange: 550,
            hpregen: 2.5,
            hpregenperlevel: 0.6,
            mpregen: 8,
            mpregenperlevel: 0.8,
            crit: 0,
            critperlevel: 0,
            attackdamage: 53,
            attackdamageperlevel: 3,
            attackspeedperlevel: 2,
            attackspeed: 0.668
          }
        },
    
  ];
  constructor(private listChampionService: ListChampionService){}



  }



