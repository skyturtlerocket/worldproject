import type { Tour } from "@/lib/types";

export const germanyTour: Tour = {
  region: "germany",
  title: "Germany: A Country Cut in Two",
  subtitle: "Berlin, 1945–1989",
  intro:
    "After World War II, Germany and Berlin were split into Western and Soviet zones. Over time that temporary split became two separate states with different political systems. In 1961, the Berlin Wall made the division physical. This tour shows places in Berlin where that split shaped daily life.",
  stops: [
    {
      id: "bernauer-strasse",
      name: "Berlin Wall Memorial (Bernauer Straße)",
      lat: 52.5354,
      lng: 13.3902,
      panoId: "M9qCqQq2NNj3KhcVSUKq8A",
      heading: 200,
      pitch: 0,
      zoom: 1,
      era: "1961–1989",
      summary:
        "A street where homes and families were split overnight when the Wall was built.",
      description:
        "On August 13, 1961, East German forces put up barbed wire down Bernauer Straße. One side of the street was in East Berlin, but the sidewalk in front of it was in West Berlin. In the first days, some residents jumped from apartment windows to escape. Soon after, windows were sealed and buildings were torn down to create the border zone.\n\nToday this memorial keeps one of the clearest preserved sections of the Wall system, including a watchtower and the open strip between barriers. It helps explain that the Wall was built to stop people from leaving East Germany, not to keep outsiders out.",
    },
    {
      id: "east-side-gallery",
      name: "East Side Gallery",
      lat: 52.5052,
      lng: 13.4396,
      panoId: "HsHst2xOO6Ikcr2spP1omw",
      heading: 60,
      pitch: 0,
      zoom: 1,
      era: "1990–present (Wall section: 1961–1989)",
      summary:
        "A long surviving Wall section turned into public art after reunification.",
      description:
        "This riverside stretch is the longest remaining section of the Berlin Wall. In 1990, artists from many countries painted murals on it, including the famous Brezhnev-Honecker kiss image.\n\nFor most of the Cold War, this was guarded concrete with strict controls and deadly consequences for escape attempts. The gallery shows how quickly the meaning of the same structure changed after 1989, from a border barrier to a memory site.",
    },
    {
      id: "brandenburg-gate",
      name: "Brandenburg Gate",
      lat: 52.5165,
      lng: 13.3771,
      panoId: "N-mvG6UF2JO4hiQwb23teg",
      heading: 90,
      pitch: 2,
      zoom: 0,
      era: "Symbol: 1791–present; sealed by Wall: 1961–1989",
      summary:
        "A national symbol that stood trapped in the border zone until 1989.",
      description:
        "When the Wall went up, Brandenburg Gate was closed off inside the East Berlin border area. West Berliners could see it from a distance, but could not reach it.\n\nAfter the border opened in late 1989, the gate became one of the strongest symbols of reunification. It shows how one location can represent very different moments in German history: monarchy, dictatorship, division, and reunification.",
    },
    {
      id: "checkpoint-charlie",
      name: "Checkpoint Charlie",
      lat: 52.5077,
      lng: 13.3905,
      panoId: "G57Y1GuccXlVRAtt2Q3UjA",
      heading: 0,
      pitch: 0,
      zoom: 1,
      era: "1961–1990",
      summary:
        "A famous crossing where Cold War tensions almost turned into direct conflict.",
      description:
        "Checkpoint Charlie was the best known crossing between East and West Berlin for foreigners, diplomats, and military personnel. In 1961, U.S. and Soviet tanks faced each other here during a major standoff.\n\nFor Berlin residents, this place also meant strict control of movement and painful separation from relatives across the border. It is remembered not only for superpower politics, but also for the everyday human cost of division.",
    },
    {
      id: "tranenpalast",
      name: "Palace of Tears (Tränenpalast)",
      lat: 52.5207,
      lng: 13.38,
      panoId: "0qgb8tyfQLZ3lAUEaGsDcA",
      heading: 90,
      pitch: 0,
      zoom: 1,
      era: "1962–1989",
      summary:
        "A border departure hall known for emotional family goodbyes.",
      description:
        "This building at Friedrichstraße station was the exit point from East Berlin to the West for approved travelers. Many people said goodbye to relatives here with no certainty about when they would meet again.\n\nIts nickname, Palace of Tears, came from those scenes. The site is a reminder that Cold War borders were not only about states and armies, but also about family life and personal relationships.",
    },
    {
      id: "oberbaum-bridge",
      name: "Oberbaum Bridge",
      lat: 52.5018,
      lng: 13.4457,
      panoId: "QwywTc6rJPWRWyX6G2h5rg",
      heading: 30,
      pitch: 0,
      zoom: 1,
      era: "Border crossing: 1961–1989",
      summary:
        "A local bridge that became an international border crossing.",
      description:
        "Before division, this bridge simply connected nearby Berlin neighborhoods. After 1961, it became part of the East-West border system with controlled crossing rules.\n\nToday it looks normal again, with trains and traffic moving across it. That contrast helps show how the Cold War changed ordinary urban spaces and how reunification restored connections that had been blocked for decades.",
    },
  ],
};
