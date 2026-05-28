import type { Tour } from "@/lib/types";

export const koreaTour: Tour = {
  region: "korea",
  title: "Korea: One Peninsula, Two States",
  subtitle: "The 38th Parallel, 1945–present",
  intro:
    "In 1945, Korea was divided at the 38th parallel by outside powers. What was first described as temporary became permanent after the Korean War. Since 1953, the DMZ has separated two Korean states, two governments, and millions of families. This tour visits places that show how that division still shapes life today.",
  stops: [
    {
      id: "imjingak",
      name: "Imjingak Peace Park",
      lat: 37.8893,
      lng: 126.7438,
      panoId: "JT5aCLe6V1kAvNoep_nNBQ",
      heading: 300,
      pitch: 0,
      zoom: 0,
      era: "1953–present",
      summary:
        "A site where people gather to remember relatives across the border.",
      description:
        "Imjingak is close to the DMZ and has become a major memorial site for divided families. Many visitors come here to leave messages and hold rites for relatives in the North they cannot visit.\n\nThe park captures one of the clearest personal effects of the Cold War in Korea. The border did not only divide territory. It split families, hometown ties, and daily routines for generations.",
    },
    {
      id: "dmz-border-view",
      name: "DMZ Border View (Imjingak)",
      lat: 37.8897,
      lng: 126.7385,
      panoId: "CAoSF0NJSE0wb2dLRUlDQWdJREUwZnphX1FF",
      heading: 340,
      pitch: 0,
      zoom: 0,
      era: "1953–present",
      summary:
        "A viewpoint toward the DMZ, one of the most militarized borders in the world.",
      description:
        "From this area near Imjingak, visitors can look toward the DMZ and nearby guard positions. The zone was created by the 1953 armistice and remains a buffer between North and South Korea.\n\nEven though the Korean War fighting stopped, no full peace treaty replaced the armistice. This stop helps show how a Cold War line on a map became a long-term political and military reality.",
    },
    {
      id: "war-memorial",
      name: "War Memorial of Korea (Seoul)",
      lat: 37.536,
      lng: 126.9764,
      panoId: "W0IheDLGaJwAAARGnHhCtg",
      heading: 200,
      pitch: 0,
      zoom: 1,
      era: "1950–1953 (Korean War)",
      summary:
        "A national memorial to the war that fixed Korea's division in place.",
      description:
        "The War Memorial in Seoul presents the history of the Korean War and its effects on soldiers and civilians. It explains how the conflict drew in major Cold War powers and ended with a ceasefire, not a final peace settlement.\n\nThe exhibits also highlight civilian suffering, displacement, and long-term separation. This stop connects military history to the social consequences that continued long after active fighting ended.",
    },
    {
      id: "third-tunnel",
      name: "The Third Tunnel (DMZ)",
      lat: 37.9167,
      lng: 126.6983,
      panoId: "CIHM0ogKEICAgIDE5djd8wE",
      heading: 49,
      pitch: -3,
      zoom: 0,
      era: "1978–present (discovered)",
      summary:
        "A tunnel site linked to military infiltration planning under the DMZ.",
      description:
        "This stop shows the visitor area for the Third Tunnel, discovered in 1978 near the DMZ. South Korean authorities describe it as part of an infiltration route planned from the North.\n\nBecause this region is tightly controlled, Google imagery is limited. Still, this viewpoint gives useful context for how both sides continued preparing for conflict long after the armistice.",
    },
    {
      id: "pyongyang",
      name: "Kim Il Sung Square (Pyongyang)",
      lat: 39.0098,
      lng: 125.7505,
      panoId: "CAoSFkNJSE0wb2dLRUlDQWdJRDQ0cmVLQlE.",
      heading: 15,
      pitch: 0,
      zoom: 0,
      era: "1948–present (capital of North Korea)",
      summary:
        "An outdoor view from central Pyongyang, showing the North's political center.",
      description:
        "Kim Il Sung Square is a major symbolic space in Pyongyang and is used for state events, rallies, and military displays. Public visual access to North Korea is limited, so even partial 360 imagery here is useful for understanding the northern capital.\n\nIncluding a Pyongyang stop balances the tour by showing that the Korean division created two political centers with different systems, not just one border zone.",
    },
    {
      id: "gwanghwamun",
      name: "Gwanghwamun Square (Seoul)",
      lat: 37.5759,
      lng: 126.9769,
      panoId: "DFw5HAxU--WCjGwf4yJ5aA",
      heading: 180,
      pitch: 0,
      zoom: 0,
      era: "1395–present (capital of a divided nation)",
      summary:
        "A major civic space in Seoul that represents modern South Korean identity.",
      description:
        "Gwanghwamun Square sits in the center of Seoul and is one of the most visible public spaces in South Korea. It hosts protests, national events, and memorials, and is tied closely to political life in the South.\n\nAs a final stop, it shows how the Cold War division of Korea shaped not only military boundaries, but also civic identity and national narratives in everyday urban space.",
    },
  ],
};
