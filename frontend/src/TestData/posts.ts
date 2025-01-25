// Beispiel: posts.ts

import { v4 as uuid } from 'uuid';
import { IPost } from '../interfaces/Models'; // Pfad an dein IPost-Interface anpassen


const AnnaSchmidt = {
  id: uuid(),
  name: 'Anna Schmidt',
  email: 'anna.schmidt@feuerwehr.gv.at',
  avatar: '/stockfotos_user/as_profilfoto.webp',
}

const GeorgWimmer = {
  id: uuid(),
  name: 'Georg Wimmer',
  email: 'georg.wimmer@feuerwehr.gv.at',
  avatar: '/stockfotos_user/gw_profilfoto.webp',
}


const ReneWeber = {
  id: uuid(),
  name: 'Rene Weber',
  email: 'rene.weber@feuerwehr.gv.at',
  avatar: '/stockfotos_user/rw_profilfoto.webp',
}


const SabineKoenig = {
  id: uuid(),
  name: 'Sabine König',
  email: 'sabine.koenig@feuerwehr.gv.at',
  avatar: '/stockfotos_user/sk_profilfoto.webp',
}


const ThomasBauer = {
  id: uuid(),
  name: 'Thomas Bauer',
  email: 'thomas.bauer@feuerwehr.gv.at',
  avatar: '/stockfotos_user/tb_profilfoto.webp',
}

const MichaelWagner = {
  id: uuid(),
  name: 'Michael Wagner',
  email: 'michael.wagner@feuerwehr.gv.at',
  avatar: '/stockfotos_user/mw_profilfoto.webp',
}

const MariaHuber = {
  id: uuid(),
  name: 'Maria Huber',
  email: 'maria.huber@feuerwehr.gv.at',
  avatar: '/stockfotos_user/mh_profilfoto.webp'
}

const PeterMeier = {
    id: uuid(),
    name: 'Peter Meier',
    email: 'peter.meier@feuerwehr.gv.at',
    avatar: '/stockfotos_user/pm_profilfoto.webp',
}

const LisaBaumgartner = {
  id: uuid(),
  name: 'Lisa Baumgartner',
  email: 'lisa.baumgartner@feuerwehr.gv.at',
  avatar: '/stockfotos_user/lb_profilfoto.webp'
}

const ClaudiaFischer = {
  id: uuid(),
  name: 'Claudia Fischer',
  email: 'claudia.fischer@feuerwehr.gv.at',
  avatar: '/stockfotos_user/cf_profilfoto.webp'
}


const ThomasMueller = {
  id: uuid(),
  name: 'Thomas Müller',
  email: 'thomas.mueller@gmai.com',
  avatar: '/stockfotos_user/tm_profilfoto.webp'
}

const KarlMüller = {
  id: uuid(),
  name: 'Karl Müller',
  email: 'karl.mueller@feuerwehr.gv.at',
  avatar: '/stockfotos_user/km_profilfoto.webp'
}

export const posts: IPost[] = [
  {
    id: uuid(),
    title: 'Neues Mitglied unserer Feuerwehrjugend',
    content: 'Wir begrüßen unser neuestes Mitglied "Thomas Müller" in der Feuerwehrjugend.\nDas gesamte Betreuerteam freut sich auf eine tolle Zeit mit dir!',
    attachments: [{ 
      url: '/stockfotos_user/tm_aufnahme_fj.webp', 
      altText: "Thomas Müller wird in die Feuerwehrjugend aufgenommen" 
    }],
    category: 'JuniorFirefighters', // TCategory
    visibility: 'Public',           // TVisibility
    customVisibility: null,
    tags: ['Feuerwehrjugend', 'Neuzugang'],
    createdAt: new Date('2025-01-20T10:00:00.000Z'),
    likes: [],
    comments: [{
      id: uuid(),
      content: "Herzlich Willkommen, Thomas!",
      createdAt: new Date('2025-01-20T11:00:00.000Z'),
      likes: [ ThomasMueller ],
      user: ClaudiaFischer,
    }],
    user: GeorgWimmer,
  },
  {
    id: uuid(),
    title: 'Brand in der Hauptstraße erfolgreich gelöscht',
    content: 'Heute Nacht wurde ein Wohnhausbrand in der Hauptstraße erfolgreich gelöscht.\n\nEin großes Dankeschön an alle Kameraden, die vor Ort waren!',
    attachments: [{
      url: 'https://via.placeholder.com/150',
      altText: "attachment1"
    }, {
      url: 'https://via.placeholder.com/200',
      altText: "attachment2"
    }],
    category: 'Incidences',
    visibility: 'Public',
    customVisibility: null,
    tags: ['Einsatz', 'Brandbekämpfung'],
    createdAt: new Date('2025-01-21T12:00:00.000Z'),
    likes: [ PeterMeier, MariaHuber],
    comments: [
      {
        id: uuid(),
        content: 'Tolle Arbeit, Kameraden!',
        createdAt: new Date('2025-01-21T13:00:00.000Z'),
        likes: [],
        user: MariaHuber,
      },
    ],
    user: AnnaSchmidt,
  },
  {
    id: uuid(),
    title: 'Übung: Personenrettung im Waldgebiet',
    content: 'Am Samstag fand eine Übung zur Personenrettung in unwegsamem Gelände statt.\n\nVielen Dank an alle Teilnehmer!',
    attachments: [],
    category: 'Practice',
    visibility: 'Intern',
    customVisibility: null,
    tags: ['Übung', 'Rettung'],
    createdAt: new Date('2025-01-15T09:30:00.000Z'),
    likes: [],
    comments: [],
    user: ThomasBauer,
  },
  {
    id: uuid(),
    title: 'Nächster Workshop: Erste Hilfe',
    content: 'Am kommenden Dienstag veranstalten wir einen Erste-Hilfe-Workshop.\nTeilnahme ist für alle Kameraden Pflicht!',
    attachments: [],
    category: 'Workshops',
    visibility: 'Intern',
    customVisibility: null,
    tags: ['Workshop', 'Erste Hilfe'],
    createdAt: new Date('2025-01-18T16:00:00.000Z'),
    likes: [ KarlMüller ],
    comments: [
      {
        id: uuid(),
        content: 'Freue mich schon darauf!',
        createdAt: new Date('2025-01-19T10:45:00.000Z'),
        likes: [],
        user: LisaBaumgartner,
      },
    ],
    user: MichaelWagner
  },
  {
    id: uuid(),
    title: 'Einladung zum Sommerfest',
    content: 'Wir laden euch herzlich zu unserem Sommerfest ein! Datum: 25.06. Ort: Feuerwehrhaus. Für Speis und Trank ist gesorgt!',
    attachments: [{
      url: 'https://via.placeholder.com/150',
      altText: 'attachment1'
    }],
    category: 'Events',
    visibility: 'Public',
    customVisibility: null,
    tags: ['Sommerfest', 'Veranstaltung'],
    createdAt: new Date('2025-01-05T08:00:00.000Z'),
    likes: [ SabineKoenig ],
    comments: [{
      id: uuid(),
      content: 'Freue mich schon darauf!\nSollen wir etwas mitnehmen?\nIch kann meine Mama fragen ob sie was backt! :)',
      createdAt: new Date('2025-01-19T10:45:00.000Z'),
      likes: [],
      user: SabineKoenig,
    },],
    user: ReneWeber
  },
];

