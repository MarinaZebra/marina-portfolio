/* All visible content lives here. Edit this file to change text, images or order;
   design and behaviour are in css/styles.css and js/app.js. */
window.CONTENT = {
  name: "Marina Pérez",
  tagline: "From Environmental Data to Evidence-Based Decisions",
  linkedin: "https://www.linkedin.com/in/marina-pérez-álvarez-83385b227",

  about:
    "Natural Environmental Engineer specialising in Forestry, with a Master's degree in Environmental Management of Mountain Areas. Experienced in forest ecology, GIS, remote sensing, spatial modelling and habitat mapping. Passionate about using spatial data analysis and statistical modelling to transform complex environmental data into actionable insights that support evidence-based decision-making.",

  /* Projects: sections shown only when present. `figure` on a section is the image that
     stays pinned beside it while that section is on screen (scrollytelling). */
  projects: [
    {
      id: 1,
      title: "Mapping species suitability for climate-resilient forest restoration",
      summary:
        "Environmental suitability of native monteverde species in Tenerife, comparing historical conditions with mid-century climate projections to guide species selection and planting locations.",
      cover: { src: "tenerife-map", w: 1367, h: 1135, alt: "Map of Tenerife produced in the suitability analysis, in a blue-to-red colour scale" },
      figures: {
        map: { src: "tenerife-map", w: 1367, h: 1135, alt: "Map of Tenerife produced in the suitability analysis, in a blue-to-red colour scale", caption: "Map of Tenerife from the suitability analysis." },
        workflow: { src: "p1-workflow", w: 800, h: 816, alt: "Workflow: BIOTA presence records; filter for reliable, high-precision occurrences; historical niche extraction; climate variables from SICMA Canarias; topographic variables (elevation and northness); weighted suitability index; historical suitability map; future suitability map (SSP2-4.5, 2041–2070)", caption: "Analysis workflow, from occurrence records to the future suitability map (SSP2-4.5, 2041–2070)." }
      },
      sections: [
        { key: "Description", figure: "map", text: "Assessment of the environmental suitability of native monteverde species to support forest restoration in Tenerife. The analysis compares historical conditions with mid-century climate projections to guide species selection and planting locations." },
        { key: "Objective", figure: "map", text: "Identify suitable areas for native forest species and assess how their suitability may change under future climate conditions." },
        { key: "Input Data", figure: "map", text: "Filtered species occurrence records from BIOTA Canarias, historical and projected climate data from SICMA, and elevation and aspect derived from GRAFCAN terrain data." },
        { key: "Methodology", figure: "workflow", text: "Define empirical environmental niches using occurrence-based percentiles. Combine climatic and terrain scores into a weighted suitability index, apply a winter cold penalty, and compare historical and future maps." },
        { key: "Tools", figure: "workflow", text: "GIS spatial analysis, raster processing, terrain analysis, percentile-based scoring and weighted multicriteria evaluation." }
      ]
    },
    {
      id: 2,
      title: "Monitoring the spatial distribution of holm oak mortality in relation to spread patterns of Phytophthora cinnamomi and associated terrain-derived mechanisms",
      summary:
        "Thesis on the spatial distribution of holm oak mortality in a Mediterranean dehesa affected by Phytophthora cinnamomi, and its relationship with terrain and potential water movement pathways.",
      cover: { src: "p2-orthophoto", w: 661, h: 468, alt: "Aerial orthophoto of scattered holm oak trees in a dehesa, dated 2010" },
      figures: {
        ortho: { src: "p2-orthophoto", w: 661, h: 468, alt: "Aerial orthophoto of scattered holm oak trees in a dehesa, dated 2010", caption: "Orthophoto of the dehesa (2010)." },
        exgr: { src: "p2-exgr", w: 1400, h: 990, alt: "Tree crowns highlighted in warm colours over a blue background in a vegetation index raster labelled ExGR = ExG − ExR", caption: "Vegetation index raster (ExGR = ExG − ExR) highlighting tree crowns." },
        slope: { src: "p2-slope", w: 1600, h: 1131, alt: "Slope raster in a blue-green-yellow colour scale, legend from 0 to 169.43", caption: "Terrain slope raster (legend range 0–169.43)." }
      },
      sections: [
        { key: "Description", figure: "ortho", text: "This thesis investigates the spatial distribution of holm oak mortality in a Mediterranean dehesa affected by Phytophthora cinnamomi, exploring its relationship with terrain and potential water movement pathways." },
        { key: "Input Data", figure: "ortho", text: "High-resolution PNOA orthophotos spanning 12 years, a dehesa study-area mask, terrain-derived variables, and distances to mapped mortality clusters and roads." },
        { key: "Methodology", figure: "exgr", text: "Map mortality from multitemporal orthophotos and analyse its spatial patterns. Use binomial logistic regression to assess associations with topography, wetness indices and proximity variables." },
        { key: "Tools", figure: "slope", text: "GIS spatial analysis, orthophoto interpretation, terrain modelling, spatial clustering and statistical modelling using a binomial generalised linear model." },
        { key: "Results", figure: "slope", text: "The models showed limited discriminatory performance (AUC: 0.596–0.616), with higher topographic wetness associated with increased mortality occurrence. The findings provide exploratory evidence and highlight the need for field validation." }
      ]
    },
    {
      id: 3,
      title: "Mapping of terrestrial habitats: improving spatial information at the national level (project 22bdes905)",
      summary:
        "National mapping of Spain's terrestrial and coastal habitats at 1:25,000 for biodiversity conservation and environmental planning. My contribution focused on lotic habitats: rivers and streams.",
      cover: { src: "natura2000", w: 250, h: 250, alt: "Natura 2000 logo", contain: true },
      figures: {
        logo: { src: "natura2000", w: 250, h: 250, alt: "Natura 2000 logo", caption: "Habitat types are related to the Habitats Directive (Natura 2000) classification.", contain: true }
      },
      sections: [
        { key: "Description", figure: "logo", text: "National mapping of Spain's terrestrial and coastal habitats at a scale of 1:25,000, providing consistent spatial information for biodiversity conservation and environmental planning. My contribution focused on lotic habitats, including rivers and streams." },
        { key: "Input Data", figure: "logo", text: "Spanish Forest Map (MFE), regional habitat maps, national spatial datasets, hydrographic information, scientific literature and field observations. My work focused on water chemistry variables, including alkalinity, salinity and dissolved oxygen.", mine: true },
        { key: "Methodology", figure: "logo", text: "Harmonise habitat classifications using the updated Spanish Habitat Reference List and its relationships with EUNIS and Habitats Directive types. Assign habitats through spatial integration, photointerpretation, expert judgement and field surveys. My contribution included correlation and similarity matrix analyses to explore relationships among water chemistry variables.", mine: true },
        { key: "Tools", figure: "logo", text: "GIS mapping and digitisation, spatial overlay, geodatabases and ETL workflows, alongside statistical analysis in R. The wider project envisaged a transition to a normalised PostGIS database." },
        { key: "Results", figure: "logo", text: "An updated habitat reference list and national habitat mapping under development, supported by methodological reports and a map viewer. Further fieldwork and methodological refinements were needed for several habitat groups." }
      ]
    },
    {
      id: 4,
      title: "Carbon Markets and the Transformation of Forest Management",
      summary:
        "Assessment of carbon storage and ecological value in a native forest, supporting conservation through a reporting framework based on ISO 14064-2.",
      cover: null,
      /* No image provided yet: the card shows a key figure instead */
      coverStat: { value: "≈102,234", unit: "t CO₂", label: "Estimated above-ground carbon stocks" },
      figures: {},
      sections: [
        { key: "Description", text: "Assessment of carbon storage and ecological value in a native forest. The project supports forest conservation through a reporting framework based on ISO 14064-2." },
        { key: "Input Data", text: "Forest inventory records collected in October 2024, species observations, forest boundaries, elevation and climate data, aerial imagery, conservation-status information and scientific literature." },
        { key: "Methodology", text: "Characterise the forest's environmental conditions, carbon stocks and biodiversity. Compare a baseline scenario of forest clearance with a conservation scenario, considering potential emissions and impacts on habitat connectivity." },
        { key: "Tools", text: "Forest inventory assessment, Google Earth imagery interpretation, spatial mapping, literature review and project-level greenhouse gas reporting guided by ISO 14064-2." },
        { key: "Results", text: "The report estimated above-ground carbon stocks equivalent to approximately 102,234 tonnes of CO₂ and documented more than 36 tree species. It highlighted the forest's importance for carbon protection, threatened flora and landscape connectivity." }
      ]
    }
  ],

  /* Career timeline, in chronological order. kind: "study" | "work" */
  career: [
    { period: "2018 – 2023", title: "Bachelor's degree in Natural Environmental Engineering", kind: "study", tone: "#4d6b1e" },
    { period: "2021 – 2022", title: "Erasmus Exchange NTNU", kind: "study", tone: "#7f9f8a" },
    { period: "2022", title: "Urban Tree Management Intern", kind: "work", tone: "#a9a82b" },
    { period: "2023", title: "TATU Project – Water and Environment Programme Assistant", detail: "Cooperation scholarship", kind: "work", tone: "#7a4f3c" },
    { period: "2023 – 2024", title: "Environmental Consulting Assistant", kind: "work", tone: "#0fae63" },
    { period: "2024 – 2026", title: "Master in Environmental Management of Mountain Areas", kind: "study", tone: "#9ad85b" },
    { period: "2025 – 2026", title: "Environmental and Spatial Data Technician", kind: "work", tone: "#16c24a" },
    { period: "2026", title: "Forest Restoration Technician", kind: "work", tone: "#c6d400" }
  ],

  technical: {
    title: "Technical Profile",
    subtitle: "Tools, Capabilities, and Method",
    skillsLabel: "Technical Skills",
    skills: "Raster and vector data processing, multitemporal analysis, spatial databases, quality control and cartographic communication.",
    toolsLabel: "Tools",
    tools: ["QGIS", "ArcGIS", "Python", "R", "rasterio", "GeoPandas", "Shapely", "GDAL/OGR", "PyProj", "xarray", "rioxarray", "terra", "sf"],
    toolsNote: "Alongside workflows using satellite remote sensing imagery."
  },

  articles: [
    {
      id: 1,
      title: "Rediscovering a Norwegian garden",
      image: { src: "blog-norway", w: 1600, h: 1068, alt: "Hillside of autumn birch forest in ochre tones below a snow-dusted mountain" },
      caption: "Deciduous forests in Besseggen, October 2021.",
      paragraphs: [
        "A third of Norway's territory is covered by forests. Anyone who has walked through them will have noticed that they are not simply vast stands of conifers: birch, rowan and other deciduous trees are also common. These trees have evolved to withstand the strong seasonality of their habitats, coping with harsh winters and mild summers.",
        "The distribution of ecosystems is determined by climate, which is often influenced by latitude. Yet, if we look at the global distribution of deciduous forests, we may notice that in North America they are found farther south than in Europe. Anyone walking through a Norwegian forest might therefore wonder how alders can grow so far north. Perhaps not every visitor asks this question, but I did—and found the answer much farther south than I had imagined, in the Caribbean Sea.",
        "Ocean currents are large masses of cold or warm water that move around the planet, transporting water from one place to another. The Gulf Stream, originating in the Gulf of Mexico, carries a constant flow of warm water towards the coasts of northern Europe. As a result, Norway and Iceland have a more humid and temperate climate than other places at the same latitude in the Northern Hemisphere.",
        "Proximity to the sea and abundant rainfall allow deciduous forests to thrive in this part of Scandinavia, thanks to the favourable climate influenced by warm tropical waters from the other side of the Atlantic. For travellers visiting in autumn, the result is a colourful landscape filled with ochre tones."
      ]
    },
    {
      id: 2,
      title: "See the barley dance",
      image: { src: "blog-harrier", w: 740, h: 555, alt: "Two chicks in a nest on the ground within a cereal field" },
      caption: "Montagu's harrier chicks near Fresno de Cantespino, July 2020.",
      paragraphs: [
        "Travelling across large parts of the Spanish plateaus means spending hours in the car looking out over seemingly empty crop fields in ochre tones. Yet these apparently monotonous landscapes can reveal complex food chains to anyone willing to pause and look beyond the wheat. Steppe birds, small mammals and arthropods inhabit these cereal plains, and their survival is being threatened by the abandonment of traditional farming practices.",
        "The Common Agricultural Policy (CAP) was established in 1962 to increase agricultural production and ensure affordable food for Europe's impoverished population in the aftermath of the Second World War. Within a few decades, shortages had given way to surpluses of many products.",
        "Agricultural intensification played a major role in this success. It transformed the way we produce food so rapidly that species have had little time to adapt.",
        "Agricultural machinery, increasingly uniform crops, the loss of field boundaries and fences, and the use of fertilisers are just some of the changes introduced to meet current demand.",
        "One of the species affected by these changes is Montagu's harrier (Circus pygargus). This small bird of prey flies more than 6,000 km from Africa each spring to breed in the Iberian Peninsula. Once there, the female builds a nest on the ground in cereal fields, where her chicks hatch. They need to spend around a month in the nest before learning to fly. However, it is estimated that 60% of the young never leave it, falling victim to the blades of harvesters.",
        "The common vole is one of the harrier's prey species. During the breeding season, each harrier can catch up to a dozen voles a day: around 300 individuals a month.",
        "The current lack of vole predators means that their populations often reach outbreak levels, causing substantial economic losses for farmers and prompting the use of rodenticides.",
        "Are we really becoming more efficient?"
      ],
      closing: true
    },
    {
      id: 3,
      title: "Inside the life of a Large Blue",
      image: { src: "blog-large-blue", w: 1600, h: 1200, alt: "Large Blue butterfly with spotted pale wings resting on a red clover flower" },
      extraImages: [{ src: "blog-large-blue-meadow", w: 1600, h: 1200, alt: "Large Blue butterfly feeding on red clover in a mountain meadow among grasses and yellow flowers" }],
      caption: "Large Blue in Revilla, July 2021.",
      paragraphs: [
        "Anyone who has walked through Ordesa y Monte Perdido National Park will recognise its special charm. Yet what makes this place truly magical is its inhabitants. While exploring the uninhabited village of Revilla, I encountered one of its least-known residents—and perhaps one of its most interesting: the Large Blue (Phengaris arion).",
        "This endangered butterfly, a member of the Lycaenidae family, can easily go unnoticed by anyone unfamiliar with its story. Its complex life cycle, however, is hard to forget.",
        "Adult P. arion lay their eggs on herbaceous plants such as oregano. After hatching, the caterpillars spend a few days feeding on the leaves before dropping to the ground. There, they release a pheromone that tricks ants of the genus Myrmica into mistaking them for their own larvae and carrying them into the nest.",
        "Once inside, these cunning outsiders feed on protein-rich ant larvae. Eventually, they form a chrysalis in this unusual shelter, spending the winter protected from the cold. When summer arrives, the adult emerges from the ant nest as a magnificent butterfly. With a lifespan of just 5–10 days, it must quickly find a mate and begin the cycle again.",
        "This elusive species can be seen flying from late June to early August. It inhabits moist, grassy mountain meadows and is highly sensitive to habitat alteration. The loss of Myrmica ants or the plants on which it lays its eggs—for example, following the abandonment of traditional livestock grazing—inevitably leads to the disappearance of this remarkable species."
      ]
    }
  ]
};
