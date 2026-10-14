import { VehicleMake, VehicleModel } from '../types';

export const VEHICLE_MAKES: VehicleMake[] = [
  { id: "volkswagen", name: "Volkswagen", logoText: "VW" },
  { id: "dacia", name: "Dacia", logoText: "DACIA" },
  { id: "peugeot", name: "Peugeot", logoText: "PEUGEOT" },
  { id: "renault", name: "Renault", logoText: "RENAULT" },
  { id: "bmw", name: "BMW", logoText: "BMW" },
  { id: "mercedes", name: "Mercedes-Benz", logoText: "MERCEDES" },
  { id: "audi", name: "Audi", logoText: "AUDI" },
  { id: "hyundai", name: "Hyundai", logoText: "HYUNDAI" },
];

export const VEHICLE_MODELS: VehicleModel[] = [
  {
    id: "vw-golf-7",
    makeId: "volkswagen",
    name: "Golf 7 (2012 - 2020)",
    yearRange: "2012-2020",
    versions: ["1.6 TDI 105/115 ch", "2.0 TDI 150 ch", "2.0 TSI GTI / R"],
    factoryTireSizes: ["205/55 R16", "225/45 R17", "225/40 R18", "235/35 R19"],
    rimPcd: "5x112",
    rimOffsetRange: "ET40 - ET50",
    centerBore: 57.1
  },
  {
    id: "vw-golf-8",
    makeId: "volkswagen",
    name: "Golf 8 (2020 - Présent)",
    yearRange: "2020-2024",
    versions: ["2.0 TDI 115/150 ch", "1.5 eTSI 150 ch", "GTI 245 ch"],
    factoryTireSizes: ["205/55 R16", "225/45 R17", "225/40 R18", "235/35 R19"],
    rimPcd: "5x112",
    rimOffsetRange: "ET45 - ET51",
    centerBore: 57.1
  },
  {
    id: "dacia-sandero",
    makeId: "dacia",
    name: "Sandero / Stepway (2013 - Présent)",
    yearRange: "2013-2024",
    versions: ["1.5 dCi 85/90/95 ch", "1.0 TCe 90 ch", "1.0 SCe"],
    factoryTireSizes: ["185/65 R15", "195/55 R16", "205/60 R16"],
    rimPcd: "4x100",
    rimOffsetRange: "ET38 - ET45",
    centerBore: 60.1
  },
  {
    id: "peugeot-208",
    makeId: "peugeot",
    name: "208 (2019 - Présent)",
    yearRange: "2019-2024",
    versions: ["1.5 BlueHDi 100 ch", "1.2 PureTech 75/100/130 ch", "GT Line"],
    factoryTireSizes: ["195/55 R16", "205/45 R17"],
    rimPcd: "5x108",
    rimOffsetRange: "ET38 - ET48",
    centerBore: 65.1
  },
  {
    id: "peugeot-3008",
    makeId: "peugeot",
    name: "3008 II (2016 - 2023)",
    yearRange: "2016-2023",
    versions: ["1.5 BlueHDi 130 ch", "2.0 BlueHDi 180 ch", "1.6 PureTech 180 ch"],
    factoryTireSizes: ["215/65 R17", "225/55 R18", "205/55 R19"],
    rimPcd: "5x108",
    rimOffsetRange: "ET44 - ET50",
    centerBore: 65.1
  },
  {
    id: "renault-clio-4",
    makeId: "renault",
    name: "Clio 4 (2012 - 2019)",
    yearRange: "2012-2019",
    versions: ["1.5 dCi 85/90 ch", "0.9 TCe 90 ch", "1.2 16V"],
    factoryTireSizes: ["185/65 R15", "195/55 R16", "205/45 R17"],
    rimPcd: "4x100",
    rimOffsetRange: "ET38 - ET44",
    centerBore: 60.1
  },
  {
    id: "renault-clio-5",
    makeId: "renault",
    name: "Clio 5 (2019 - Présent)",
    yearRange: "2019-2024",
    versions: ["1.5 Blue dCi 85/115 ch", "1.0 TCe 90/100 ch", "E-Tech 145"],
    factoryTireSizes: ["195/55 R16", "205/45 R17"],
    rimPcd: "4x100",
    rimOffsetRange: "ET37 - ET43",
    centerBore: 60.1
  },
  {
    id: "bmw-serie3-f30",
    makeId: "bmw",
    name: "Série 3 F30 (2012 - 2019)",
    yearRange: "2012-2019",
    versions: ["318d / 320d 184/190 ch", "328i / 330i", "Pack M"],
    factoryTireSizes: ["205/60 R16", "225/50 R17", "225/45 R18", "255/40 R18"],
    rimPcd: "5x120",
    rimOffsetRange: "ET34 - ET45",
    centerBore: 72.6
  },
  {
    id: "bmw-serie3-g20",
    makeId: "bmw",
    name: "Série 3 G20 (2019 - Présent)",
    yearRange: "2019-2024",
    versions: ["318d / 320d", "320i / 330i", "M340i"],
    factoryTireSizes: ["225/50 R17", "225/45 R18", "255/40 R18", "225/40 R19"],
    rimPcd: "5x112",
    rimOffsetRange: "ET30 - ET40",
    centerBore: 66.6
  },
  {
    id: "merc-classe-a",
    makeId: "mercedes",
    name: "Classe A W177 (2018 - Présent)",
    yearRange: "2018-2024",
    versions: ["A 180d / A 200d", "A 180 / A 200", "AMG Line"],
    factoryTireSizes: ["205/60 R16", "205/55 R17", "225/45 R18", "225/40 R19"],
    rimPcd: "5x112",
    rimOffsetRange: "ET44 - ET49",
    centerBore: 66.6
  },
  {
    id: "merc-classe-c",
    makeId: "mercedes",
    name: "Classe C W205 (2014 - 2021)",
    yearRange: "2014-2021",
    versions: ["C 200d / C 220d", "C 180 / C 200", "AMG Line"],
    factoryTireSizes: ["225/50 R17", "225/45 R18", "245/40 R18"],
    rimPcd: "5x112",
    rimOffsetRange: "ET40 - ET50",
    centerBore: 66.6
  },
  {
    id: "audi-a3",
    makeId: "audi",
    name: "A3 Sportback 8V / 8Y (2013 - Présent)",
    yearRange: "2013-2024",
    versions: ["1.6 TDI / 2.0 TDI 150 ch", "30 / 35 TDI", "S Line"],
    factoryTireSizes: ["205/55 R16", "225/45 R17", "225/40 R18"],
    rimPcd: "5x112",
    rimOffsetRange: "ET43 - ET51",
    centerBore: 57.1
  },
  {
    id: "hyundai-tucson",
    makeId: "hyundai",
    name: "Tucson III & IV (2015 - Présent)",
    yearRange: "2015-2024",
    versions: ["1.6 CRDi 136 ch", "1.7 CRDi 115 ch", "1.6 T-GDi Hybrid"],
    factoryTireSizes: ["215/65 R17", "225/60 R17", "235/50 R19"],
    rimPcd: "5x114.3",
    rimOffsetRange: "ET45 - ET51",
    centerBore: 67.1
  }
];
