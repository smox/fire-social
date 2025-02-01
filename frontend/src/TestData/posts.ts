import { v4 as uuid } from 'uuid';
import { IPost } from '../interfaces/Models';
import { AnnaSchmidt, ClaudiaFischer, GeorgWimmer, KarlMüller, LisaBaumgartner, MariaHuber, MichaelWagner, PeterMeier, 
  ReneWeber, SabineKoenig, ThomasBauer, ThomasMueller, currentUser } from '../TestData/users';



export const posts: IPost[] = [
  {
    id: uuid(),
    title: 'Verkehrsunfall mit 3 Fahrzeugen',
    content: 'In den frühen Morgenstunden des 26.01.2025 wurde die Freiwillige Feuerwehr Lengenfeld zu einem schweren Verkehrsunfall auf die B37 auf Höhe Jaidhof alarmiert.'+
      '\n\nGegen 05:30 Uhr kollidierten bei starkem Nebel drei PKWs miteinander, die Insassen wurden teilweise in ihren Autos eingeklemmt. Die demolierten Autos kamen auf der Fahrbahn beziehungsweise im angrenzenden Feld zu stehen. Alarmiert wurden die Feuerwehren Eisengraben, Gföhl und Sperkental zur Menschenrettung, zu welcher sie unverzüglich ausrückten. Die verletzten Personen konnten von den ortsansässigen Feuerwehren rasch mittels hydraulischem Rettungsgerät aus ihren Fahrzeugen befreit und an den Rettungsdienst und die Notärzte übergeben werden.'+
      'Zur Bergung der Unfallfahrzeuge wurde schließlich die Freiwillige Feuerwehr Lengenfeld nachalarmiert, die mit dem Rüstlösch- und dem Wechselladefahrzeug mit Kran auf die B37 ausfuhr. Nachdem die drei Unfallwracks nicht mehr fahrtüchtig waren, rüstete sich die FF Lengenfeld mit Felgenbändern, Ketten und dem Hebekreuz aus. Die Autos wurden mit dem Kran des Wechselladers auf dessen Bergeplateau gehoben, dort festgemacht und zum nächstgelegenen, geeignetem Abstellplatz gebracht. Dort wartete die Feuerwehr Sperkental und unterstützte beim Abladen. Die Kameraden aus Gföhl und Eisengraben banden derweilen die ausgetretenen Flüssigkeiten und reinigten die Fahrbahn. Danach konnte die B37 durch die Exekutive wieder für den Verkehr freigegeben werden.\n\n'+
      'Die 11 Mitglieder der Freiwilligen Feuerwehr Lengenfeld konnten mit ihren beiden Fahrzeugen nach über zwei Stunden den Einsatz beenden und ins Feuerwehrhaus einrücken.\n\n'+
      'Herzlichen Dank für die gute Zusammenarbeit!',
    attachments: [{ 
      url: '/stockfotos_einsaetze/vu_3_kfz/1.jpg', 
      altText: "Verkehrsunfall mit 3 Fahrzeugen 1.Foto" 
    },{ 
      url: '/stockfotos_einsaetze/vu_3_kfz/2.jpg', 
      altText: "Verkehrsunfall mit 3 Fahrzeugen 2.Foto" 
    },{ 
      url: '/stockfotos_einsaetze/vu_3_kfz/3.jpg', 
      altText: "Verkehrsunfall mit 3 Fahrzeugen 3.Foto" 
    },{ 
      url: '/stockfotos_einsaetze/vu_3_kfz/4.jpg', 
      altText: "Verkehrsunfall mit 3 Fahrzeugen 4.Foto" 
    },{ 
      url: '/stockfotos_einsaetze/vu_3_kfz/5.jpg', 
      altText: "Verkehrsunfall mit 3 Fahrzeugen 5.Foto" 
    },{ 
      url: '/stockfotos_einsaetze/vu_3_kfz/6.jpg', 
      altText: "Verkehrsunfall mit 3 Fahrzeugen 6.Foto" 
    },{ 
      url: '/stockfotos_einsaetze/vu_3_kfz/7.jpg', 
      altText: "Verkehrsunfall mit 3 Fahrzeugen 7.Foto" 
    },{ 
      url: '/stockfotos_einsaetze/vu_3_kfz/8.jpg', 
      altText: "Verkehrsunfall mit 3 Fahrzeugen 8.Foto" 
    },{ 
      url: '/stockfotos_einsaetze/vu_3_kfz/9.jpg', 
      altText: "Verkehrsunfall mit 3 Fahrzeugen 9.Foto" 
    },{ 
      url: '/stockfotos_einsaetze/vu_3_kfz/10.jpg', 
      altText: "Verkehrsunfall mit 3 Fahrzeugen 10.Foto" 
    },{ 
      url: '/stockfotos_einsaetze/vu_3_kfz/11.jpg', 
      altText: "Verkehrsunfall mit 3 Fahrzeugen 11.Foto" 
    },{ 
      url: '/stockfotos_einsaetze/vu_3_kfz/12.jpg', 
      altText: "Verkehrsunfall mit 3 Fahrzeugen 12.Foto" 
    },{ 
      url: '/stockfotos_einsaetze/vu_3_kfz/13.jpg', 
      altText: "Verkehrsunfall mit 3 Fahrzeugen 13.Foto" 
    },{ 
      url: '/stockfotos_einsaetze/vu_3_kfz/14.jpg', 
      altText: "Verkehrsunfall mit 3 Fahrzeugen 14.Foto" 
    },{ 
      url: '/stockfotos_einsaetze/vu_3_kfz/15.jpg', 
      altText: "Verkehrsunfall mit 3 Fahrzeugen 15.Foto" 
    },{ 
      url: '/stockfotos_einsaetze/vu_3_kfz/16.jpg', 
      altText: "Verkehrsunfall mit 3 Fahrzeugen 16.Foto" 
    },{ 
      url: '/stockfotos_einsaetze/vu_3_kfz/17.jpg', 
      altText: "Verkehrsunfall mit 3 Fahrzeugen 17.Foto" 
    },{ 
      url: '/stockfotos_einsaetze/vu_3_kfz/18.jpg', 
      altText: "Verkehrsunfall mit 3 Fahrzeugen 18.Foto" 
    },{ 
      url: '/stockfotos_einsaetze/vu_3_kfz/19.jpg', 
      altText: "Verkehrsunfall mit 3 Fahrzeugen 19.Foto" 
    },{ 
      url: '/stockfotos_einsaetze/vu_3_kfz/20.jpg', 
      altText: "Verkehrsunfall mit 3 Fahrzeugen 20.Foto" 
    }],
    category: 'Incidences', // TCategory
    visibility: 'Public',           // TVisibility
    customVisibility: null,
    tags: ['Einsaetze', 'PKW', 'Verkehrsunfall'],
    createdAt: new Date('2025-01-26T08:30:00.000Z'),
    likes: [ currentUser ],
    comments: [{
      id: uuid(),
      content: "Super Arbeit!",
      createdAt: new Date('2025-01-26T11:00:00.000Z'),
      likes: [ currentUser ],
      user: ClaudiaFischer,
    }],
    user: GeorgWimmer,
  }, {
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

