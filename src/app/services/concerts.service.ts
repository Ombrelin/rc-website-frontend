import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Atelier} from './ateliers.service';

@Injectable({
  providedIn: 'root'
})
export class ConcertsService {
  url = 'https://rc.arsenelapostolet.fr/api/Concert';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getConcerts(): Promise<Array<Concert>> {
    return this.httpClient.get<Array<Concert>>(this.url).toPromise();
  }

  updateConcert(concert: Concert): Promise<Concert> {
    return this.httpClient.put<Concert>(`${this.url}/${concert.id}`, concert).toPromise();
  }

  deleteConcert(id: string) {
    return this.httpClient.delete(`${this.url}/${id}`).toPromise();
  }

  createConcert(concert: Concert): Promise<Concert> {
    return this.httpClient.post<Concert>(this.url, concert).toPromise();
  }

  /*
  getServices(): Array<Concert> {
    return [
      new Concert('TrioPolycordes',
        'Samedi 19 septembre 2O20 à 16h30', 'Hôpital Saint Jean de Dieu à Lyon',
        '(Harpe, mandoline et guitare ) , reprise du concert de création d’octobre 2019, ' +
        'Sandrine Chatron, Florentino Calvo et Jean-Marc Zvellenreuther',
        'LeTrioPolycordes réunit trois instrumentistes talentueux, diplômés des ' +
        'conservatoires supérieurs français et lauréats de concours internationaux, qui' +
        ' défendent la musique contemporaine avec passion. Ce choix artistique et éthique' +
        ' s\'incarne dans la constitution en 1996 d\'un trio de cordes pincées, unique en ' +
        'France, qui est dédicataire de nombreuses oeuvres (parmi lesquelles plusieurs solos ' +
        'pour chacun des instruments de la formation). Chacun des musiciens du trio a une pratique ' +
        'musicale polyvalente, du solo à l\'orchestre, en passant par la musique de chambre et ' +
        'l\'enseignement, ainsi que des collaborations avec de prestigieux ensembles de musique ' +
        'contemporaine, comme l\'Ensemble Intercontemporain, le KlangForum Wien, l\'Ensemble' +
        ' Contrechamps. Au delà du concert traditionnel, le TrioPolycordes s\'attache à développer' +
        ' des spectacles innovants qui associent musique, image, théâtre et arts plastiques.'
        ,
        'assets/images/polycord3.jpg',
        undefined
      ),
      new Concert('Poésie Action',
        'Samedi 3 octobre 2020 à 16h30', 'Hôpital Saint Jean de Dieu à Lyon',
        'par Laura Tejeda, Alain Goudard et Bartolome Ferrando',
        undefined,
        'assets/images/poesieaction.jpeg',
        'assets/docs/poesieaction.pdf'
        ),
      new Concert('Duo violoncelle-flûte',
        'dimanche 18 octobre à 16h', 'Salle de la mairie du Mazet Saint-Voy',
        'Marie Ythier et Samuel Bricault',
        'Le programme proposé par la violoncelliste Marie Ythier et le flûtiste Samuel' +
        ' Bricault nous invite à voyager au cœur du spectre sonore, avec les œuvres de Tristan' +
        ' Murail, dont Marie Ythier a enregistré les pièces pour violoncelle dans son dernier ' +
        'disque, Une Rencontre, Schumann-Murail (Métier, Naxos 2019). Jonathan Harvey, compositeur' +
        ' anglais très proche du courant spectral, a écrit pour le violoncelle la superbe pièce' +
        ' Curve with plateaux, inspirée des sonorités tibétaines et qui résonne comme un mantra.' +
        ' La Sequenza pour flûte de L. Berio résonnera également, en regards de ses autres chefs ' +
        'd’oeuvres, et les deux musiciens proposeront aussi une magnifique pièce d’H. Villa-Lobos,' +
        ' aux couleurs mélancoliques et novatrices',
        'assets/images/marieYthier.jpeg',
        undefined
      ),
      new Concert('Trio Declic',
        'Jeudi 19 Novembre 2020 à 20h ', 'Institution des Chartreux, 58 rue P.Dupont, Lyon 1° ',
        '3 voix de femmes a cappella,\n' +
        '          Valérie Philippin, Noémie Legendre et Frédérique Borsarello-Tresallet',
        undefined,
        'assets/images/declic.JPG',
        'assets/docs/declic.pdf'
      ),      new Concert('Ensemble Mora Vocis',
        'Date à préciser', 'Lieu encore incertain: le Lavoir Public, la Croix-Rousse à Lyon ',
        'Ensemble Mora Vocis, trois chanteuses  Isabelle Deproit, Els Janssens-Vanmunster, Caroline Marçot,\n' +
        ' et une saxophoniste Pascale Amiot\n',
        'Mora Vocis : expression latine médiévale désignant l’ultime instant où le chantre' +
        ' vocalisait pour le plaisir d’exprimer, à la fin de son texte, le reste de son souffle. Il' +
        ' faisait vivre alors la musique pour elle-même... \n' +
        ' À la rencontre des lieux et de leur histoire, les chanteuses de Mora Vocis proposent une' +
        ' manière vivante de découvrir notre patrimoine architectural et musical à travers ' +
        'l’instrument commun à tous : la voix. Elles créent dans les lieux les plus variés des' +
        ' espaces poétiques singuliers aiguisant ainsi l’œil et l’oreille. \n' +
        ' \n' +
        'Giacinto Scelsi   une œuvre pour  pour saxophone solo\n\n' +
        'Betsy Jolas : De nuit, deux chants à voix seule\n\n' +
        'Boris Clouteau : 1° reprise de "Et puis plus rien" pour trois voix de femmes et saxophone ' +
        'alto – \n\n' +
        'Guilhem Lacroux : Nouvelle œuvre, pour voix seule\n\n' +
        'Hildegard von Bingen : De angelo, Aer enim volat,O splendidissima gemma\n\n' +
        'Sophie Lacaze : Je vois passer l’ange, pour trois voix de femmes et saxophone alto\n\n' +
        'Caroline Marçot : Cantar del alma, pour trois voix de femmes\n\n' +
        'Luigi Nono : Djamila boupacha, pour soprano solo\n\n',
        'assets/images/moravocis.jpeg',
        undefined
      ),
      new Concert('« Pandore »',
        'A venir', 'A venir',
        'Hélène Breschand, Karelle Prugnaud, et Erik M',
        'Pandore est un prétexte , un appui , une source , un questionnement sur la nature de l\'homme Se\n' +
        'frotter à l\'inconnu , à l\'autre , à sa peau , aux mots , à la poésie , à l\'instant présent A chaque fois que\n' +
        'nous ouvrons la boite de Pandore , tous les maux de l\'humanité s\'échappent sauf l\'espérance , la\n' +
        'curiosité à fait place à la sagesse , la sagesse à la liberté C\'est à travers une performance , unique à\n' +
        'chacune de ses représentations comme à chaque fois que nous ouvrons cette boite , une histoire\n' +
        'différente se crée , interrogeant par la musique , les textes , la danse et la lumière , le phénomène de\n' +
        'la mutation : mutation de la vie qui se frotte à la répétition qui n\'en n\'est jamais une , mutation qui se\n' +
        'frotte à l\'expérience , à l\'expérimentation. Il s\'agit ici de peau , de poésie , de poésie mobile , qui s\'écrit\n' +
        'à l\'intérieur de soi et sur la peau A travers tatouages et plis , chaque vers possède le don de nous\n' +
        'transformer Nos vies , nos peaux , nos mots comme autant de palimpsestes',
        'assets/images/pandore.jpg',
        undefined
      )

    ];
  }*/
}

export class Concert {
  constructor(public id: string,
              public title: string,
              public dateTime: string,
              public location: string,
              public artist: string,
              public description: string,
              public image: string,
              public flyer: string

  ) {

  }
}

