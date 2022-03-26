import { Injectable } from '@angular/core';

export interface HeroesList {
  name: string;
  phone: string;
  email: string;
  date: string;
  country: string;
  company: string;
}

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  heroesList: HeroesList[];

  constructor() { }

  getHeroesList() {
    return [{
      "id": "1",
      "name": "Terry Smitham Medhurst",
      "phone": "+63 791 675 8914",
      "email": "atuny0@sohu.com",
      "date": "2000-12-25",
      "country": "Kosovo",
      "company": "INFOSYS LTD."
    },
    {
        "id": "2",
        "name": "Sheldon Cole Quigley",
        "phone": "+7 813 117 7139",
        "email": "hbingley1@plala.or.jp",
        "date": "2003-08-02",
        "country": "Kuwait",
        "company": "TATA CONSULTANCY SERVICES LTD."
    },
    {
        "id": "3",
        "name": "Terrill Hoeger Hills",
        "phone": "+63 739 292 7942",
        "email": "rshawe2@51.la",
        "date": "1992-12-30",
        "country": "Kyrgyzstan",
        "company": "RELIANCE INDUSTRIES LTD."
    },
    {
        "id": "4",
        "name": "Miles Maggio Cummerata",
        "phone": "+86 461 145 4186",
        "email": "yraigatt3@nature.com",
        "date": "1969-01-16",
        "country": "Laos",
        "company": "ICICI BANK LTD."
    },
    {
        "id": "5",
        "name": "Mavis Yundt Schultz",
        "phone": "+372 285 771 1911",
        "email": "kmeus4@upenn.edu",
        "date": "1968-11-03",
        "country": "Latvia",
        "company": "HDFC BANK LTD."
    },
    {
        "id": "6",
        "name": "Alison Franecki Reichert",
        "phone": "+351 527 735 3642",
        "email": "jtreleven5@nhs.uk",
        "date": "1969-07-21",
        "country": "Lebanon",
        "company": "HCL TECHNOLOGIES LTD."
    },
    {
        "id": "7",
        "name": "Oleta Wyman Abbott",
        "phone": "+62 640 802 7111",
        "email": "dpettegre6@columbia.edu",
        "date": "1982-02-21",
        "country": "Lesotho",
        "company": "BHARTI AIRTEL LTD."
    },
    {
        "id": "8",
        "name": "Ewell Durgan Mueller",
        "phone": "+86 946 297 2275",
        "email": "ggude7@chron.com",
        "date": "1964-08-24",
        "country": "Liberia",
        "company": "INDUSIND BANK LTD."
    },
    {
        "id": "9",
        "name": "Demetrius Gleason Corkery",
        "phone": "+86 356 590 9727",
        "email": "nloiterton8@aol.com",
        "date": "1971-03-11",
        "country": "Libya",
        "company": "STATE BANK OF INDIA"
    },
    {
        "id": "10",
        "name": "Eleanora Cummings Price",
        "phone": "+60 184 408 0824",
        "email": "umcgourty9@jalbum.net",
        "date": "1958-08-11",
        "country": "Liechtenstein",
        "company": "LARSEN & TOUBRO LTD."
    },
    {
        "id": "11",
        "name": "Marcel Smith Jones",
        "phone": "+967 253 210 0344",
        "email": "acharlota@liveinternet.ru",
        "date": "1961-09-12",
        "country": "Lithuania",
        "company": "TECH MAHINDRA LTD."
    },
    {
        "id": "12",
        "name": "Assunta Heller Rath",
        "phone": "+380 962 542 6549",
        "email": "rhallawellb@dropbox.com",
        "date": "1990-12-14",
        "country": "Luxembourg",
        "company": "AXIS BANK LTD."
    },
    {
        "id": "13",
        "name": "Trace Lemke Douglas",
        "phone": "+1 609 937 3468",
        "email": "lgribbinc@posterous.com",
        "date": "1967-07-23",
        "country": "Macedonia",
        "company": "ITC LTD."
    },
    {
        "id": "14",
        "name": "Enoch Heidenreich Lynch",
        "phone": "+94 912 100 5118",
        "email": "mturleyd@tumblr.com",
        "date": "1979-08-25",
        "country": "Madagascar",
        "company": "BAJAJ AUTO LTD."
    },
    {
        "id": "15",
        "name": "Jeanne Cummerata Halvorson",
        "phone": "+86 581 108 7855",
        "email": "kminchelle@qq.com",
        "date": "1996-02-02",
        "country": "Malawi",
        "company": "OIL AND NATURAL GAS CORPORATION LTD."
    },
    {
        "id": "16",
        "name": "Trycia Rosenbaum Fadel",
        "phone": "+420 833 708 0340",
        "email": "dpierrof@vimeo.com",
        "date": "1963-07-03",
        "country": "Malaysia",
        "company": "TATA STEEL LTD."
    },
    {
        "id": "17",
        "name": "Bradford Bins Prohaska",
        "phone": "+420 874 628 3710",
        "email": "vcholdcroftg@ucoz.com",
        "date": "1975-10-20",
        "country": "Maldives",
        "company": "NTPC LTD."
    },
    {
        "id": "18",
        "name": "Arely Monahan Skiles",
        "phone": "+55 886 766 8617",
        "email": "sberminghamh@chron.com",
        "date": "1958-02-05",
        "country": "Mali",
        "company": "MAHINDRA & MAHINDRA LTD."
    },
    {
        "id": "19",
        "name": "Gust Abshire Purdy",
        "phone": "+86 886 889 0258",
        "email": "bleveragei@so-net.ne.jp",
        "date": "1989-10-15",
        "country": "Malta",
        "company": "ASIAN PAINTS LTD."
    },
    {
        "id": "20",
        "name": "Lenna Schumm Renner",
        "phone": "+1 904 601 7177",
        "email": "aeatockj@psu.edu",
        "date": "1980-01-19",
        "country": "Marshall Islands",
        "company": "POWER GRID CORPORATION OF INDIA LTD."
    },
    {
        "id": "21",
        "name": "Doyle Feeney Ernser",
        "phone": "+86 634 419 6839",
        "email": "ckensleyk@pen.io",
        "date": "1983-01-22",
        "country": "Mauritania",
        "company": "BAJAJ FINSERV LTD."
    },
    {
        "id": "22",
        "name": "Tressa Williamson Weber",
        "phone": "+34 517 104 6248",
        "email": "froachel@howstuffworks.com",
        "date": "1987-11-11",
        "country": "Mauritius",
        "company": "TITAN COMPANY LTD."
    },
    {
        "id": "23",
        "name": "Felicity Rosenbaum O'Reilly",
        "phone": "+63 919 564 1690",
        "email": "beykelhofm@wikispaces.com",
        "date": "1967-10-05",
        "country": "Mexico",
        "company": "NESTLE INDIA LTD."
    },
    {
        "id": "24",
        "name": "Jocelyn Dooley Schuster",
        "phone": "+7 968 462 1292",
        "email": "brickeardn@fema.gov",
        "date": "1966-06-02",
        "country": "Micronesia, Federated States of",
        "company": "ULTRATECH CEMENT LTD."
    },
    {
        "id": "25",
        "name": "Edwina Kiehn Ernser",
        "phone": "+86 376 986 8945",
        "email": "dfundello@amazon.co.jp",
        "date": "2000-09-28",
        "country": "Moldova",
        "company": "SUN PHARMACEUTICAL INDUSTRIES LTD."
    },
    {
        "id": "26",
        "name": "Griffin Deckow Braun",
        "phone": "+62 511 790 0161",
        "email": "lgronaverp@cornell.edu",
        "date": "1965-09-06",
        "country": "Monaco",
        "company": "BAJAJ FINANCE LTD. "
    },
    {
        "id": "27",
        "name": "Piper Wuckert Schowalter",
        "phone": "+60 785 960 7918",
        "email": "fokillq@amazon.co.jp",
        "date": "1983-06-07",
        "country": "Mongolia",
        "company": "MARUTI SUZUKI INDIA LTD."
    },
    {
        "id": "28",
        "name": "Kody Larkin Terry",
        "phone": "+81 859 545 8951",
        "email": "xisherwoodr@ask.com",
        "date": "1979-01-09",
        "country": "Montenegro",
        "company": "HOUSING DEVELOPMENT FINANCE CORP. LTD."
    },
    {
        "id": "29",
        "name": "Macy Koepp Greenfelder",
        "phone": "+81 915 649 2384",
        "email": "jissetts@hostgator.com",
        "date": "1976-09-07",
        "country": "Morocco",
        "company": "HINDUSTAN UNILEVER LTD."
    },
    {
        "id": "30",
        "name": "Maurine Abshire Stracke",
        "phone": "+48 143 590 6847",
        "email": "kdulyt@umich.edu",
        "date": "1964-12-18",
        "country": "Mozambique",
        "company": "KOTAK MAHINDRA BANK LTD."
    }]
  }
}